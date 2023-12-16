import { Node } from "reactflow";
import { createContext } from "react";

interface ActionContextValues {
	selectedNodes: Node[];
}

const ActionContext = createContext<ActionContextValues>({
	selectedNodes: [],
});

export default ActionContext;
