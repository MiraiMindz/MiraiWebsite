import path from "path";
import { getPostBySlug, getAllPostsMeta } from "@/app/lib/mdx/parsePosts";
import { PostSide } from "@/app/components/mdx/PostSide";
import Link from "next/link";

const postsDirectory = path.join(process.cwd(), 'src', 'app', 'blog', 'content', 'posts');

const getPageContent = async (slug: any) => {
  const { meta, content, toc } = await getPostBySlug(slug, postsDirectory);
  return { meta, content, toc }
}

export async function generateMetadata({ params }: any) {
  const { meta } = await getPageContent(params.slug)
  return { title: meta.title }
}

export default async function Page({ params }: any) {
  const { content, toc } = await getPageContent(params.slug);
  const posts = await getAllPostsMeta(postsDirectory);
  let currentPostIndex = posts.findIndex((post) => post.slug === params.slug);
  let nextPostSlug: any = undefined;
  let prevPostSlug: any = undefined;
  if (posts.length > 1) {
    prevPostSlug = posts[currentPostIndex + 1]?.slug;
  } else {
    prevPostSlug = null;
  }

  if (currentPostIndex > 0) {
    nextPostSlug = posts[currentPostIndex - 1]?.slug;
  } else {
    nextPostSlug = null;
  }

  // flex flex-col items-center md:flex-row md:justify-center md:items-start flex-grow
  return (
    <section className="grid-container gap-x-8">
      <aside className={(toc.length > 0 ? "hidden md:block" : "hidden") + " max-h-[85vh] overflow-y-auto p-2 rounded-lg border-2 border-neutral-950 dark:border-neutral-50"}>
        <div className="max-h-fit">
          <h1 className="font-black hover:text-violet-400 dark:hover:text-violet-600 tracking-wide">Tabela de Conteúdos</h1>
          <ul>
            {toc}
          </ul>
        </div>
      </aside>
      <details className={(toc.length > 0 ? "block md:hidden" : "hidden") + " truncate w-[40ch] p-2 rounded-lg border-2 border-neutral-950 dark:border-neutral-50"}>
        <summary className="truncate">Tabela de Conteudos</summary>
        <ul className="truncate">
          {toc}
        </ul>
      </details>
      <article className="w-[40ch] md:w-[80ch] article max-h-[90vh] overflow-y-auto">
        {content}
      </article>
      <aside className="hidden md:block max-h-[85vh] overflow-y-auto">
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
      </aside>
      <div className="md:hidden my-4 flex flex-row justify-between items-center w-[40ch]">
        <Link className={(prevPostSlug != null ? "block" : "hidden") + " text-left w-full"} href={`/blog/posts/${prevPostSlug}`}>
          &lt; Previous Post
        </Link>
        <Link className={(nextPostSlug != null ? "block" : "hidden") + " text-right w-full"} href={`/blog/posts/${nextPostSlug}`}>
          Next Post &gt;
        </Link>
      </div>
    </section>
  )
}
