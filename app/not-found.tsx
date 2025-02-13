import Link from 'next/link';
import { Button } from '~/components/ui/button';
import { Logo } from '~/components/logo';

export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center gap-6">
            <Logo />
            <div className="flex items-center gap-4">
                <h1 className="text-2xl">404</h1>
                <span>Page not found</span>
            </div>
            <Link href="/">
                <Button>Return Home</Button>
            </Link>
        </div>
    );
}
