import Link from "next/link";

interface PostSideProps {
  title: string;
  shortSum: string;
  href: string;
  readTime: string;
  date: string;
}

export function PostSide(props: PostSideProps) {
  return (
    <Link href={props.href}>
      <div className="p-5 border-2 rounded-lg border-neutral-950 dark:border-neutral-50 w-60 truncate">
        <h2 className="font-black">{props.title}</h2>
        <p className="italic text-neutral-500">{props.shortSum}</p>
        <p className="text-neutral-500">{props.date}</p>
        <p className="text-neutral-500 underline">{props.readTime}</p>
      </div>
    </Link>
  );
}
