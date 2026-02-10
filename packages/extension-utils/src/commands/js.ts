import { registerAll } from "@kispace-io/core";

registerAll({
  command: {
    id: "js",
    name: "Run JavaScript file",
    description: "Executes a JavaScript file given its path",
    parameters: [
      {
        name: "script",
        description: "the path to a JavaScript file to run",
        required: false
      }
    ]
  }
});

