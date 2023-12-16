import SvgIcon from "../../svg";
import useSelection from "../hooks/useSelection";
import { Controls } from "reactflow";
import { IconType } from "../../svg/meta/types";

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
				<SvgIcon type={IconType.Paste} />
			</button>

			<button
				type="button"
				className="react-flow__controls-button react-flow__controls-copy"
				title="copy"
				aria-label="copy"
				disabled={hasNotSelectedNode}
			>
				<SvgIcon type={IconType.Copy} />
			</button>

			<button
				type="button"
				className="react-flow__controls-button react-flow__controls-cut"
				title="cut"
				aria-label="cut"
				disabled={hasNotSelectedNode}
			>
				<SvgIcon type={IconType.Cut} />
			</button>

			<button
				type="button"
				className="react-flow__controls-button react-flow__controls-redo"
				title="redo"
				aria-label="redo"
			>
				<SvgIcon type={IconType.Redo} />
			</button>

			<button
				type="button"
				className="react-flow__controls-button react-flow__controls-undo"
				title="undo"
				aria-label="undo"
			>
				<SvgIcon type={IconType.Undo} />
			</button>
		</Controls>
	);
};

export default ActionBar;
