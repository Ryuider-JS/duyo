import { useCircleStore } from '@/stores/useCircleStore';
import { useRectangleStore } from '@/stores/useRectangleStore';
import { useSizeStore } from '@/stores/useSizeStore';

export default function MainArticle() {
	const { size, setSizeDec, setSizeInc } = useSizeStore();
	const { rectangles } = useRectangleStore();
	const { circles } = useCircleStore();

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
			>
				<div className="">
					{rectangles.length > 0 &&
						rectangles.map((rect) => (
							<div
								key={rect.id}
								className="absolute border-[3px] cursor-grab"
								style={{
									left: rect.x,
									top: rect.y,
									width: rect.width,
									height: rect.height,
									backgroundColor: rect.color,
									borderColor: rect.borderColor,
								}}
							></div>
						))}
				</div>
				<div className="">
					{circles.length > 0 &&
						circles.map((circle) => (
							<div
								key={circle.id}
								className="absolute border-[3px] rounded-full cursor-grab"
								style={{
									left: circle.x,
									top: circle.y,
									width: circle.radius,
									height: circle.radius,
									backgroundColor: circle.color,
									borderColor: circle.borderColor,
								}}
							></div>
						))}
				</div>
			</div>
		</article>
	);
}
