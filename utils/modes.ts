/* eslint-disable import/no-relative-packages -- required */
import { Library, PlugZap, type LucideIcon } from 'lucide-react';

export interface Mode {
	param: string;
	name: string;
	type: 'tab' | 'link';
	icon?: React.ElementType;
}

export const modes: Mode[] = [
	{
		param: 'sdk',
		name: 'SDK',
		type: 'tab',
		icon: Library
	},
	{
		param: 'connector',
		name: 'Connector',
		type: 'tab',
		icon: PlugZap
	}
];
