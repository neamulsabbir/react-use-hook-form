import { Header, Sidebar } from "@/components/organism";
import { Inter } from "next/font/google";
import "../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="flex ">
					<div>
						<Sidebar />
					</div>

					<main className="w-full">
						<Header />
						<div className="p-6 bg-default h-[calc(100vh-77px)]">{children}</div>
					</main>
				</div>
			</body>
		</html>
	);
}
