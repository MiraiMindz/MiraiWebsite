import Link from "next/link";

interface ProjectCardProps {
  htmlURL: string;
  repoName: string;
  repoDescription: string;
}

export function ProjectCard(props: ProjectCardProps) {
  return (
    <Link href={props.htmlURL}>
      <div>
        <h1>{props.repoName}</h1>
        <p>{props.repoDescription}</p>
      </div>
    </Link>
  );
}
