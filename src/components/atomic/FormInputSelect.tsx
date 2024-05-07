import { Option, Select } from "@material-tailwind/react";
import { FC } from "react";

interface IItems {
	value: string;
	label: string;
}

interface PropsType {
	label?: string;
	items?: IItems[];
}

export const FormInputSelect: FC<PropsType> = ({ label, items, ...reset }) => {
	return (
		<div className="">
			{label && <p className="font-medium mb-1">{label}</p>}
			<Select
				{...reset}
				lockScroll
				labelProps={{
					className: "before:content-none after:content-none",
				}}
				className="!border !border-gray-300 rounded-[4px] bg-white  h-[43px] text-gray-900  ring-4 ring-transparent placeholder:text-gray-500 focus:!border-primary focus:!border-t-primary focus:!ring-primary/10 w-full"
			>
				{items?.map((item, i) => (
					<Option key={i} value={item?.value} className="z-50">
						{item?.label}
					</Option>
				))}
			</Select>
		</div>
	);
};
