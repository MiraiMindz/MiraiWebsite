import path from 'path';
import matter from 'gray-matter';
import * as fs from 'fs';

interface FileData {
  frontmatter: matter.GrayMatterFile<string>['data'];
  markdown: matter.GrayMatterFile<string>['content'];
}

export default function parseMdxFiles(directory: string): FileData[] {
  const files = fs.readdirSync(directory);

  const mdxFiles = files.filter((file) => path.extname(file) === '.mdx');

  const fileData: FileData[] = [];

  mdxFiles.forEach((file) => {
    const filePath = path.join(directory, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    fileData.push({
      frontmatter: data,
      markdown: content,
    });
  });

  return fileData;
}


//Failed to compile.
//./src/app/blog/utils/getPosts.ts
//Module not found: Can't resolve 'fs'
// https://maxleiter.com/blog/build-a-blog-with-nextjs-13
