'use client';

import { useParams, usePathname } from 'next/navigation';
import type { ReactElement, ReactNode } from 'react';
import { cn } from '~/lib/utils';
import { ApiVersionSelect } from '~/utils/api-version-select';
import { Library, type LucideIcon, PlugZap } from 'lucide-react';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';

type ToggleOption = {
    title: string;
    description: string;
    url: string;
    icon: LucideIcon;
    color: string;
};

const toggleOptions: ToggleOption[] = [
    {
        title: 'SDK',
        description: 'Klave SDK',
        url: '/sdk/latest',
        icon: Library,
        color: 'bg-gradient-to-b from-muted/50 to-primary/60 text-klave-strong-blue dark:to-secondary/60 dark:text-klave-blue'
    },
    {
        title: 'Connector',
        description: 'Secretarium Connector',
        url: '/sdk/v0.0.1',
        icon: PlugZap,
        color: 'bg-gradient-to-b from-muted/50 to-accent/60 text-klave-strong-teal dark:to-primary/60 dark:text-klave-teal'
    }
];

export function Body({ children }: { children: ReactNode }): ReactElement {
    const mode = useMode();
    // might need to remove width styles max-w-container mx-auto
    return (
        <div
            className={cn(
                mode,
                'relative flex flex-col max-w-fd-container mx-auto min-h-screen antialiased'
            )}
        >
            {children}
        </div>
    );
}

export function useMode(): string | undefined {
    const { slug } = useParams();
    return Array.isArray(slug) && slug.length > 0 ? slug[0] : undefined;
}

export function VersionToggle() {
    const pathname = usePathname();

    const isVersionedPath = pathname.includes('sdk');

    return <>{isVersionedPath ? <ApiVersionSelect /> : null}</>;
}

export const SidebarBanner = () => {
    const pathname = usePathname();

    const showToggle =
        pathname.includes('sdk') || pathname.includes('connector');

    return (
        <>
            {showToggle ? (
                <>
                    <RootToggle
                        options={toggleOptions.map((option) => {
                            return {
                                title: option.title,
                                description: option.description,
                                url: option.url,
                                icon: (
                                    <option.icon
                                        className={cn(
                                            'size-9 shrink-0 rounded-md p-1.5',
                                            option.color
                                        )}
                                    />
                                )
                            };
                        })}
                    />
                    <VersionToggle />
                </>
            ) : null}
        </>
    );
};
