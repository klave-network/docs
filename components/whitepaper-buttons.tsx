import React from 'react';
import Link from 'next/link';

const IntroBtns: React.FC = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				gap: '1rem',
				fontWeight: 'bold',
				padding: '1rem 0',
				fontFamily: 'monospace'
			}}
		>
			<Link
				href="/docs/Klave-whitepaper.pdf"
				target="_blank"
				rel="noopener noreferrer"
				style={{ borderColor: '#00C4FF', borderWidth: '2px', padding: '0.5rem' }}
			>
				Download
			</Link>
			<Link
				href="https://app.klave.com/login"
				style={{ borderColor: '#80FFDB', borderWidth: '2px', padding: '0.5rem' }}
			>
				Log in
			</Link>
		</div>
	);
};

export default IntroBtns;
