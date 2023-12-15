import { Node } from "reactflow";
import { createContext } from "react";

interface SelectionContextValues {
	selectedNodes: Node[];
}

const SelectionContext = createContext<SelectionContextValues>({
	selectedNodes: [],
});

export default SelectionContext;
