import Link from "next/link";

interface ProjectCardProps {
  htmlURL: string;
  repoName: string;
  repoDescription: string;
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <Link href={props.htmlURL}>
      <div className="rounded-lg border-2 border-neutral-950 dark:border-neutral-50 p-2">
        <h1 className="text-balance font-ibmPlexMono font-black text-xl my-2 text-center">{props.repoName}</h1>
        <p className="my-2">{props.repoDescription}</p>
        <div className="flex justify-center items-center my-2">
          <p className="text-sm opacity-50">Para vê-lo no GitHub clique no cartão ou no link abaixo.</p>
          <Link href={props.htmlURL} className="transition-all text-blue-400 hover:text-blue-600 hover:text-violet-400 dark:hover:text-violet-600">Veja no GitHub</Link>
        </div>
      </div>
    </Link>
  );
}
