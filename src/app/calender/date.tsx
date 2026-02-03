'use client';
import Link from "next/link";
import { useSearchParams } from 'next/navigation';

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

export default function Month() {
    const searchParams = useSearchParams();
    let year = 0;
    let month = 0;
    if (searchParams.has('year') && searchParams.has('month')) {
        year = parseInt(String(searchParams.get('year')));
        month = parseInt(String(searchParams.get('month')));
    } else {
        const date = new Date();
        year = date.getFullYear();
        month = date.getMonth();
    };
    return <>
                <Link href={`./calender?year=${(month == 0) ? year-1 : year}&month=${(month == 0)? 11 : month-1}`}><div className="btn btn-xs bg-base-300">&lt;</div></Link>
                <div className="text-[32px]">{monthnames[month]}, {year}</div>
                <Link href={`./calender?year=${(month == 11) ? year+1 : year}&month=${(month == 11)? 0 : month+1}`}><div className="btn btn-xs bg-base-300">&gt;</div></Link>
            </>
}