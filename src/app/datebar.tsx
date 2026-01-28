'use client';
import Link from "next/link";

import { useSearchParams, usePathname } from 'next/navigation';

export default function DateBar() {
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

    const searchParams = useSearchParams();
    const pathname = usePathname();
    let pyear = 0;
    let pmonth = 0;
    let pday = 0;
    if (searchParams.has('year') && searchParams.has('month') && searchParams.has('day')) {
        pyear = parseInt(String(searchParams.get('year')));
        pmonth = parseInt(String(searchParams.get('month')));
        pday = parseInt(String(searchParams.get('day')));
    } else {
        const date = new Date();
        pyear = date.getFullYear();
        pmonth = date.getMonth();
        pday = date.getDate()
    };

    const week = premapweek.map((date, index) => ({
        id: index + 1,
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
        style: (pyear==date.getFullYear() && pmonth==date.getMonth() && pday==date.getDate() && pathname=="/") ? `btn btn-circle bg-base-300 list-item pt-[4px] leading-[18px] text-[0px] h-[48px] w-[48px]` : `btn btn-circle bg-base-100 list-item pt-[4px] leading-[18px] text-[0px] h-[48px] w-[48px]`,
        dayofweek: dayofweeknames[date.getDay()],
        url: (index == 6) ? "./" : `./?year=${date.getFullYear()}&month=${date.getMonth()}&day=${date.getDate()}`
    }));
    return <>
                <div className="indicator">
                    <span className="indicator-item indicator-center badge badge-primary badge-xs invisible">0</span>
                    <Link href="./calender"><div className={(pathname=="/calender") ? `btn btn-circle bg-base-300 list-item pt-[4px] leading-[18px] text-[0px] h-[48px] w-[48px]` : `btn btn-circle bg-base-100 list-item pt-[4px] leading-[18px] text-[0px] h-[48px] w-[48px]`}>
                        <div className="text-[10px]">View</div>
                        <div className="text-[24px]">&lt;-</div>
                    </div></Link>
                </div>

                {week.map((date) => (
                    <div key={date.id} className="indicator">
                        <span className="indicator-item indicator-center badge badge-primary badge-xs invisible">0</span>
                        <Link href={date.url}><div className={date.style}>
                            <div className="text-[10px]">{date.dayofweek}</div>
                            <div className="text-[24px]">{date.day}</div>
                        </div></Link>
                    </div>
                ))}
            </>
}