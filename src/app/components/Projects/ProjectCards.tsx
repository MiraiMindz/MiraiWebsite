import Link from "next/link";

interface ProjectCardProps {
  htmlURL: string;
  repoName: string;
  repoDescription: string;
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <Link href={props.htmlURL}>
      <div className="rounded-lg border-2 border-neutral-950 dark:border-neutral-50 p-2 grid grid-rows-3 grid-flow-col gap-y-4">
        <h1 className="text-balance font-ibmPlexMono font-black text-xl text-center">{props.repoName}</h1>
        <p className="text-center">{props.repoDescription}</p>
        <div className="grid grid-rows-2 grid-flow-col gap-y-2">
          <p className="text-sm opacity-60 text-center">Para vê-lo no GitHub clique no cartão ou no link abaixo.</p>
          <Link href={props.htmlURL} className="text-sm transition-all text-blue-400 hover:text-blue-600 hover:text-violet-400 dark:hover:text-violet-600 text-center">Veja no GitHub</Link>
        </div>
      </div>
    </Link>
  );
}
