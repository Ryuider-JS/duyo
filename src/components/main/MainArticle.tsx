import { useSizeStore } from '@/stores/useSizeStore';

export default function MainArticle() {
	const { size, setSizeDec, setSizeInc } = useSizeStore();

	const onWheelSize = (event: React.WheelEvent) => {
		if (event.metaKey) {
			event.deltaY < 0 ? setSizeInc(1) : setSizeDec(1);
		}
	};

	return (
		<article className="relative flex w-screen h-full" onWheel={onWheelSize}>
			<div
				className="flex items-center justify-center w-full h-full"
				style={{ transform: `scale(${size * 0.01})` }}
			>
				<div className="flex w-full h-full rounded-lg border-[0.35px] border-neutral-300 bg-white shadow-xl print:rounded-none print:shadow-none"></div>
			</div>
		</article>
	);
}
