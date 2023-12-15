import { Handle, NodeProps, Position } from "reactflow";

const ConditionNode = ({ data }: NodeProps<any>) => {
	return (
		<>
			<Handle type="target" position={Position.Top} />

			<div className="content">{data?.label}</div>

			<Handle type="source" position={Position.Bottom} />
		</>
	);
};

export default ConditionNode;
