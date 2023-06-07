import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { ReactElement } from 'react';

const rootDirectory = path.join(process.cwd(), 'src', 'app', 'blog', 'content', 'posts');

type Frontmatter = {
  title: string;
};

type Post = {
  meta: {
    slug: string;
    title: string;
  };
  content: ReactElement;
};

export const getPostBySlug = async (slug: any): Promise<Post> => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

  const { frontmatter, content } = await compileMDX<Frontmatter>({
    source: fileContent,
    options: { parseFrontmatter: true }
  });

  return { meta: { ...frontmatter, slug: realSlug }, content }
}

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory)

  let posts = []

  for (const file of files) {
    const { meta } = await getPostBySlug(file);
    posts.push(meta);
  }

  return posts;
}
