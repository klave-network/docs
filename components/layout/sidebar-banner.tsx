'use client';

import { usePathname } from 'next/navigation';
import Link from 'fumadocs-core/link';
import { ChevronLeft } from 'lucide-react';

export const SidebarBanner = () => {
    const pathname = usePathname();

    if (!pathname.startsWith('/sdk') && !pathname.startsWith('/connector')) {
        return <></>;
    }

    return (
        <>
            <Link
                href="/"
                className="flex items-center gap-1 order-first pb-2 text-fd-muted-foreground font-medium hover:no-underline transition-colors hover:text-fd-accent-foreground \[&_svg\]:size-4"
            >
                <ChevronLeft className="w-4" /> Back to main
            </Link>
        </>
    );
};
