import ConditionNode from "./ConditionNode";
import SvgIcon from "../../svg";
import { IconType } from "../../svg/meta/types";
import { NodeType, ToolbarNode } from "../meta/types";
import { NodeTypes as CustomNodeTypes } from "reactflow";

interface ToolbarNodes {
	[key: string]: ToolbarNode[];
}

const customNodeTypes: CustomNodeTypes = {
	[NodeType.Condition]: ConditionNode,
};

export const toolbarNodes: ToolbarNodes = {
	Normal: [
		{
			label: "Default Node",
			type: NodeType.Default,
			icon: <SvgIcon type={IconType.UpDownLeftRight} />,
		},
	],
	oneWay: [
		{
			label: "Input Node",
			type: NodeType.Input,
			icon: <SvgIcon type={IconType.Download} />,
		},
		{
			label: "output Node",
			type: NodeType.Output,
			icon: <SvgIcon type={IconType.Upload} />,
		},
	],
	twoWay: [
		{
			label: "Condition Node",
			type: NodeType.Condition,
			icon: <SvgIcon type={IconType.LeftRight} />,
		},
	],
};

export default customNodeTypes;
