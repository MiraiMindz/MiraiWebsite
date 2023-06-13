import { ClassCard } from "@/app/components/mdx/PostSide";
import { getAllPostsMeta } from "@/app/lib/mdx/parseClasses";
import path from "path";

const postsDirectory = path.join(process.cwd(), 'src', 'app', 'classes', 'PythonLessons', 'Classes');

export default async function Page() {
  const posts = await getAllPostsMeta(postsDirectory);

  return (
    <main className="min-h-screen min-w-full flex-grow flex justify-start items-center flex-col">
      <h1 className="text-2xl font-black text-center">PythonLessons</h1>
      <article>
        <ul className="min-w-full">
          {posts?.map(post => (
            <li className="my-2 md:my-4" key={post?.slug}>
              <ClassCard 
                title={post?.title}
                shortSum={post?.shortSum}
                href={`/classes/PythonLessons/${post?.slug}`}
                readTime={post?.readTime?.text}
                chapter={post?.chapter}
              />
              <hr className="rounded-full h-0.5 w-[99%] bg-neutral-950 dark:bg-neutral-50 opacity-50"/>
            </li>
          ))}
        </ul>
      </article>
    </main>
  )
}
