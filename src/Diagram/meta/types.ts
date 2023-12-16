import { Edge, Node } from "reactflow";
import { SetStateAction } from "react";

export enum NodeType {
	Input = "input",
	Output = "output",
	Condition = "condition",
	Default = "default",
}

export enum NodeColor {
	Input = "#6ede87",
	Output = "#6865A5",
	Condition = "#FA9F42",
	Default = "#ff0072",
}

export enum EdgeType {
	Bezier = "default",
	Smoothstep = "smoothstep",
	Step = "step",
	Straight = "straight",
}

export interface ToolbarNode {
	label: string;
	type: NodeType;
	icon: React.ReactNode;
}

export interface ActionContextProviderProps {
	nodes: Node[];
	setNodes: (action: SetStateAction<Node[]>) => void;
	edges: Edge[];
	setEdges: (action: SetStateAction<Edge[]>) => void;
	children: React.ReactNode;
}
