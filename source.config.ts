import { defineDocs, defineConfig, frontmatterSchema, metaSchema, defineCollections } from 'fumadocs-mdx/config';
import { z } from 'zod';

export const { docs, meta } = defineDocs({
	docs: {
		schema: frontmatterSchema.extend({
			underConstruction: z.boolean().default(false)
		})
	},
	meta: {
		schema: metaSchema.extend({
			description: z.string().optional()
		})
	}
});

export const whitepaper = defineCollections({
  dir: 'content/whitepaper',
  type: 'doc'
});

export default defineConfig({
	lastModifiedTime: 'git'
});
