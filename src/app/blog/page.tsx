import path from "path";
import { getAllPostsMeta } from "../lib/mdx/parsePosts";
import { PostSide } from "../components/mdx/PostSide";

const postsDirectory = path.join(process.cwd(), 'src', 'app', 'blog', 'content', 'posts');

export default async function Page() {
  const posts = await getAllPostsMeta(postsDirectory);

  return (
    <main className="min-h-screen min-w-full flex-grow flex justify-center items-start">
      <article className="w-[40ch] md:w-[80ch]">
        <ul>
          {posts?.map(post => (
            <li className="my-2" key={post?.slug}>
              <PostSide 
                title={post?.title}
                shortSum={post?.shortSum}
                href={`/blog/posts/${post?.slug}`}
                readTime={post?.readTime?.text}
                date={post?.publishDate}
              />
            </li>
          ))}
        </ul>
      </article>
    </main>
  )
}
