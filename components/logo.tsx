import Image from 'next/image';
import Link from 'next/link';
import KlaveLogoLight from '~/public/images/klave-light.svg';
import KlaveLogoDark from '~/public/images/klave-dark.svg';

export const Logo = () => {
	return (
		<Link href="/">
			<Image src={KlaveLogoLight} alt="Klave logo" width={100} className="hidden dark:block" />
			<Image src={KlaveLogoDark} alt="Klave logo" width={100} className="dark:hidden block" />
		</Link>
	);
};
