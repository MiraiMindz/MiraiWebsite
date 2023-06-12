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
    readTime: ReadTimeData;
  };
  content: ReactElement;
  toc: any;
};

type ReadTimeData = {
  text: string;
  minutes: number;
  time: number;
  words: number;
}

export function formatReadingTime(readingTimeString: string): ReadTimeData {
  const { text, minutes, time, words }: ReadTimeData = readingTime(readingTimeString);
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

  const postReadTime:ReadTimeData = formatReadingTime(fileContent);

  return { meta: { ...frontmatter, slug: realSlug, readTime: postReadTime }, content, toc: tableOfContent };
}

export const getAllPostsMeta = async (rootDirectory: string) => {
  const files = fs.readdirSync(rootDirectory);

  let posts = [];

  for (const file of files) {
    const { meta } = await getPostBySlug(file, rootDirectory);
    posts.push(meta);
  }
  posts.sort((post1, post2) => (post1.publishDate > post2.publishDate ? -1 : 1));
  return posts;
}
