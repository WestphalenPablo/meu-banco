import { ComponentProps } from "react";
import { LazySvg } from "./lazy-svg";

interface LazySvgProps extends ComponentProps<"svg"> {
	name: string;
}

function Icon(props: LazySvgProps) {
	return <LazySvg {...props} />;
}

export default Icon;
