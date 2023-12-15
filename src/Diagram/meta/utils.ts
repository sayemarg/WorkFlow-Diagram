import { Edge, Node } from "reactflow";
import { NodeColor, NodeType } from "./types";

export const getNodeColor = (node: Node) => {
	switch (node.type) {
		case NodeType.Input:
			return NodeColor.Input;
		case NodeType.Output:
			return NodeColor.Output;
		case NodeType.Condition:
			return NodeColor.Condition;
		default:
			return NodeColor.Default;
	}
};

export const getSelectedItems = (item: Node | Edge) => item.selected;
