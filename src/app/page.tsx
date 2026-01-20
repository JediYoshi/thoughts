import Link from "next/link";
import { Suspense } from 'react'
import ShownDate from "./date"
import Posts from "./thoughts"

function ShownDateFallback() {
	return <><span className="skeleton skeleton-text">Viewing Thoughts from Some Time Ago</span></>
}

export default function Page() {
	return (
		<main className="flex list-item px-[25%] pt-[12px]">
			<div className="flex w-full justify-center text-[12px] text-[#666666]">
				<Suspense fallback={<ShownDateFallback />}>
					<ShownDate />
				</Suspense>
			</div>
			<div className="">
				<Suspense fallback={<ShownDateFallback />}>
					<Posts />
				</Suspense>
			</div>
		</main>
	);
}
