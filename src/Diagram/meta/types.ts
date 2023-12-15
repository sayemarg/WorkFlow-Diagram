export enum NodeType {
	Input = "input",
	Output = "output",
	Condition = "condition",
}

export enum NodeColor {
	Input = "#6ede87",
	Output = "#6865A5",
	Condition = "#FA9F42",
	Default = "#ff0072",
}

export enum EdgeType {
	Bezier = "default",
	Smoothstep = "smoothstep",
	Step = "step",
	Straight = "straight",
}
