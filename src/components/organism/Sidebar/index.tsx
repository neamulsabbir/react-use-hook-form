"use client";
import { sidebarItems } from "@/utils/constants/sidebarItems";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { MenuItem } from "./MenuItem";

export const Sidebar = () => {
	return (
		<div className="h-screen bg-white z-40 w-[238px] flex flex-col justify-between">
			<div>
				<div className="py-8 px-6 w-full ">
					<Image src="/images/logo.png" width={150} height={150} alt="" />
				</div>
				<div></div>
				<div className="">
					{sidebarItems.map((item, id) => {
						return <MenuItem key={id} item={item} />;
					})}
				</div>
			</div>

			<div className="bg-default m-6 flex flex-col items-center p-4 rounded-lg">
				<Button className="bg-primary py-3 px-4">Upgrade</Button>
				<p className="text-deepGrey mt-3 text-center">Upgrade for add more team member</p>
			</div>
		</div>
	);
};
