import "reactflow/dist/style.css";
import "./assets/Diagram.css";
import ReactFlow, {
	Background,
	Connection,
	MiniMap,
	ReactFlowInstance,
	ReactFlowProvider,
	addEdge,
	useEdgesState,
	useNodesState,
} from "reactflow";
import {
	DRAG_EVENT_DATA_TYPE,
	INITIAL_EDGES,
	INITIAL_NODES,
} from "./meta/constants";
import ActionBar from "./components/ActionBar";
import ActionContextProvider from "./components/ActionContextProvider";
import NodePropertyPanel from "./components/NodePropertyPanel";
import ToolbarPanel from "./components/ToolbarPanel";
import customNodeTypes from "./nodeTypes";
import { DragEvent, useCallback, useRef } from "react";
import { getNewNodeId, getNodeColor } from "./meta/utils";

const Diagram = () => {
	const reactFlowInstanceRef = useRef<ReactFlowInstance>();

	const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES);
	const [edges, setEdges, onEdgesChange] = useEdgesState(INITIAL_EDGES);

	const onConnect = useCallback(
		(connection: Connection) => {
			if (connection.source === connection.target) return;

			setEdges((prevEdges) => addEdge(connection, prevEdges));
		},
		[setEdges]
	);

	const handleOnInit = useCallback((reactFlowInstance: ReactFlowInstance) => {
		reactFlowInstanceRef.current = reactFlowInstance;
	}, []);

	const handleOnDragOver = useCallback((event: DragEvent) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = "move";
	}, []);

	const handleOnDrop = useCallback(
		(event: DragEvent) => {
			event.preventDefault();

			const type = event.dataTransfer.getData(DRAG_EVENT_DATA_TYPE);

			if (!type || !reactFlowInstanceRef.current) return;

			const position = reactFlowInstanceRef.current.screenToFlowPosition({
				x: event.clientX,
				y: event.clientY,
			});

			const newNode = {
				id: getNewNodeId(),
				type,
				position,
				data: { label: `${type} node` },
			};

			setNodes((nds) => nds.concat(newNode));
		},
		[setNodes]
	);

	return (
		<div className="container">
			<ToolbarPanel />

			<ReactFlowProvider>
				<div className="diagram">
					<ReactFlow
						onInit={handleOnInit}
						nodes={nodes}
						onNodesChange={onNodesChange}
						edges={edges}
						onEdgesChange={onEdgesChange}
						onConnect={onConnect}
						nodeTypes={customNodeTypes}
						defaultEdgeOptions={{ deletable: false }}
						style={{ backgroundColor: "#D3D2E5" }}
						onDragOver={handleOnDragOver}
						onDrop={handleOnDrop}
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

						<ActionContextProvider
							nodes={nodes}
							setNodes={setNodes}
							edges={edges}
							setEdges={setEdges}
						>
							<ActionBar />

							<NodePropertyPanel />
						</ActionContextProvider>
					</ReactFlow>
				</div>
			</ReactFlowProvider>
		</div>
	);
};

export default Diagram;
