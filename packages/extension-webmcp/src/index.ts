import { extensionRegistry } from "@kispace-io/core";
import pkg from "../package.json";

extensionRegistry.registerExtension({
  id: pkg.name,
  name: "WebMCP",
  description: "Exposes app commands as WebMCP tools for browser agents and MCP clients",
  loader: () => import("./webmcp-extension"),
  icon: "plug",
  dependencies: ["@kispace-io/extension-ai-system"],
});
