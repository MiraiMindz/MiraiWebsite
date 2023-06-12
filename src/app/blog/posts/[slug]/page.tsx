import path from "path";
import { getPostBySlug, getAllPostsMeta } from "@/app/lib/mdx/parsePosts";
import { PostSide } from "@/app/components/mdx/PostSide";

const postsDirectory = path.join(process.cwd(), 'src', 'app', 'blog', 'content', 'posts');

const getPageContent = async (slug: any) => {
  const { meta, content, toc, readTime } = await getPostBySlug(slug, postsDirectory);
  return { meta, content, toc, readTime }
}

export async function generateMetadata({ params }: any) {
  const { meta } = await getPageContent(params.slug)
  return { title: meta.title }
}

export default async function Page({ params }: any) {
  const { content, toc, readTime } = await getPageContent(params.slug);
  const posts = await getAllPostsMeta(postsDirectory);


  return (
    <section className="flex flex-row justify-center items-start flex-grow">
      <aside className="fixed top-16 left-2 w-64">
        <h1 className="font-black hover:text-violet-400 dark:hover:text-violet-600">Tabela de Conteúdos</h1>
        {toc}
      </aside>
      <article className="w-[40ch] md:w-[80ch] article">
        {content}
      </article>
      <aside className="fixed top-16 right-2 w-64">
        <ul>
          {posts?.map(post => (
            <li className="my-2" key={post?.slug}>
              <PostSide 
                title={post?.title}
                shortSum={post?.shortSum}
                href={`/blog/posts/${post?.slug}`}
                readTime={readTime}
                date={post?.publishDate}
              />
            </li>
          ))}
        </ul>

      </aside>
    </section>
  )
}
