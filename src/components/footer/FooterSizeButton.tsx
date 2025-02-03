import { Minus, Plus } from 'lucide-react';

import { IFooterSizeButton } from '../../types/footer.interface';
import { useSizeStore } from '../../stores/useSizeStore';

export default function FooterSizeButton({ role }: IFooterSizeButton) {
	const { setSizeInc, setSizeDec } = useSizeStore();

	const handleClick = () => (role ? setSizeInc(2) : setSizeDec(2));
	const Icon = role ? Plus : Minus;

	return (
		<button className="h-full px-3 outline-none hover:bg-neutral-200" onClick={handleClick}>
			<Icon className="size-3 stroke-neutral-500" />
		</button>
	);
}
