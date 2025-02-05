import FooterSizeButton from './FooterSizeButton';
import { Slider } from '../ui/slider';
import { useSizeStore } from '@/stores/useSizeStore';

export default function FooterSizeController() {
	const { size, setSizeDec, setSizeInc, setSize } = useSizeStore();

	const onWheelSize = (event: React.WheelEvent) => {
		if (event.metaKey) {
			event.deltaY < 0 ? setSizeInc(1) : setSizeDec(1);
		}
	};

	return (
		<div className="flex h-full items-center gap-x-1.5">
			<FooterSizeButton role={false} />
			<div onWheel={onWheelSize}>
				<Slider
					defaultValue={[size]}
					min={10}
					max={100}
					step={0.1}
					className="w-24"
					onValueChange={setSize}
				/>
			</div>
			<FooterSizeButton role={true} />
		</div>
	);
}
