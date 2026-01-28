'use client';
import Link from "next/link";

import { useSearchParams, usePathname } from 'next/navigation';

export default function Calender() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    let pyear = 0;
    let pmonth = 0;
    if (searchParams.has('year') && searchParams.has('month')) {
        pyear = parseInt(String(searchParams.get('year')));
        pmonth = parseInt(String(searchParams.get('month')));
    } else {
        const date = new Date();
        pyear = date.getFullYear();
        pmonth = date.getMonth();
    };
    const date = new Date(pyear, pmonth, 1);
    const year = date.getFullYear(); //4-digit year
    const month = date.getMonth(); //0-11
    const day = date.getDate(); //1-31
    const dayofweek = date.getDay(); //0-6 = Sun-Sat

    let premapweek:Date[][] = [];
    let premapdate = date;
    let currentWeek:Date[] = [];
    let weekday = premapdate.getDay();
    while (weekday > 0) {
        currentWeek.push(new Date(1970,0,1))
        weekday = weekday-1
    };
    while (premapdate.getMonth() == month) {
        currentWeek.push(new Date(premapdate.getFullYear(), premapdate.getMonth(), premapdate.getDate()))
        if (premapdate.getDay() == 6) {
            premapweek.push(currentWeek);
            currentWeek = []
        };
        premapdate = new Date(premapdate.getFullYear(), premapdate.getMonth(), premapdate.getDate()+1)
    };
    if (currentWeek.length != 0) {
        while (currentWeek.length < 7) {
            currentWeek.push(new Date(1970,1,1))
        };
        premapweek.push(currentWeek)
    };

    const dayofweeknames = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];

    function mapweek(week:Date[]) {
        return week.map((date, index) => ({
            id: index + 1,
            year: date.getFullYear(),
            month: (date.getFullYear() == 1970) ? "" : date.getMonth(),
            day: (date.getFullYear() == 1970) ? "" : date.getDate(),
            style: (date.getFullYear() == 1970) ? `btn btn-circle bg-base-200 text-base-200 list-item pt-[4px] leading-[18px] text-[0px] h-[48px] w-[48px]` :
            `btn btn-circle bg-base-300 list-item pt-[4px] leading-[18px] text-[0px] h-[48px] w-[48px]`,
            dayofweek: (date.getFullYear() == 1970) ? "." : dayofweeknames[date.getDay()],
            url: (date.getFullYear()==1970 && date.getMonth()==0) ? `/calender?year=${(pmonth!=0)?pyear:pyear-1}&month=${(pmonth!=0)?pmonth-1:11}`:
            (date.getFullYear()==1970 && date.getMonth()==1) ? `/calender?year=${(pmonth!=11)?pyear:pyear+1}&month=${(pmonth!=11)?pmonth+1:0}`:
            `/?year=${date.getFullYear()}&month=${date.getMonth()}&day=${date.getDate()}`
        }))
    }

    const week = premapweek.map((date, index) => ({
        week: mapweek(date),
        id: index+1
    }));

    return <span className="">
                {week.map((weekk) => (
                    <div key={weekk.id} className="">
                        {weekk.week.map((date) => (
                            <div key={date.id} className="indicator m-[4px]">
                                <span className="indicator-item indicator-center badge badge-primary badge-xs invisible">0</span>
                                <Link href={date.url}><div className={date.style}>
                                    <div className="text-[10px]">{date.dayofweek}</div>
                                    <div className="text-[24px]">{date.day}</div>
                                </div></Link>
                            </div>
                        ))}
                    </div>
                ))}
            </span>
}