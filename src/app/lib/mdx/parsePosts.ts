import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { ReactElement } from 'react';
import * as MDXCC from '../../components/mdx/components';
import { getHeadings } from './extractToC';
import readingTime from 'reading-time';

type Frontmatter = {
  title: string;
  publishDate: string;
  shortSum: string;
};

type Post = {
  meta: {
    slug: string;
    title: string;
    publishDate: string;
    shortSum: string;
  };
  content: ReactElement;
  toc: any;
  readTime: string;
};

function formatReadingTime(readingTimeString: string) {
  const { text, minutes, time, words } = readingTime(readingTimeString);
  let formattedTime = '';
  if (minutes < 1) {
    formattedTime = '< 1 min.';
  } else {
    formattedTime = `${minutes} min.`;
  }
  //const formattedTime = minutes === 1 ? '1 min.' : minutes < 1 ? "< 1 min." : `${minutes} min.`;
  const formattedText = `Tempo estimado: ${formattedTime}`;
  return { text: formattedText, minutes, time, words };
}

export const getPostBySlug = async (slug: any, rootDirectory: string): Promise<Post> => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
  const tableOfContent = await getHeadings(fileContent);

  const { frontmatter, content } = await compileMDX<Frontmatter>({
    components: MDXCC.default,
    source: fileContent,
    options: { parseFrontmatter: true }
  });

  const readTime = formatReadingTime(frontmatter.publishDate);

  return { meta: { ...frontmatter, slug: realSlug }, content, toc: tableOfContent, readTime: readTime.text };
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
