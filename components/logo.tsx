import Image from 'next/image';
import KlaveLogoLight from '@/public/images/klave-logo-light.svg';
import KlaveLogoDark from '@/public/images/klave-logo-dark.svg';

export const Logo = () => {
	return (
		<>
			<Image src={KlaveLogoLight} alt="Klave logo" width={30} className="hidden dark:block mr-5" />
			<Image src={KlaveLogoDark} alt="Klave logo" width={30} className="dark:hidden block mr-5" />
		</>
	);
};
