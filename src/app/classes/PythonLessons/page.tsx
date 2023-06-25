import { ClassCard } from "@/app/components/mdx/PostSide";
import { getAllClassesMeta } from "@/app/lib/mdx/parseClasses";
import path from "path";

const classDirectory = path.join(process.cwd(), 'src', 'app', 'classes', 'PythonLessons', 'Classes');

export default async function Page() {
  const classes = await getAllClassesMeta(classDirectory);

  return (
    <main className="min-h-screen min-w-full flex-grow flex justify-start items-center flex-col">
      <h1 className="text-2xl font-black text-center">PythonLessons</h1>
      <article className="max-w-full md:max-w-[60%]">
        <ul className="min-w-full">
          {classes?.map(classItem => (
            <li className="my-2 md:my-4" key={classItem?.slug}>
              <ClassCard
                title={classItem?.title}
                shortSum={classItem?.shortSum}
                href={`/classes/PythonLessons/${classItem?.slug}`}
                readTime={classItem?.readTime?.text}
                chapter={classItem?.chapter}
              />
              <hr className="rounded-full h-0.5 w-[99%] bg-neutral-950 dark:bg-neutral-50 opacity-50"/>
            </li>
          ))}
        </ul>
      </article>
    </main>
  )
}
