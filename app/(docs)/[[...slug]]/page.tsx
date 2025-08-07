import { source } from '~/lib/source';
import type { Metadata } from 'next';
import {
    DocsPage,
    DocsBody,
    DocsDescription,
    DocsTitle
} from 'fumadocs-ui/page';
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
            breadcrumb={{
                enabled: false
            }}
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
            {/* <div className="absolute inset-0 z-[-1] overflow-hidden duration-1000 animate-in fade-in perspective-[2000px]">
        <div
            className="absolute bottom-[10%] left-1/2 size-[1200px] origin-bottom bg-fd-primary/30 opacity-20"
            style={{
              transform: 'rotateX(75deg) translate(-50%, 400px)',
              backgroundImage:
                'radial-gradient(50% 50% at center,transparent,hsl(var(--background))), repeating-linear-gradient(to right,hsl(var(--primary)),hsl(var(--primary)) 1px,transparent 2px,transparent 100px), repeating-linear-gradient(to bottom,hsl(var(--primary)),hsl(var(--primary)) 2px,transparent 3px,transparent 100px)',
            }}
        />
      </div> */}
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
