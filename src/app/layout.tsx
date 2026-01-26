import "~/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

import Link from "next/link";
import { Suspense } from 'react';
import DateBar from "./datebar";

export const metadata: Metadata = {
	title: "Thoughts of the Day",
	description: "Post your daily Thoughts!",
	icons: [{ rel: "icon", url: "/thought.png" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

function DateBarFallback() {
	return <>
		<div className="skeleton h-[48px] w-[48px] shrink-0 rounded-full"></div>
		<div className="skeleton h-[48px] w-[48px] shrink-0 rounded-full"></div>
		<div className="skeleton h-[48px] w-[48px] shrink-0 rounded-full"></div>
		<div className="skeleton h-[48px] w-[48px] shrink-0 rounded-full"></div>
		<div className="skeleton h-[48px] w-[48px] shrink-0 rounded-full"></div>
		<div className="skeleton h-[48px] w-[48px] shrink-0 rounded-full"></div>
		<div className="skeleton h-[48px] w-[48px] shrink-0 rounded-full"></div>
		<div className="skeleton h-[48px] w-[48px] shrink-0 rounded-full"></div>
	</>
};

export default function Layout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html className={`${geist.variable}`} lang="en">
			<body className="font-comfortaa w-full h-full overflow-hidden">

				<div className="navbar bg-base-200 p-[4px] h-[64px] max-h-[64px] min-h-[64px] overflow-hidden">
					<div className="navbar-start ml-[4px] gap-[6px]">
						<Link href="./"><div className="lg:tooltip lg:tooltip-right lg:tooltip-primary" data-tip="Thoughts of the Day">
							<img src="/thought.png" className="h-[48px]" /></div>
						</Link>
					</div>
					<div className="navbar-center gap-[8px]">

						<Suspense fallback={<DateBarFallback />}>
							<DateBar />
						</Suspense>

					</div>
					<div className="navbar-end">
						<div className="lg:tooltip lg:tooltip-left lg:tooltip-secondary" data-tip="Send a Public Thought">
							<div className="btn btn-secondary rounded-lg">
								<div className="text-[24px]">+</div>
							</div>
						</div>
					</div>
				</div>



				<div className="h-[calc(100vh-64px)] overflow-y-scroll overflow-x-hidden">{children}</div>
			</body>
		</html>
	);
}
