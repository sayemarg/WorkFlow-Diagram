import { Node } from "reactflow";
import { NodeColor, NodeType } from "./types";

export const getNodeColor = (node: Node) => {
	switch (node.type) {
		case NodeType.Input:
			return NodeColor.Input;
		case NodeType.Output:
			return NodeColor.Output;
		default:
			return NodeColor.Default;
	}
};
