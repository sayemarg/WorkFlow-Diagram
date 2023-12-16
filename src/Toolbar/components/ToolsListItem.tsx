import {
	DRAGGED_NODE_LABEL,
	DRAGGED_NODE_TYPE,
} from "../../Diagram/meta/constants";
import { DragEvent, useCallback } from "react";
import { ToolsListItemProps } from "../meta/types";

const ToolsListItem = ({ tool }: ToolsListItemProps) => {
	const handleOnDragStart = useCallback(
		(event: DragEvent) => {
			event.dataTransfer.setData(DRAGGED_NODE_TYPE, tool.type);
			event.dataTransfer.setData(DRAGGED_NODE_LABEL, tool.label);
			event.dataTransfer.effectAllowed = "move";
		},
		[tool.type, tool.label]
	);

	return (
		<li
			className="toolbar__list-item"
			onDragStart={handleOnDragStart}
			draggable
		>
			{tool.icon} {tool.label}
		</li>
	);
};

export default ToolsListItem;
