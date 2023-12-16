import { Edge, Node } from "reactflow";
import { EdgeType, NodeColor, NodeType } from "./types";

export const DRAG_EVENT_DATA_TYPE = "application/reactflow";

export const INITIAL_NODES: Node[] = [
	{
		id: "1",
		type: NodeType.Default,
		data: { label: "1" },
		position: { x: 104.5, y: 124.5 },
		style: { backgroundColor: NodeColor.Default },
	},
	{
		id: "2",
		type: NodeType.Output,
		data: { label: "2" },
		position: { x: 340, y: 219.6 },
		style: { backgroundColor: NodeColor.Output },
	},
	{
		id: "3",
		type: NodeType.Input,
		data: { label: "3" },
		position: { x: 236.5, y: -0.5 },
		style: { backgroundColor: NodeColor.Input },
	},
	{
		id: "4",
		type: NodeType.Output,
		data: { label: "4" },
		position: { x: -29.5, y: 319.5 },
		style: { backgroundColor: NodeColor.Output },
	},
	{
		id: "5",
		type: NodeType.Condition,
		data: { label: "5" },
		position: { x: 300, y: 319.5 },
	},
];

export const INITIAL_EDGES: Edge[] = [
	{
		id: "reactflow__edge-1-2",
		source: "1",
		target: "2",
	},
	{
		id: "reactflow__edge-3-2",
		source: "3",
		target: "2",
		animated: true,
		type: EdgeType.Smoothstep,
	},
	{
		id: "reactflow__edge-3-1",
		source: "3",
		target: "1",
		label: "Edge label",
		type: EdgeType.Bezier,
	},
	{
		id: "reactflow__edge-1-4",
		source: "1",
		target: "4",
		type: EdgeType.Straight,
	},
];
