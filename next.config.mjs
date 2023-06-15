import withMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import flattenListItemParagraphs from "mdast-flatten-listitem-paragraphs";

const mdxConfig = {
  //extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkGfm, flattenListItemParagraphs],
    providerImportSource: '@mdx-js/react',
  },
};

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

export default withMDX(mdxConfig)(nextConfig);


// https://stackoverflow.com/questions/68814616/nextjs-render-markdown-with-table
// https://github.com/vercel/next.js/issues?q=remark-gfm
