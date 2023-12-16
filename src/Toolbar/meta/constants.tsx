import SvgIcon from "../../svg";
import { IconType } from "../../svg/meta/types";
import { NodeType } from "../../Diagram/meta/types";
import { ToolbarNode } from "./types";

interface ToolbarNodes {
	[key: string]: ToolbarNode[];
}

export const toolbarNodes: ToolbarNodes = {
	Normal: [
		{
			label: "Default node",
			type: NodeType.Default,
			icon: <SvgIcon type={IconType.UpDownLeftRight} />,
		},
	],
	oneWay: [
		{
			label: "Input node",
			type: NodeType.Input,
			icon: <SvgIcon type={IconType.Download} />,
		},
		{
			label: "output node",
			type: NodeType.Output,
			icon: <SvgIcon type={IconType.Upload} />,
		},
	],
	twoWay: [
		{
			label: "Condition node",
			type: NodeType.Condition,
			icon: <SvgIcon type={IconType.LeftRight} />,
		},
	],
};
