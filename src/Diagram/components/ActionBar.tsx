import useSelection from "../hooks/useSelection";
import { Controls } from "reactflow";
import { PasteSvg, CopySvg, CutSvg, UndoSvg, RedoSvg } from "../svg";

const ActionBar = () => {
	const { selectedNodes } = useSelection();

	const hasNotSelectedNode = !selectedNodes.length;

	return (
		<Controls position="top-center">
			<button
				type="button"
				className="react-flow__controls-button react-flow__controls-paste"
				title="paste"
				aria-label="paste"
			>
				<PasteSvg />
			</button>

			<button
				type="button"
				className="react-flow__controls-button react-flow__controls-copy"
				title="copy"
				aria-label="copy"
				disabled={hasNotSelectedNode}
			>
				<CopySvg />
			</button>

			<button
				type="button"
				className="react-flow__controls-button react-flow__controls-cut"
				title="cut"
				aria-label="cut"
				disabled={hasNotSelectedNode}
			>
				<CutSvg />
			</button>

			<button
				type="button"
				className="react-flow__controls-button react-flow__controls-redo"
				title="redo"
				aria-label="redo"
			>
				<RedoSvg />
			</button>

			<button
				type="button"
				className="react-flow__controls-button react-flow__controls-undo"
				title="undo"
				aria-label="undo"
			>
				<UndoSvg />
			</button>
		</Controls>
	);
};

export default ActionBar;
