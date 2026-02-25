import { registerAll, type ExecutionContext } from "../core/commandregistry";
import { RUN_ACTIVE_SCRIPT_ID } from "../core/constants";
import { toastInfo } from "../core/toast";

registerAll({
    command: {
        id: RUN_ACTIVE_SCRIPT_ID,
        name: "Run active script",
        description: "Run the content of the active editor with the appropriate runner for its language",
        parameters: [],
    }
});
