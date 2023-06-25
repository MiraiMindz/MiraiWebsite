import { ClassSide } from "@/app/components/mdx/PostSide";
import { getAllClassesMeta, getClassBySlug } from "@/app/lib/mdx/parseClasses";
import Link from "next/link";
import path from "path";

const classesDirectory = path.join(process.cwd(), 'src', 'app', 'classes', 'PythonLessons', 'Classes');

const getPageContent = async (slug: any) => {
  const { meta, content, toc } = await getClassBySlug(slug, classesDirectory);
  return { meta, content, toc }
}

async function generateMetadata({ params }: any) {
  const { meta } = await getPageContent(params.slug)
  return { title: meta.title }
}


export default async function Page({ params }: any) {
  const { content, toc } = await getPageContent(params.slug);
  const classes = await getAllClassesMeta(classesDirectory);
  let currentClassIndex = classes.findIndex((classs) => classs.slug === params.slug);
  let nextClassSlug: any = undefined;
  let prevClassSlug: any = undefined;
  if (currentClassIndex > 1) {
    prevClassSlug = classes[currentClassIndex - 1]?.slug;
  } else {
    prevClassSlug = null;
  }

  if (classes.length > 1) {
    nextClassSlug = classes[currentClassIndex + 1]?.slug;
  } else {
    nextClassSlug = null;
  }

  return (
    <section className="grid grid-cols-1 gap-y-8 gap-x-0 md:grid-cols-article md:gap-y-0 md:gap-x-8 overflow-auto">
      <aside className={(toc.length > 0 ? "border-neutral-950 dark:border-neutral-50  border-2" : "") + " hidden md:block h-fit max-h-[85vh] overflow-y-auto p-2 rounded-lg"}>
        {
          toc.length > 0 ? (
            <div className="max-h-fit">
            <h1 className="font-black hover:text-violet-400 dark:hover:text-violet-600 tracking-wide">Tabela de Conteúdos</h1>
            <ul>
              {toc}
            </ul>
          </div>
          ) : (
            <div className="max-h-fit after:content-[' ']"></div>
          )
        }
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
      <aside className="hidden md:block h-fit max-h-[85vh] overflow-y-auto">
        <ul>
          {classes?.map(classItem => (
            <li className="my-2" key={classItem?.slug}>
              <ClassSide
                title={classItem?.title}
                shortSum={classItem?.shortSum}
                href={`/classes/PythonLessons/${classItem?.slug}`}
                readTime={classItem?.readTime?.text}
                chapter={classItem?.chapter}

              />
            </li>
          ))}
        </ul>
      </aside>
      <div className="md:hidden my-4 flex flex-row justify-between items-center w-[40ch]">
        <Link className={(prevClassSlug != null ? "block" : "hidden") + " text-left w-full"} href={`/classes/PythonLessons/${prevClassSlug}`}>
          &lt; Previous Chapter
        </Link>
        <Link className={(nextClassSlug != null ? "block" : "hidden") + " text-right w-full"} href={`/classes/PythonLessons/${nextClassSlug}`}>
          Next Chapter &gt;
        </Link>
      </div>
    </section>
  );
}
