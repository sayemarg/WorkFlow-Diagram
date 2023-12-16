import "./assets/Toolbar.css";
import ToolsList from "./components/ToolsList";
import { ToolbarNode } from "./meta/types";
import { filterToolsByLabel } from "./meta/utils";
import { isInteractiveSelector } from "../Diagram/meta/utils";
import { toolbarNodes } from "./meta/constants";
import { useMemo, useState } from "react";
import { useStore } from "reactflow";

const ToolbarPanel = () => {
	const isInteractive = useStore(isInteractiveSelector);

	const toolTypeList = useMemo<string[]>(() => {
		return Object.keys(toolbarNodes);
	}, []);

	const [selectedToolType, setSelectedToolType] = useState(toolTypeList[0]);

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

	if (!isInteractive) return null;

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

			<ToolsList tools={filteredToolsBySearchKey} />
		</div>
	);
};

export default ToolbarPanel;
