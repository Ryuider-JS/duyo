import { useSizeStore } from '@/stores/useSizeStore';

export default function MainArticle() {
	const { size, setSizeDec, setSizeInc } = useSizeStore();

	const onWheelSize = (event: React.WheelEvent) => {
		if (event.metaKey) {
			event.deltaY < 0 ? setSizeInc(1) : setSizeDec(1);
		}
	};

	return (
		<article
			className="absolute top-0 left-0 z-0 flex items-center justify-center w-screen h-full"
			onWheel={onWheelSize}
		>
			<div
				className="flex relative w-full h-full rounded-lg border-[0.35px] border-neutral-300 z-0 bg-white shadow-xl print:rounded-none print:shadow-none overflow-auto "
				style={{ transform: `scale(${size * 0.01})`, willChange: 'transform' }}
			></div>
		</article>
	);
}
