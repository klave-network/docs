import { Construction } from 'lucide-react';

export const UnderConstructionCallout = () => {
	return (
		<div className="rounded-lg bg-yellow-100 border border-yellow-400 dark:border-yellow-500 dark:bg-yellow-200 p-3 flex gap-2 shadow-md text-black">
			<Construction />
			The docs for this page are under construction.
		</div>
	);
};
