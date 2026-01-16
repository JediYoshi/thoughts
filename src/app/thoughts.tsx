'use client';
import { useSearchParams } from 'next/navigation';
import { db } from "~/server/db";
import { thoughts } from "~/server/db/schema";

export default async function Posts() {
    async function refreshPosts() {
        return (
            await db.query.thoughts.findMany({
                columns: {
                    username: true,
                    thoughtType: true,
                    thought: true
                },
            })
        )
    };
    const data = await refreshPosts();

    const searchParams = useSearchParams();
    let year = 0;
    let month = 0;
    let day = 0;
    if (searchParams.has('year') && searchParams.has('year') && searchParams.has('year')) {
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
        "Febuary",
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
    return <>Viewing Thoughts from {dayofweeknames[date.getDay()]}, {monthnames[month]} {day}, {year}</>
}