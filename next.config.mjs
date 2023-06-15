import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import flattenListItemParagraphs from "mdast-flatten-listitem-paragraphs";


const withMDX = nextMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkGfm, flattenListItemParagraphs],
    providerImportSource: '@mdx-js/react',
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx", "md"],
  experimental: {
    appDir: true,
    mdxRs: false,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false
    };

    return config;
  },
}

export default withMDX(nextConfig);
