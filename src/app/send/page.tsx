'use client';
import { useState, useEffect } from "react";
import uploadData from "./api";
import { useRouter } from "next/navigation";


export default function page() {
    const [postusername, setPostusername] = useState("anon");
    const [thoughttype, setThoughttype] = useState("0");
    const [thought, setThought] = useState("");
    const router = useRouter();

    useEffect(() => {}, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await uploadData(postusername, thoughttype, thought);
        console.log(result);
        router.push("/");
    };

    return (
        <form onSubmit={handleSubmit} className="mx-[30%]">

            <div className="text-[24px] font-bold mt-[24px]">Username</div>
            <div className="flex flex-wrap w-full justify-center my-[6px]">
                <label className="flex w-full">
                    <input
                    type="radio"
                    value="anon"
                    checked={postusername === 'anon'}
                    onChange={(e) => setPostusername(e.target.value)}
                    />
                    Send as `Anon`
                </label>
            </div>

            <div className="text-[24px] font-bold mt-[24px]">Thought Type</div>
            <div className="flex flex-wrap w-full justify-center my-[6px]">
                <label className="flex w-full">
                    <input
                    type="radio"
                    value="0"
                    checked={thoughttype === '0'}
                    onChange={(e) => setThoughttype(e.target.value)}
                    />
                    YOU thought...
                </label>
                <label className="flex w-full">
                    <input
                    type="radio"
                    value="1"
                    checked={thoughttype === '1'}
                    onChange={(e) => setThoughttype(e.target.value)}
                    />
                    YOU wondered...
                </label>
                <label className="flex w-full">
                    <input
                    type="radio"
                    value="2"
                    checked={thoughttype === '2'}
                    onChange={(e) => setThoughttype(e.target.value)}
                    />
                    YOU's brain said...
                </label>
            </div>

            <div className="flex flex-wrap w-full justify-center my-[6px] mt-[24px]">
                <textarea
                    value={thought}
                    onChange={(e) => setThought(e.target.value)}
                    placeholder="insert thought here..."
                    required
                    className="bg-[#484848] rounded-[6px] w-full h-[128px]"/>
            </div>

            <div className="flex flex-wrap w-full justify-center my-[6px] mt-[24px]">
                <button type="submit" className="btn btn-primary rounded-[6px]">Send Thought</button>
            </div> 

        </form>
    )
}