import { source } from '~/utils/source';
import type { Metadata } from 'next';
import { DocsPage, DocsBody, DocsDescription, DocsTitle } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { Pre, CodeBlock } from 'fumadocs-ui/components/codeblock';
import { UnderConstructionCallout } from '~/components/under-construction';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
    const params = await props.params;
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
			{page.data.underConstruction ? <UnderConstructionCallout /> : null}
			<DocsBody>
				<MDX
					components={{
						Step,
						Steps,
						Tab,
						Tabs,
						...defaultMdxComponents,
						pre: ({ ref: _ref, ...props }) => (
							<CodeBlock {...props}>
								<Pre>{props.children}</Pre>
							</CodeBlock>
						)
					}}
				/>
			</DocsBody>
		</DocsPage>
	);
}

export async function generateStaticParams() {
	return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
    const params = await props.params;
    const page = source.getPage(params.slug);
	if (!page) notFound();

	return {
		title: page.data.title,
		description: page.data.description
	} satisfies Metadata;
}
