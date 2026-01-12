import "~/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

import Link from "next/link";

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
			<body className="font-comfortaa w-full h-full overflow-hidden">

				<div className="navbar bg-base-200 p-[4px] h-[64px] max-h-[64px] min-h-[64px] overflow-y-visible overflow-x-hidden">
					<div className="navbar-start ml-[4px] gap-[6px]">
						<img src="/thought.png" className="h-[48px]" />
						<div className="text-[32px]">Thoughts of the Day</div>
					</div>
					<div className="navbar-center gap-[8px]">

						<div className="btn btn-circle bg-base-100 list-item">
							<div className="text-[8px]">Sun</div>
							<div className="text-[18px]">11</div>
						</div>

						<div className="btn btn-circle bg-base-300 list-item">
							<div className="text-[8px]">Mon</div>
							<div className="text-[18px]">12</div>
						</div>

					</div>
					<div className="navbar-end">
						<div className="btn btn-secondary rounded-lg">
							<div className="text-[24px]">+</div>
							<div className="text-[18px]">Send a Public Thought</div>
						</div>
					</div>
				</div>



				<div className="h-[calc(100vh-64px)] overflow-y-scroll overflow-x-hidden">{children}</div>
			</body>
		</html>
	);
}
