import nextra from 'nextra';

const withNextra = nextra({
	theme: 'nextra-theme-docs',
	themeConfig: '/utils/theme.config.tsx'
});

export default withNextra({
	poweredByHeader: false,
	reactStrictMode: true
});
