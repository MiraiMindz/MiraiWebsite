import path from "path";
import { getPostBySlug } from "@/app/lib/mdx/parsePosts";

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
  //const contentString = ReactDOMServer.renderToString(content);
  console.log(toc)
  return (
    <section>
      <aside>
        {toc}
      </aside>
      {content}
    </section>
  )
}
