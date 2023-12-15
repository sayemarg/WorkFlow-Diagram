import useSelection from "../hooks/useSelection";
import { Node, Panel, useStore } from "reactflow";
import { useMemo } from "react";

const NodePropertyPanel = () => {
	const userSelectionActive = useStore((store) => store.userSelectionActive);

	const { selectedNodes } = useSelection();

	const selectedNode = useMemo<Node | undefined>(() => {
		if (selectedNodes.length !== 1) return;

		return selectedNodes[0];
	}, [selectedNodes]);

	return (
		<Panel position="top-right">
			<div className="diagram__property-panel">
				{!userSelectionActive && selectedNode && (
					<span>Selected: {JSON.stringify(selectedNode)}</span>
				)}
			</div>
		</Panel>
	);
};

export default NodePropertyPanel;
