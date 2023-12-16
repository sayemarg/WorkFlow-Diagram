import Diagram from "./Diagram";
import React from "react";
import ReactDOM from "react-dom/client";
import { INITIAL_EDGES, INITIAL_NODES } from "./Diagram/meta/constants";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<Diagram deafultNodes={INITIAL_NODES} defaultEdges={INITIAL_EDGES} />
	</React.StrictMode>
);
