'use client';

import { useParams, usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { cn } from '~/lib/utils';
import { ApiVersionSelect } from '~/utils/api-version-select';

export function Body({ children }: { children: ReactNode }): JSX.Element {
	const mode = useMode();
	// might need to remove width styles max-w-container mx-auto
	return (
    <div className={cn(mode, 'relative flex flex-col max-w-fd-container mx-auto min-h-screen antialiased')}>
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

	return (
		<>
			{isVersionedPath ? <ApiVersionSelect /> : null}
		</>
	);
}
