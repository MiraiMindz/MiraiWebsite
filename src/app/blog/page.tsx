import path from "path";
import { getAllPostsMeta } from "../lib/mdx/parsePosts";
import { PostCard } from "../components/mdx/PostSide";

const postsDirectory = path.join(process.cwd(), 'src', 'app', 'blog', 'content', 'posts');

export default async function Page() {
  const posts = await getAllPostsMeta(postsDirectory);

  return (
    <main className="min-h-screen min-w-full flex-grow flex justify-start items-center flex-col">
      <div className="relative grid grid-cols-1 gap-y-8 gap-x-0 md:grid-cols-3 md:gap-y-0 md:gap-x-8 overflow-auto max-w-full">
        <h1 className="text-2xl font-black text-center font-ibmPlexMono">Blog</h1>
        <aside className="hidden md:block h-fit max-h-[85vh] overflow-y-auto w-full">
          <div className="max-h-fit after:content-[' ']"></div>
        </aside>
        <section className="max-w-full">
          <article className="max-w-full">
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
        </section>
        <aside className="hidden md:block h-fit max-h-[85vh] overflow-y-auto w-full">
          <div className="max-h-fit after:content-[' ']"></div>
        </aside>
      </div>
    </main>
  )
}
