import { Textarea } from "@material-tailwind/react";
import { FC } from "react";

interface PropsType {
	label?: string;
	placeholder?: string;
}

export const MultipleFormInput: FC<PropsType> = ({ label, ...rest }) => {
	return (
		<div className="  ">
			{label && <p className="font-semibold mb-1">{label}</p>}
			<Textarea
				{...rest}
				resize={true}
				className=" !border !border-gray-300 !rounded-[4px] text-gray-900  ring-4 ring-transparent placeholder:text-gray-500 focus:!border-primary focus:!border-t-primary focus:ring-primary/10 w-full"
				containerProps={{
					className: "grid h-full ",
				}}
				labelProps={{
					className: "before:content-none after:content-none !bg-transparent",
				}}
			/>
		</div>
	);
};
