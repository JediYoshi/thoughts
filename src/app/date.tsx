'use client';
import Link from "next/link";
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ShownDate() {
    const searchParams = useSearchParams();
    let year = 0;
    let month = 0;
    let day = 0;
    if (searchParams.has('year') && searchParams.has('month') && searchParams.has('day')) {
        year = parseInt(String(searchParams.get('year')));
        month = parseInt(String(searchParams.get('month')));
        day = parseInt(String(searchParams.get('day')));
    } else {
        const date = new Date();
        year = date.getFullYear();
        month = date.getMonth();
        day = date.getDate()
    };
    const date = new Date(year, month, day);
    const dayofweeknames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const monthnames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const prevdate = new Date(date.getFullYear(), date.getMonth(), date.getDate()-1);
    const nextdate = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1);
    return <>
                <Link href={`./?year=${prevdate.getFullYear()}&month=${prevdate.getMonth()}&day=${prevdate.getDate()}`}><div className="btn btn-xs bg-base-300">&lt;</div></Link>
                <div className="mx-[8px]">[Viewing Thoughts from {dayofweeknames[date.getDay()]}, {monthnames[month]} {day}, {year}]</div>
                <Link href={`./?year=${nextdate.getFullYear()}&month=${nextdate.getMonth()}&day=${nextdate.getDate()}`}><div className="btn btn-xs bg-base-300">&gt;</div></Link>
            </>
}