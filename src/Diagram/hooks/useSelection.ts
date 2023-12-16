import ActionContext from "../context/ActionContext";
import { useContext } from "react";

const useSelection = () => useContext(ActionContext);

export default useSelection;
