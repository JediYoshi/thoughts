import Link from "next/link";

export default function HomePage() {
	return (
		<main className="flex list-item px-[25%] pt-[12px]">
			<div className="w-full min-w-full card bg-base-300 border border-[#747474] shadow-xl my-[8px] p-[8px] gap-[8px]">
				<div className="text-[24px]"><a className="italic font-bold">808penguinlover</a> thought...</div>
				<div className="text-[16px] italic">What if I just be Grian and press this button?</div>
				<div className="text-[10px] italic text-[#959595]">Some time ago...</div>
			</div>
			<div className="w-full min-w-full card bg-base-300 border border-[#747474] shadow-xl my-[8px] p-[8px] gap-[8px]">
				<div className="text-[24px]"><a className="italic font-bold">anon</a> wondered...</div>
				<div className="text-[16px] italic">Will Minecraft 1.22 happen?</div>
				<div className="text-[10px] italic text-[#959595]">Some time ago...</div>
			</div>
			<div className="w-full min-w-full card bg-base-300 border border-[#747474] shadow-xl my-[8px] p-[8px] gap-[8px]">
				<div className="text-[24px]"><a className="italic font-bold">the.soulblade.was.taken</a>'s brain said...</div>
				<div className="text-[16px] italic">Minecraft Bedrock is just gone at this point.</div>
				<div className="text-[10px] italic text-[#959595]">Some time ago...</div>
			</div>
			<div className="w-full min-w-full card bg-base-300 border border-[#747474] shadow-xl my-[8px] p-[8px] gap-[8px]">
				<div className="text-[24px]"><a className="italic font-bold">e</a>'s brain said...</div>
				<div className="text-[16px] italic">e</div>
				<div className="text-[10px] italic text-[#959595]">Some time ago...</div>
			</div>
		</main>
	);
}
