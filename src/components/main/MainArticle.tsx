import { useSizeStore } from '@/stores/useSizeStore';

export default function MainArticle() {
	const { size } = useSizeStore();

	console.log(size);
	return (
		<article
			className="flex items-center justify-center w-screen h-full"
			style={{ transform: `scale(${size * 0.01})` }}
		>
			<div className="flex w-full h-full rounded-lg border-[0.35px] border-neutral-300 bg-white shadow-xl  print:rounded-none print:shadow-none"></div>
		</article>
	);
}
