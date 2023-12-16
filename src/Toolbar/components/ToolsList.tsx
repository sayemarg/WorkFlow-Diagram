import ToolsListItem from "./ToolsListItem";
import { ToolbarNode, ToolsListProps } from "../meta/types";

const ToolsList = ({ tools }: ToolsListProps) => (
	<ul className="toolbar__list">
		{tools.map((tool: ToolbarNode) => (
			<ToolsListItem key={tool.type} tool={tool} />
		))}
	</ul>
);

export default ToolsList;
