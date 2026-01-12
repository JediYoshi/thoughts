import "~/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
	title: "Thoughts of the Day",
	description: "Post your daily Thoughts!",
	icons: [{ rel: "icon", url: "/thought.png" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html className={`${geist.variable}`} lang="en">
			<body className="font-comfortaa">

				<div className="navbar bg-base-200 p-[4px] h-[48px]">
					<div className="navbar-start ml-[4px] gap-[6px]">
						<img src="/thought.png" className="h-[48px]" />
						<div className="text-[32px]">Thoughts of the Day</div>
					</div>
					<div className="navbar-center">
						days placeholder
					</div>
					<div className="navbar-end">
						<div className="btn btn-secondary rounded-lg">
							<div className="text-[24px]">+</div>
							<div className="text-[18px]">Send a Public Thought</div>
						</div>
					</div>
				</div>

				{children}

			</body>
		</html>
	);
}
