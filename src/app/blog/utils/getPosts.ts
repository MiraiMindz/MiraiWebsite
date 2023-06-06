import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export const getPosts = cache(async () => {
  const posts = await fs.readdir('./posts/');

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const filePath = `./posts/${file}`;
        const postContent = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(postContent);

        if (data.published === false) {
          return null;
        }

        return { ...data, body: content } as Post;
      })
  );
});

export async function getPost(slug: string) {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}

export default getPosts;

//Failed to compile.
//./src/app/blog/utils/getPosts.ts
//Module not found: Can't resolve 'fs'
// https://maxleiter.com/blog/build-a-blog-with-nextjs-13