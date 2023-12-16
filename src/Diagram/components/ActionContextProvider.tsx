import { useMemo } from "react";
import { ActionContextProviderProps as Props } from "../meta/types";
import { getSelectedItems } from "../meta/utils";
import { Node } from "reactflow";
import ActionContext from "../context/ActionContext";

const ActionContextProvider = ({
	nodes,
	setNodes,
	edges,
	setEdges,
	children,
}: Props) => {
	const selectedNodes = useMemo<Node[]>(
		() => nodes.filter(getSelectedItems),
		[nodes]
	);

	return (
		<ActionContext.Provider value={{ selectedNodes }}>
			{children}
		</ActionContext.Provider>
	);
};

export default ActionContextProvider;
