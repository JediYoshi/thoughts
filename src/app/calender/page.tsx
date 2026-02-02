import Calender from "./calender"
import { Suspense } from 'react';
import Month from "./date"

function CalenderFallback() {
	return <>
		<div className="skeleton h-[48px] w-[48px] shrink-0 rounded-full"></div>
		<div className="skeleton h-[48px] w-[48px] shrink-0 rounded-full"></div>
		<div className="skeleton h-[48px] w-[48px] shrink-0 rounded-full"></div>
		<div className="skeleton h-[48px] w-[48px] shrink-0 rounded-full"></div>
		<div className="skeleton h-[48px] w-[48px] shrink-0 rounded-full"></div>
		<div className="skeleton h-[48px] w-[48px] shrink-0 rounded-full"></div>
		<div className="skeleton h-[48px] w-[48px] shrink-0 rounded-full"></div>
	</>
};

export default async function Page({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
	const params = searchParams ? await searchParams : {};
    return (
        <main className="flex flex-wrap w-full justify-center my-[12px] gap-[6px]">
			<div className="flex w-full justify-center gap-[12px]">
				<Suspense>
					<Month />
				</Suspense>
			</div>
			<Suspense fallback={<CalenderFallback />}>
                <Calender />
            </Suspense>
        </main>
    );
}