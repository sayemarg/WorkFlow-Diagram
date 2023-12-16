import { Edge, Node, ReactFlowState } from "reactflow";
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

export const isInteractiveSelector = (store: ReactFlowState) => {
	return (
		store.nodesDraggable ||
		store.nodesConnectable ||
		store.elementsSelectable
	);
};

export const getSelectedItems = (item: Node | Edge) => item.selected;

export const getNewNodeId = () => `${Math.random()}_${Date.now()}`;
