import Icon, { edit } from "@/libs/Icons";
import { Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import Image from "next/image";

export const MenuPopup = () => {
	return (
		<Menu placement="left-start">
			<MenuHandler>
				<Image src="/images/icons/more.png" width={24} height={24} alt="More Icon" />
			</MenuHandler>
			<MenuList>
				<MenuItem className="flex gap-1 items-center">
					<Icon path={edit} width={16} height={16} fill="#808080" /> <p>Edit</p>
				</MenuItem>
				<MenuItem>Menu Item 2</MenuItem>
			</MenuList>
		</Menu>
	);
};
