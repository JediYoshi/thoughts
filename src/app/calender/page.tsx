import Calender from "./calender"
import { Suspense } from 'react';

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

export default function Page({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
    return (
        <main className="flex flex-wrap w-full justify-center my-[12px] gap-[6px]">
            <Suspense fallback={<CalenderFallback />}>
                <Calender />
            </Suspense>
        </main>
    );
}