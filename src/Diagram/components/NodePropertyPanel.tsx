import { useMemo } from "react";
import { Node, Panel, useStore } from "reactflow";

const NodePropertyPanel = () => {
	const userSelectionActive = useStore((store) => store.userSelectionActive);

	const selectedNodes = useStore((store) =>
		store.getNodes().filter((item: Node) => item.selected)
	);

	const selectedNode = useMemo(() => {
		if (!selectedNodes?.length || 1 < selectedNodes.length) return;

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
