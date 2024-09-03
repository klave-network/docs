import React from 'react';
import Link from 'next/link';

export const IntroButtons: React.FC = () => {
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
				href="/docs/get-started/klave-introduction"
				style={{
					borderColor: '#00C4FF',
					borderWidth: '2px',
					padding: '0.5rem'
				}}
			>
				Get started
			</Link>
			<Link
				href="/docs/concepts/what-is-klave"
				style={{
					borderColor: '#80FFDB',
					borderWidth: '2px',
					padding: '0.5rem'
				}}
			>
				Learn
			</Link>
		</div>
	);
};