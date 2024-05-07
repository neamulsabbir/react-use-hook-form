"use client";
import { FormInput } from "@/components/atomic";
import Icon, { add, bell, exitFullScreen, fullScreen, message, search, user } from "@/libs/Icons";

import { useState } from "react";

export const Header = () => {
	const [toggle, setToggle] = useState(false);

	const toggleFullSceen = (): void => {
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen();
			setToggle(true);
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
				setToggle(false);
			}
		}
	};
	return (
		<div className="flex justify-end py-4 px-6  sticky top-0 z-10 bg-white border-l-[1px]">
			<div className="flex items-center gap-5">
				<FormInput icon={search} placeholder="Search" />

				<Icon
					path={toggle ? exitFullScreen : fullScreen}
					width={24}
					height={24}
					fill="var(--secondary)"
					onClick={() => toggleFullSceen()}
					className="cursor-pointer"
				/>

				<div className="flex">
					<Icon path={message} width={24} height={24} fill="var(--secondary)" />
					<div className="bg-primary w-4 h-4 rounded-full flex justify-center items-center -ml-3 -mt-1">
						<p className="text-white text-[8px]">12</p>
					</div>
				</div>

				<div className="flex">
					<Icon path={bell} width={24} height={24} fill="var(--secondary)" />
					<div className="bg-primary w-4 h-4 rounded-full flex justify-center items-center -ml-3 -mt-1">
						<p className="text-white text-[8px]">12</p>
					</div>
				</div>

				<div className="w-6 h-6 border-2 rounded-md flex justify-center items-center border-secondary">
					<Icon path={add} width={20} height={20} fill="var(--secondary)" />
				</div>

				<div className="flex items-center gap-2">
					<div className="bg-default w-10 h-10 rounded-full flex justify-center items-center">
						<Icon path={user} width={24} height={24} fill="var(--primary)" />
					</div>
					<p className="text-xs text-deepGrey">Admin </p>
				</div>
			</div>
		</div>
	);
};
