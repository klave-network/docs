import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
    output: 'standalone',
    reactStrictMode: true,
    webpack: config => {
        config.resolve.fallback = {
            fs: false,
        };

        return config;
    },
};

export default withMDX(config);
