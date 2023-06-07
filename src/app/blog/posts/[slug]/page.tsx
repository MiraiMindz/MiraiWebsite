import { getPostBySlug } from "@/app/lib/mdx/parsePosts"

const getPageContent = async (slug: any) => {
  const { meta, content } = await getPostBySlug(slug)
  return { meta, content }
}

export async function generateMetadata({ params }: any) {
  const { meta } = await getPageContent(params.slug)
  return { title: meta.title }
}

export default async function Page({ params }: any) {
  const { content } = await getPageContent(params.slug)

  return (
    <section>
      {content}
    </section>
  )
}
