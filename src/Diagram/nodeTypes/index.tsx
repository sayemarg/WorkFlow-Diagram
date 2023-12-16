import ConditionNode from "./ConditionNode";
import { NodeType } from "../meta/types";
import { NodeTypes as CustomNodeTypes } from "reactflow";

const customNodeTypes: CustomNodeTypes = {
	[NodeType.Condition]: ConditionNode,
};

export default customNodeTypes;
