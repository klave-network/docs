'use client';

import Link from 'fumadocs-core/link';
import { usePathname } from 'next/navigation';
import { source } from '~/utils/source';
import { Logo } from '~/components/logo';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { NavMenu } from '~/components/nav-menu';
import { Globe, AppWindowMac, ChevronLeft } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';

const SidebarBanner = () => {
  const pathname = usePathname();

  if (!pathname.startsWith('/sdk') && !pathname.startsWith('/connector')) {
    return <></>;
  }

  return (
    <>
      <Link href="/" className="flex items-center gap-1 order-first pb-2 text-fd-muted-foreground font-medium hover:no-underline transition-colors hover:text-fd-accent-foreground \[&_svg\]:size-4">
        <ChevronLeft className='w-4' /> Back to main
      </Link>
    </>
  )
};

export default function Layout({ children }: { children: ReactNode }): JSX.Element {

  const pathname = usePathname();

  return (
    <DocsLayout
      tree={source.pageTree}
      githubUrl='https://github.com/klave-network'
      nav={{
        title: <Logo className='block md:hidden' />,
      }}
      sidebar={{
        banner: <SidebarBanner />,
        tabs: !pathname.startsWith('/sdk') && !pathname.startsWith('/connector')
          ? false
          : {
            transform(option, node) {
              const meta = source.getNodeMeta(node);
              if (!meta) return option;

              const dirname = meta.file.dirname.split('/')[0];

              // Display only current folder
              if (pathname.startsWith(`/${dirname}`)) {
                return {
                  ...option,
                  icon: (
                    <Slot
                      className="bg-linear-to-t from-fd-background/80 p-1 [&_svg]:size-5"
                      style={{
                        color: `hsl(var(--sdk-color))`,
                        backgroundColor: `hsl(var(--sdk-color)/.3)`,
                      }}
                    >
                      {node.icon}
                    </Slot>
                  ),
                };
              } else return null;
            },
          }
      }}
      containerProps={{
        className: 'md:pt-[48px]'
      }}
      links={[
        {
          text: 'Platform',
          url: 'https://app.klave.com',
          external: true,
          icon: <AppWindowMac />
        },
        {
          text: 'Website',
          url: 'https://klave.com',
          external: true,
          icon: <Globe />
        },
        {
          text: 'Discord',
          url: 'https://discord.gg/MkUxsVeqDW',
          external: true,
          icon: (
            <svg
              role="img"
              className="size-6 "
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
            </svg>
          )
        }
      ]}
    >
      <NavMenu />
      {children}
    </DocsLayout>
  )
}
