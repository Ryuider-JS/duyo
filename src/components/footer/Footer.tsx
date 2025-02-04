import FooterSizeController from './FooterSizeController';
import FooterSizeValue from './FooterSizeValue';

export default function Footer() {
	return (
		<div className="relative flex items-center justify-end w-full h-6 gap-2 px-4 border-t border-neutral-300 z-[20] bg-gray-100">
			<FooterSizeController />
			<FooterSizeValue />
		</div>
	);
}
