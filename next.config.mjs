import remarkGfm from 'remark-gfm';
import nextMDX from "@next/mdx";

const withMDX = nextMDX({
  options: {
    remarkPlugins: [remarkGfm],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
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
