import path from "path";
import { getAllPostsMeta } from "../lib/mdx/parsePosts";
import { PostCard } from "../components/mdx/PostSide";

const postsDirectory = path.join(process.cwd(), 'src', 'app', 'blog', 'content', 'posts');

export default async function Page() {
  const posts = await getAllPostsMeta(postsDirectory);

  return (
    <main className="min-h-screen min-w-full flex-grow flex justify-center items-start">
      <h1 className="text-2xl font-black">Blog</h1>
      <article>
        <ul className="w-full">
          {posts?.map(post => (
            <li className="my-2 md:my-4" key={post?.slug}>
              <PostCard 
                title={post?.title}
                shortSum={post?.shortSum}
                href={`/blog/posts/${post?.slug}`}
                readTime={post?.readTime?.text}
                date={post?.publishDate}
              />
              <hr className="rounded-full h-0.5 w-[99%] bg-neutral-950 dark:bg-neutral-50 opacity-50"/>
            </li>
          ))}
        </ul>
      </article>
    </main>
  )
}
