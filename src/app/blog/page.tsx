import Link from "next/link";
import { getAllPostsMeta } from "../lib/mdx/parsePosts";

export default async function Page() {
  const posts = await getAllPostsMeta();
  console.log(posts);

  return (
    <main className="min-h-screen min-w-full flex-grow">
      <ul>
        {posts?.map(post => (
          <li key={post?.slug}><Link href={`/blog/posts/${post?.slug}`} key={post?.slug}>
            {post?.title}
          </Link></li>
        ))}
      </ul>
    </main>
  )
}


// https://dev.to/slanted_dev/nextjs-13-blog-starter-1b6p
