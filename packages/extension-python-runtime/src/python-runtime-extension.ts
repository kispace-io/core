import { rootContext } from "@kispace-io/core";
import { registerAll } from "@kispace-io/core";
import { workspaceService } from "@kispace-io/core";
import { PyEnv } from "./pyservice";
import registerPackageManager from "./package-manager";

export { PyEnv } from "./pyservice";
export { pythonPackageManagerService } from "./package-manager";

export default (_context: any) => {
    rootContext.put("pyEnvClass", PyEnv);
    registerPackageManager(_context);

    registerAll({
        command: {
            id: "python",
            name: "Run Python Script",
            description: "Executes a Python script given its file path",
            parameters: [
                {
                    name: "script",
                    description: "the path to a Python script to run",
                    required: false
                }
            ]
        },
        handler: {
            execute: async (context: any) => {
                const script: string = context.params?.["script"];
                if (!script) return;
                const pyenv = new PyEnv();
                const workspace = await workspaceService.getWorkspace();
                // Only pass structured-cloneable data to the worker
                await pyenv.init(workspace!, { params: context.params });
                await pyenv.installDependencies();
                await pyenv.execScript(script);
            }
        }
    });
};
