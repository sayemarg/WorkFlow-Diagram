import { ICONS_COMPONENT } from "./meta/constants";
import { SvgIconProps } from "./meta/types";

const SvgIcon = ({ className, type }: SvgIconProps) => {
	const Icon = ICONS_COMPONENT[type];

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			height="16"
			width="16"
			viewBox="0 0 512 512"
		>
			<Icon />
		</svg>
	);
};

export default SvgIcon;
