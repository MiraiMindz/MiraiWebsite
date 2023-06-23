import Link from "next/link";

interface ProjectCardProps {
  htmlURL: string;
  repoName: string;
  repoDescription: string;
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <Link href={props.htmlURL}>
      <div className="rounded-lg border-2 border-neutral-950 dark:border-neutral-50 p-2 flex flex-col justify-start items-center">
        <h1 className="text-balance font-ibmPlexMono font-black text-xl text-center my-2">{props.repoName}</h1>
        <p className="text-center my-2">{props.repoDescription}</p>
        <div className="grid grid-rows-2 grid-flow-col gap-y-2 my-2">
          <p className="text-sm opacity-60 text-center">Para vê-lo no GitHub clique no cartão ou no link abaixo.</p>
          <a href={props.htmlURL} target="_blank" className="text-sm transition-all text-blue-400 hover:text-blue-600 hover:text-violet-400 dark:hover:text-violet-600 text-center">Veja no GitHub.</a>
        </div>
      </div>
    </Link>
  );
}