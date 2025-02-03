import FooterSizeController from './FooterSizeController';
import FooterSizeValue from './FooterSizeValue';

export default function FooterWrapper() {
	return (
		<div className="flex items-center justify-end w-full h-6 gap-2 px-4 border-t border-neutral-300">
			<FooterSizeController />
			<FooterSizeValue />
		</div>
	);
}
