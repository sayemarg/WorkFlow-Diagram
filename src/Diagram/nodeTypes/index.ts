import ConditionNode from "./ConditionNode";
import { NodeType } from "../meta/types";

const customNodeTypes = {
	[NodeType.Condition]: ConditionNode,
};

export default customNodeTypes;
