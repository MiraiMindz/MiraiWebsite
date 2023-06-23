import Link from "next/link";

interface ProjectCardProps {
  htmlURL: string;
  repoName: string;
  repoDescription: string;
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="rounded-lg border-2 border-neutral-950 dark:border-neutral-50 p-2 flex flex-col justify-start items-center ProjectCard transition-all hover:border-violet-500 hover:dark:border-violet-400">
      <h1 className="text-balance font-ibmPlexMono font-black text-xl text-center my-2 transition-all">{props.repoName}</h1>
      <p className="text-justify my-2 transition-all">{props.repoDescription}</p>
      <div className="grid grid-rows-2 grid-flow-col gap-y-2 my-2">
        <p className="text-sm opacity-60 text-center transition-all">Para vê-lo no GitHub clique no cartão ou no link abaixo.</p>
        <Link href={props.htmlURL} target="_blank" className="text-sm transition-all text-blue-400 hover:text-blue-600 hover:text-violet-400 dark:hover:text-violet-600 text-center">Veja no GitHub.</Link>
      </div>
    </div>
  );
}