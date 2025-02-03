import { useSizeStore } from '../../stores/useSizeStore';

export default function FooterSizeValue() {
	const { size } = useSizeStore();

	return (
		<div className="w-10 text-xs font-medium tracking-tight text-center select-none text-neutral-500">
			{Math.floor(size)}%
		</div>
	);
}
