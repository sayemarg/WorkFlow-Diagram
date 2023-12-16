import "../assets/Toolbar.css";
import { DRAG_EVENT_DATA_TYPE } from "../meta/constants";
import { DragEvent, useCallback, useMemo, useState } from "react";
import { ToolbarNode } from "../meta/types";
import { filterToolsByLabel } from "../meta/utils";
import { toolbarNodes } from "../nodeTypes";

const ToolbarPanel = () => {
	const toolTypeList = useMemo<string[]>(() => {
		return Object.keys(toolbarNodes);
	}, []);

	const [selectedToolType, setSelectedToolType] = useState<string>(toolTypeList[0]);

	const [searchKey, setSearchKey] = useState<string>("");

	const selectedTools = useMemo(
		() => toolbarNodes[selectedToolType],
		[selectedToolType]
	);

	const filteredToolsBySearchKey = useMemo<ToolbarNode[]>(() => {
		if (!searchKey) return selectedTools;

		return selectedTools.filter(
			filterToolsByLabel(searchKey.toLocaleLowerCase())
		);
	}, [selectedTools, searchKey]);

	const handleOnDragStart = useCallback(
		(event: DragEvent, tool: ToolbarNode) => {
			event.dataTransfer.setData(DRAG_EVENT_DATA_TYPE, tool.type);
			event.dataTransfer.effectAllowed = "move";
		},
		[]
	);

	return (
		<div className="toolbar">
			<select
				className="toolbar__type-select"
				onChange={(e) => setSelectedToolType(e.target.value)}
			>
				{toolTypeList.map((type: string) => (
					<option value={type}>{type}</option>
				))}
			</select>

			<input
				className="toolbar__tools-search"
				type="text"
				value={searchKey}
				onChange={(e) => setSearchKey(e.target.value)}
				placeholder="Search tools..."
			/>

			<ul className="toolbar__list">
				{filteredToolsBySearchKey.map((tool: ToolbarNode) => (
					<li
						className="toolbar__list-item"
						onDragStart={(event: DragEvent) => handleOnDragStart(event, tool)}
						draggable
					>
						{tool.icon} {tool.label}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ToolbarPanel;
