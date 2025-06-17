import Image from 'next/image';
import KlaveLogoLight from '~/public/images/klave-light.svg';
import KlaveLogoDark from '~/public/images/klave-dark.svg';
import { FC } from 'react';

export const Logo: FC<{ className?: string }> = ({ className }) => {
	return (
		<>
			<Image src={KlaveLogoLight} alt="Klave logo" width={100} className={`hidden dark:block ${className}`} />
			<Image src={KlaveLogoDark} alt="Klave logo" width={100} className={`dark:hidden block ${className}`} />
		</>
	);
};
