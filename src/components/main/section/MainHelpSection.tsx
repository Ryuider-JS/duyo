export default function MainHelpSection() {
	return (
		<div className="flex h-full w-full flex-col items-start gap-y-1 px-1.5 pb-2">
			<h1 className="text-lg font-semibold">2025년 2월 두요 인턴 과제 테스트</h1>
			<div className="flex w-full flex-col items-start justify-start gap-y-0.5 text-sm text-neutral-700">
				<p>
					이 과제 테스트에서는 React로 웹 애플리케이션을 만드는 능력을 살펴봅니다.
					<span className="ml-1 font-semibold text-red-500 cursor-not-allowed">
						금지 마우스 커서
					</span>
					로 된 항목은 구현하지 않는 기능입니다.
				</p>
				<p>
					마감일은 <strong>2025년 2월 5일 23시 00분</strong>입니다😀
				</p>
			</div>
		</div>
	);
}
