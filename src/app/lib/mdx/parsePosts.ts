import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { ReactElement } from 'react';
import * as MDXCC from '../../components/mdx/components';
import { getHeadings } from './extractToC';

const postsDirectory = path.join(process.cwd(), 'src', 'app', 'blog', 'content', 'posts');

type Frontmatter = {
  title: string;
};

type Post = {
  meta: {
    slug: string;
    title: string;
  };
  content: ReactElement;
  toc: any;
};

export const getPostBySlug = async (slug: any, rootDirectory: string): Promise<Post> => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
  const tableOfContent = getHeadings(fileContent);
  console.log(fileContent);

  const { frontmatter, content } = await compileMDX<Frontmatter>({
    components: MDXCC.default,
    source: fileContent,
    options: { parseFrontmatter: true }
  });

  return { meta: { ...frontmatter, slug: realSlug }, content, toc: tableOfContent }
}

export const getAllPostsMeta = async (rootDirectory: string) => {
  const files = fs.readdirSync(rootDirectory);

  let posts = [];

  for (const file of files) {
    const { meta } = await getPostBySlug(file, rootDirectory);
    posts.push(meta);
  }

  return posts;
}
