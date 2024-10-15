import { Construction } from 'lucide-react';

export const UnderConstructionCallout = () => {
	return (
		<div className="rounded-lg bg-yellow-100 border border-yellow-400 p-3 flex gap-2 shadow-md">
			<Construction />
			The docs for this page are under construction.
		</div>
	);
};
