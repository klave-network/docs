import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="stylesheet" href="https://use.typekit.net/tcp0xtf.css" />
			</Head>
			<body className="overflow-x-hidden relative antialiased leading-relaxed font-sans">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
