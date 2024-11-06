import { docs, meta, whitepaper as whitepaperSource } from '~/.source';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import { createElement } from 'react';
import { icons } from 'lucide-react';
import { IconContainer } from '~/components/ui/icon';

export const source = loader({
	baseUrl: '/',
	source: createMDXSource(docs, meta),
	// render icons in the sidebar
	icon(icon) {
		if (icon && icon in icons) {
      return createElement(IconContainer, {
        icon: icons[icon as keyof typeof icons],
      });
		}
	}
});

export const whitepaper = loader({
  baseUrl: '/whitepaper',
  source: createMDXSource(whitepaperSource, [])
});
