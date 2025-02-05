import { useCircleStore } from '@/stores/useCircleStore';
import { useRectangleStore } from '@/stores/useRectangleStore';
import { useSizeStore } from '@/stores/useSizeStore';

export default function MainArticle() {
	const { size } = useSizeStore();
	const { rectangles } = useRectangleStore();
	const { circles } = useCircleStore();

	return (
		<article className="absolute top-0 left-0 z-0 flex items-center justify-center w-screen h-full">
			<div
				className="rounded-lg w-full h-full border-[0.35px] border-neutral-300 bg-white shadow-xl print:rounded-none print:shadow-none overflow-auto transition-transform duration-300 ease-in-out"
				style={{
					transform: `scale(${size * 0.01})`,
				}}
			>
				<div className="absolute inset-0 w-screen h-screen">
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
				<div className="absolute inset-0 w-screen h-screen">
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
