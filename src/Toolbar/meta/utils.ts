import { ToolbarNode } from "./types";

export const filterToolsByLabel = (serchKey: string) => (tool: ToolbarNode) => {
	return tool.label.toLowerCase().includes(serchKey);
};
