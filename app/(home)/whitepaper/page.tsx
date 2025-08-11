import { whitepaper } from '~/lib/source';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';

export default async function Page(props: {
    params: Promise<{ slug: string }>;
}): Promise<React.ReactElement> {
    const params = await props.params;
    const page = whitepaper.getPage([params.slug]);
    console.log(page, params);

    if (!page) notFound();

    return (
        <div className="">
            <div
                className="container rounded-xl border py-12 md:px-8"
                style={{
                    backgroundColor: 'black',
                    backgroundImage: [
                        'linear-gradient(140deg, hsla(195, 100%, 50%,0.3), transparent 50%)',
                        'linear-gradient(to left top, hsla(195, 100%, 50%,0.8), transparent 50%)',
                        'radial-gradient(circle at 100% 100%, hsla(195, 100%, 50%,1) 7%, transparent)'
                    ].join(', '),
                    backgroundBlendMode: 'difference, difference, normal'
                }}
            >
                <h1 className="mb-2 text-3xl font-owners font-medium tracking-wide text-white">
                    {page.data.title}
                </h1>
                <p className="mb-4 text-white/80">{page.data.description}</p>
            </div>
            <article className="container flex flex-col px-0 py-8 lg:flex-row lg:px-4">
                <div className="prose min-w-0 flex-1 p-4">
                    <page.data.body components={defaultMdxComponents} />
                </div>
            </article>
        </div>
    );
}
