import MainNavButton from './MainNavButton';
import { NAV_LIST } from '@/constants/nav.const';

export default function MainNav() {
	return (
		<div className="flex items-center gap-x-2">
			{NAV_LIST.map((value, idx) => (
				<MainNavButton value={value} key={idx} idx={idx} />
			))}
		</div>
	);
}
