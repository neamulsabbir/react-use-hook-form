import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "Sign In | BuilderPro360",
		default: "Sign In | BuilderPro360",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return <body className={inter.className}>{children}</body>;
}
