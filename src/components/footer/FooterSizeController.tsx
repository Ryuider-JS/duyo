import FooterSizeButton from './FooterSizeButton';
import { Slider } from '../ui/slider';
import { useSizeStore } from '@/stores/useSizeStore';

export default function FooterSizeController() {
	const { size, setSize } = useSizeStore();

	return (
		<div className="flex h-full items-center gap-x-1.5">
			<FooterSizeButton role={false} />
			<Slider
				defaultValue={[size]}
				min={10}
				max={100}
				step={0.1}
				className="w-24"
				onValueChange={setSize}
			/>
			<FooterSizeButton role={true} />
		</div>
	);
}
