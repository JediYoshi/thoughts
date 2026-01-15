'use client';

import { useSearchParams } from 'next/navigation';

export default function ShownDate() {
    const searchParams = useSearchParams();
    let year = "0";
    let month = "0";
    let day = "0";
    if (searchParams.has('year') && searchParams.has('year') && searchParams.has('year')) {
        year = searchParams.get('year');
        month = searchParams.get('month');
        day = searchParams.get('day');
    } else {
        const date = new Date();
        year = "0"
        month = "0"
        day = "0"
    };
    //const day = 0;
    return <>{day}</>
}