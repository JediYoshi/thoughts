'use server';

import { db } from "~/server/db";
import { posts } from "~/server/db/schema";
import { and, gte, lte } from "drizzle-orm";
import { unstable_noStore as noStore } from 'next/cache';

export default async function Posts({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
    async function refreshPostsByDate(startDate: Date) {
        noStore();
        //const startDate = new Date(2026,0,20,  0,0,0,0);
        const endDate = new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDate()+1,  0,0,0,0);
        try {
            return (
                await db.select().from(posts).where(and(
                    gte(posts.createdAt, startDate),
                    lte(posts.createdAt, endDate)
                ))
            ).reverse()
        } catch (error) {
            return []
        }
    };
    const params = searchParams ? await searchParams : {};
    let year = 0;
    let month = 0;
    let day = 0;
    if (params?.year && params?.month && params?.day) {
        year = parseInt(String(params.year));
        month = parseInt(String(params.month));
        day = parseInt(String(params.day));
    } else {
        const date = new Date();
        year = date.getFullYear();
        month = date.getMonth();
        day = date.getDate()
    };
    const data = await refreshPostsByDate(new Date (year,month,day,  0,0,0,0));

    const thoughtTypes = [
        " thought...",
        " wondered...",
        "'s brain said..."
    ];

    function parseDate(date:Date) {
        const standard = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()+date.getTimezoneOffset());
        const userdate = new Date();
        const datee = new Date(standard.getFullYear(), standard.getMonth(), standard.getDate(), standard.getHours(), standard.getMinutes()-userdate.getTimezoneOffset());
        let hour = String(datee.getHours());
        let minute = String(datee.getMinutes());
        if (parseInt(minute) < 10) {
            minute = "0"+minute
        };
        return hour+":"+minute
    };

    return <>
                <div className="flex w-full justify-center text-[12px] text-[#666666]">Loaded {data.length} Thoughts</div>
                {data.map((data: any, index: any) => (
                    <div key={index} className="w-full min-w-full card bg-base-300 border border-[#747474] shadow-xl my-[8px] p-[8px] gap-[8px]">
                        <div className="text-[24px]"><a className="italic font-bold">{data.username}</a>{thoughtTypes[data.thoughtType]}</div>
                        <div className="text-[16px] mx-[8px] italic">{data.thought}</div>
                        <div className="text-[10px] italic text-[#959595]">{parseDate(data.createdAt)}</div>
                    </div>
                ))}
            </>
}