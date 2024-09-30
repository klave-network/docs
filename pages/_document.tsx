import { Html, Head, Main, NextScript } from 'next/document';
import { Global } from '@emotion/react';
import { globalNProgressStyles } from '~/global-styles/nprogress';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<Global styles={globalNProgressStyles} />
			</Head>
			<body className="antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
