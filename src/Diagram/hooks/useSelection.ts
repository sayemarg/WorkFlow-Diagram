import SelectionContext from "../context/SelectionContext";
import { useContext } from "react";

const useSelection = () => useContext(SelectionContext);

export default useSelection;
