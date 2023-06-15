import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { ReactElement } from 'react';
import * as MDXCC from '../../components/mdx/components';
import { getHeadings } from './extractToC';
import readingTime from 'reading-time';
import remarkGfm from "remark-gfm";
import flattenListItemParagraphs from "mdast-flatten-listitem-paragraphs";

type Frontmatter = {
  title: string;
  chapter: string;
  shortSum: string;
};

type Class = {
  meta: {
    slug: string;
    title: string;
    chapter: string;
    shortSum: string;
    readTime: ReadTimeData;
  };
  content: ReactElement;
  toc: ReactElement[];
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

export const getClassBySlug = async (slug: any, rootDirectory: string): Promise<Class> => {
  const realSlug = slug.replace(/\.md$/, '');
  const filePath = path.join(rootDirectory, `${realSlug}.md`);

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
  const tableOfContent = await getHeadings(fileContent);

  const { frontmatter, content } = await compileMDX<Frontmatter>({
    components: MDXCC.default,
    source: fileContent,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm, flattenListItemParagraphs],
      },
    }
  });

  const classReadTime:ReadTimeData = formatReadingTime(fileContent);

  return { meta: { ...frontmatter, slug: realSlug, readTime: classReadTime }, content, toc: tableOfContent };
}

export const getAllClassesMeta = async (rootDirectory: string) => {
  const files = fs.readdirSync(rootDirectory);

  let classes = [];

  for (const file of files) {
    const { meta } = await getClassBySlug(file, rootDirectory);
    classes.push(meta);
  }
  classes.sort((class1, class2) => (class1.chapter < class2.chapter ? -1 : 1));
  return classes;
}
