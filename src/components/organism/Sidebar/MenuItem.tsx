import Icon from "@/libs/Icons";
import { SidebarItem } from "@/utils/constants/sidebarItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface PropsType {
	item: SidebarItem;
}

export const MenuItem: FC<PropsType> = ({ item }) => {
	const pathname = usePathname();

	return (
		<Link href={item.path}>
			<div className={`mt-8 ${item?.path === pathname && "flex items-center "}`}>
				<div className={`${item?.path === pathname && "h-6 w-[6px] bg-primary rounded-r-[4px] "}`}></div>

				<div className={`flex flex-row gap-2 items-center ml-4 ${item?.path === pathname && "ml-[10px]"}`}>
					<Icon
						path={item?.icon}
						width={20}
						height={20}
						fill={item?.path === pathname ? "var(--primary)" : "var(--secondary)"}
					/>

					<p className={`font-medium ${item.path === pathname && "text-primary "}`}>{item.title}</p>
				</div>
			</div>
		</Link>
	);
};
