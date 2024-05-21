/** @type {import('next').NextConfig} */

import mdx from '@next/mdx';

const withMdx = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  i18n: {
    locales: ['zh-CN', 'en-US', 'ja-JP', 'ko-KR', 'zh-TW'],
    defaultLocale: 'zh-CN',
  }
};

export default withMdx(nextConfig);
