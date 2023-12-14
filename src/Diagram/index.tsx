import "reactflow/dist/style.css";
import "./assets/Diagram.css";
import ReactFlow, {
	Background,
	Connection,
	Controls,
	MiniMap,
	addEdge,
	useEdgesState,
	useNodesState,
} from "reactflow";
import NodePropertyPanel from "./components/NodePropertyPanel";
import ToolbarPanel from "./components/ToolbarPanel";
import { INITIAL_EDGES, INITIAL_NODES } from "./meta/constants";
import { getNodeColor } from "./meta/utils";
import { useCallback } from "react";

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

	return (
		<div className="container">
			<ReactFlow
				nodes={nodes}
				onNodesChange={onNodesChange}
				edges={edges}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				defaultEdgeOptions={{ deletable: false }}
				style={{ backgroundColor: '#D3D2E5' }}
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

				<Controls position="bottom-right" />

				<ToolbarPanel />

				<NodePropertyPanel />
			</ReactFlow>
		</div>
	);
};

export default Diagram;
