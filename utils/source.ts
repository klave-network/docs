import { docs, meta } from '~/.source';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import { createElement } from 'react';
import { icons } from 'lucide-react';

export const source = loader({
	baseUrl: '/',
	source: createMDXSource(docs, meta),
	// render icons in the sidebar
	icon(icon) {
		if (!icon) {
			// You may set a default icon
			return;
		}

		if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
	}
});
