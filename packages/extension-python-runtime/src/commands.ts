import { registerAll, workspaceService, toastError } from "@kispace-io/core";
import { PyEnv } from "./pyservice";

registerAll({
  command: {
    id: "python",
    name: "Run Python Cell",
    description:
      "Runs Python code. Optionally mounts the current workspace when requested.",
    keyBinding: "CTRL+R",
    parameters: [
      {
        name: "code",
        description: "Python code to execute",
        required: true
      },
      {
        name: "workspace",
        description:
          "Whether to mount and use the current workspace (default: false)",
        type: "boolean",
        required: false
      }
    ]
  },
  handler: {
    execute: async (context: any) => {
      const code: string | undefined = context.params?.code;
      if (!code) {
        toastError("No Python code provided.");
        return;
      }

      const useWorkspaceParam = context.params?.workspace;
      const useWorkspace =
        useWorkspaceParam === true || useWorkspaceParam === "true";

      const pyenv = new PyEnv();

      if (useWorkspace) {
        const workspace = await workspaceService.getWorkspace();
        if (!workspace) {
          toastError("No workspace selected.");
          return;
        }
        await pyenv.init(workspace, context);
      } else {
        // Initialize Python runtime without mounting a workspace
        await pyenv.init(undefined, context);
      }

      await pyenv.execCode(code);
    }
  }
});

