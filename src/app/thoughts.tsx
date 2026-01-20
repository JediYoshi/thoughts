import { db } from "~/server/db";
import { thoughts } from "~/server/db/schema";

export default async function Posts() {
    async function refreshPosts() {
        return (
            await db.query.thoughts.findMany({
                columns: {
                    username: true,
                    thoughtType: true,
                    thought: true,
                    createdAt: true
                },
            })
        ).reverse()
    };
    const data = await refreshPosts();

    const thoughtTypes = [
        " thought...",
        " wondered...",
        "'s brain said..."
    ];

    function parseDate(date:Date) {
        const standard = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()+date.getTimezoneOffset());
        const userdate = new Date();
        const datee = new Date(standard.getFullYear(), standard.getMonth(), standard.getDate(), standard.getHours(), standard.getMinutes()-userdate.getTimezoneOffset());
        return (date.getHours())+":"+date.getMinutes()
    };

    return <>{data.map((data, index) => (<div key={index} className="w-full min-w-full card bg-base-300 border border-[#747474] shadow-xl my-[8px] p-[8px] gap-[8px]">
				<div className="text-[24px]"><a className="italic font-bold">{data.username}</a>{thoughtTypes[data.thoughtType]}</div>
				<div className="text-[16px] italic">{data.thought}</div>
				<div className="text-[10px] italic text-[#959595]">{parseDate(data.createdAt)}</div>
			</div>))}</>
}