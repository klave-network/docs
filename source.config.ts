import { defineDocs, defineConfig, frontmatterSchema, metaSchema } from 'fumadocs-mdx/config';
import { z } from 'zod';

export const { docs, meta } = defineDocs({
  dir: 'content/docs',
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

export default defineConfig({
	lastModifiedTime: 'git'
});
