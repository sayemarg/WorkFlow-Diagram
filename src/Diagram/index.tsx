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
import ActionBar from "./components/ActionBar";
import ActionContextProvider from "./components/ActionContextProvider";
import NodePropertyPanel from "./components/NodePropertyPanel";
import ToolbarPanel from "../Toolbar";
import customNodeTypes from "./nodeTypes";
import { DRAGGED_NODE_LABEL, DRAGGED_NODE_TYPE } from "./meta/constants";
import { DiagramProps } from "./meta/types";
import { DragEvent, useCallback, useRef } from "react";
import { getNewNodeId, getNodeColor } from "./meta/utils";

const Diagram = ({
	deafultNodes = [],
	defaultEdges = [],
	canBeEdited = true,
}: DiagramProps) => {
	const reactFlowInstanceRef = useRef<ReactFlowInstance>();

	const [nodes, setNodes, onNodesChange] = useNodesState(deafultNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(defaultEdges);

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

			const type = event.dataTransfer.getData(DRAGGED_NODE_TYPE);

			if (!type || !reactFlowInstanceRef.current) return;

			const position = reactFlowInstanceRef.current.screenToFlowPosition({
				x: event.clientX,
				y: event.clientY,
			});

			const label = event.dataTransfer.getData(DRAGGED_NODE_LABEL);

			setNodes((nds) => {
				return nds.concat({
					type,
					position,
					id: getNewNodeId(),
					data: { label: label ?? `${type} node` },
				});
			});
		},
		[setNodes]
	);

	return (
		<div className="container">
			<ReactFlowProvider>
				<ToolbarPanel />

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
						nodesDraggable={canBeEdited}
						nodesConnectable={canBeEdited}
						elementsSelectable={canBeEdited}
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
