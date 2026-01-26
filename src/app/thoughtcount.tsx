"use server";
import { db } from "~/server/db";
import { posts } from "~/server/db/schema";
import { and, gte, lte } from "drizzle-orm";
import { unstable_noStore as noStore } from 'next/cache';

export default async function PostCount(year: number, month: number, day: number) { //infinite refresh
    async function refreshPostsByDate(startDate: Date) {
        noStore();
        const endDate = new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDate()+1,  0,0,0,0);
        try {
            return (
                await db.select().from(posts).where(and(
                    gte(posts.createdAt, startDate),
                    lte(posts.createdAt, endDate)
                ))
            ).length
        } catch (error) {
            return []
        }
    };
    const data = await refreshPostsByDate(new Date (year,month,day,  0,0,0,0));

    return <><div>{data}</div></>
}