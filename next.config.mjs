import { createMDX } from 'fumadocs-mdx/next';
import { createRequire } from 'module';

const git = createRequire(import.meta.url)('git-rev-sync');
const { version } = createRequire(import.meta.url)('./package.json');
const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
    output: 'standalone',
    reactStrictMode: true,
    env: {
        NEXT_REPO_COMMIT: git.long(),
        NEXT_REPO_BRANCH: git.branch(),
        NEXT_REPO_DIRTY: `${git.isDirty()}`,
        NEXT_REPO_VERSION: version
    },
    webpack: (config) => {
        config.resolve.fallback = {
            fs: false
        };

        return config;
    }
};

export default withMDX(config);
