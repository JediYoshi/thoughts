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

const date = new Date();
const year = date.getFullYear(); //4-digit year
const month = date.getMonth(); //0-11
const day = date.getDate(); //1-31
const dayofweek = date.getDay(); //0-6 = Sun-Sat

const premapweek = [
	new Date(year, month, day-6),
	new Date(year, month, day-5),
	new Date(year, month, day-4),
	new Date(year, month, day-3),
	new Date(year, month, day-2),
	new Date(year, month, day-1),
	new Date(year, month, day)
];

const dayofweeknames = [
	"Sun",
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat"
]

const week = premapweek.map((date, index) => ({
	id: index + 1,
	year: date.getFullYear(),
	month: date.getMonth() + 1,
	day: date.getDate(),
	dayofweek: dayofweeknames[date.getDay()]
}));

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html className={`${geist.variable}`} lang="en">
			<body className="font-comfortaa w-full h-full overflow-hidden">

				<div className="navbar bg-base-200 p-[4px] h-[64px] max-h-[64px] min-h-[64px] overflow-hidden">
					<div className="navbar-start ml-[4px] gap-[6px]">
						<img src="/thought.png" className="h-[48px]" />
						<div className="text-[32px]">Thoughts of the Day</div>
					</div>
					<div className="navbar-center gap-[8px]">

						{week.map((date) => (
							<div key={date.id} className="indicator">
								<span className="indicator-item indicator-center badge badge-primary badge-xs invisible">0</span>
								<Link href={"./?year="+date.year+"&month="+date.month+"&day="+date.day}><div className="btn btn-circle bg-base-100 list-item pt-[4px] leading-[18px] text-[0px] h-[48px] w-[48px]">
									<div className="text-[10px]">{date.dayofweek}</div>
									<div className="text-[24px]">{date.day}</div>
								</div></Link>
							</div>
						))}

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
