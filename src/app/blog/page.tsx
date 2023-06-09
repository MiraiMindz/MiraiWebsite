import path from "path";
import Link from "next/link";
import { getAllPostsMeta } from "../lib/mdx/parsePosts";

const postsDirectory = path.join(process.cwd(), 'src', 'app', 'blog', 'content', 'posts');

export default async function Page() {
  const posts = await getAllPostsMeta(postsDirectory);

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
