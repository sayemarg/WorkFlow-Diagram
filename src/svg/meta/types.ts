export enum IconType {
	Copy = "copy",
	Cut = "cut",
	Download = "download",
	LeftRight = "leftRight",
	Paste = "paste",
	Redo = "redo",
	Undo = "undo",
	UpDownLeftRight = "upDownLeftRight",
	Upload = "upload",
}

export interface SvgIconProps {
	className?: string;
	type: IconType;
}
