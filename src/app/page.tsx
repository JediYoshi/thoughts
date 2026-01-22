import Link from "next/link";
import { Suspense } from 'react';
import ShownDate from "./date";
import Posts from "./thoughts";

function ShownDateFallback() {
	return <><span className="skeleton skeleton-text">Viewing Thoughts from Some Time Ago</span></>
};

function ThoughtsFallback() {
	return <><div className="flex justify-center place-items-center h-[400px] text-[32px]"><span className="skeleton skeleton-text">Loading Thoughts...</span></div></>
};

export default function Page({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
	return (
		<main className="flex list-item px-[25%] pt-[12px]">
			<div className="flex w-full justify-center text-[12px] text-[#666666]">
				<Suspense fallback={<ShownDateFallback />}>
					<ShownDate />
				</Suspense>
			</div>
			<div className="">
				<Suspense fallback={<ThoughtsFallback />}>
					<Posts searchParams={searchParams} />
				</Suspense>
			</div>
		</main>
	);
}
