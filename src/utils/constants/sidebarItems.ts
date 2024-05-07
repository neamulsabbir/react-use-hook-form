import { bag, bank, barChart, bill, catalog, file, message, project, team } from "@/libs/Icons";

export interface SidebarLink {
	title: string;
	path: string;
}

export interface SidebarItem {
	title: string;
	path: string;
	icon: string;
	id: number;
	submenu?: boolean;
	subMenuItems?: SidebarLink[];
}

export const sidebarItems: SidebarItem[] = [
	{
		id: 1,
		title: "Dashboard",
		path: "/",
		icon: catalog,
	},
	{
		id: 2,
		title: "Sales",
		path: "/sales",
		icon: barChart,
	},
	{
		id: 3,
		title: "Jobs",
		path: "#",
		icon: bag,
	},
	{
		id: 4,
		title: "Project Management",
		path: "#",
		icon: project,
	},
	{
		id: 5,
		title: "Files",
		path: "#",
		icon: file,
	},
	{
		id: 6,
		title: "Team",
		path: "#",
		icon: team,
	},
	{
		id: 7,
		title: "Messaging",
		path: "#",
		icon: message,
	},
	{
		id: 8,
		title: "Financial",
		path: "#",
		icon: bank,
	},
	{
		id: 9,
		title: "Plan & Billing",
		path: "#",
		icon: bill,
	},
];
