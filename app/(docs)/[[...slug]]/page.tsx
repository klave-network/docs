import { source } from '~/utils/source';
import type { Metadata } from 'next';
import { DocsPage, DocsBody, DocsDescription, DocsTitle } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';

export default async function Page({ params }: { params: { slug?: string[] } }) {
	const page = source.getPage(params.slug);
	if (!page) notFound();

	const MDX = page.data.body;

    const path = `content/docs/${page.file.path}`;

    return (
		<DocsPage
			toc={page.data.toc}
			full={page.data.full}
			tableOfContent={{
				style: 'clerk',
				single: false
			}}
			editOnGithub={{
				repo: 'docs',
				owner: 'klave-network',
				path
			}}
            lastUpdate={page.data.lastModified}
		>
			<DocsTitle>{page.data.title}</DocsTitle>
			<DocsDescription>{page.data.description}</DocsDescription>
			<DocsBody>
				<MDX components={{ ...defaultMdxComponents }} />
			</DocsBody>
		</DocsPage>
	);
}

export async function generateStaticParams() {
	return source.generateParams();
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
	const page = source.getPage(params.slug);
	if (!page) notFound();

	return {
		title: page.data.title,
		description: page.data.description
	} satisfies Metadata;
}
