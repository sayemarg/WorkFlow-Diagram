import { NodeType } from "../../Diagram/meta/types";

export interface ToolbarNode {
	label: string;
	type: NodeType;
	icon: React.ReactNode;
}

export interface ToolsListProps {
	tools: ToolbarNode[];
}

export interface ToolsListItemProps {
	tool: ToolbarNode;
}
