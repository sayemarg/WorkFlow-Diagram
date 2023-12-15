import "reactflow/dist/style.css";
import "./assets/Diagram.css";
import ReactFlow, {
	Background,
	Connection,
	MiniMap,
	Node,
	addEdge,
	useEdgesState,
	useNodesState,
} from "reactflow";
import ActionBar from "./components/ActionBar";
import NodePropertyPanel from "./components/NodePropertyPanel";
import SelectionContext from "./context/SelectionContext";
import ToolbarPanel from "./components/ToolbarPanel";
import customNodeTypes from "./nodeTypes";
import { INITIAL_EDGES, INITIAL_NODES } from "./meta/constants";
import { getNodeColor, getSelectedItems } from "./meta/utils";
import { useCallback, useMemo } from "react";

const Diagram = () => {
	const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES);
	const [edges, setEdges, onEdgesChange] = useEdgesState(INITIAL_EDGES);

	const onConnect = useCallback(
		(connection: Connection) => {
			if (connection.source === connection.target) return;

			setEdges((prevEdges) => addEdge(connection, prevEdges));
		},
		[setEdges]
	);

	const selectedNodes = useMemo<Node[]>(
		() => nodes.filter(getSelectedItems),
		[nodes]
	);

	return (
		<div className="container">
			<ReactFlow
				nodes={nodes}
				onNodesChange={onNodesChange}
				edges={edges}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				nodeTypes={customNodeTypes}
				defaultEdgeOptions={{ deletable: false }}
				style={{ backgroundColor: "#D3D2E5" }}
				// TODO: Add help panel to show this keys
				deleteKeyCode="Delete"
				selectionKeyCode="Shift"
				multiSelectionKeyCode="Control"
				fitView
			>
				<Background />

				<MiniMap
					nodeColor={getNodeColor}
					position="bottom-right"
					pannable
				/>

				<SelectionContext.Provider value={{ selectedNodes }}>
					<ActionBar />

					<NodePropertyPanel />
				</SelectionContext.Provider>

				<ToolbarPanel />
			</ReactFlow>
		</div>
	);
};

export default Diagram;
