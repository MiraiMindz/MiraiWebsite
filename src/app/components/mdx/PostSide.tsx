import Link from "next/link";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

interface PostSideProps {
  title: string;
  shortSum: string;
  href: string;
  readTime: string;
  date: string;
}

export function PostSide(props: PostSideProps) {
  const formattedDate = dayjs(props.date).locale('pt-br').format('D/MM/YYYY');
  return (
    <Link href={props.href}>
      <div className="postSideClass">
        <h2 className="font-black text-base truncate transition-all text-left md:text-center md:text-xl">{props.title}</h2>
        <p className="italic text-neutral-500 dark:text-neutral-400 text-sm truncate md:whitespace-normal md:text-lg">{props.shortSum}</p>
        <div className="flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center">
          <p className="text-neutral-500 dark:text-neutral-400 text-sm truncate md:text-lg">Publicado em: {formattedDate}</p>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm underline truncate md:text-lg">{props.readTime}</p>
        </div>
      </div>
    </Link>
  );
}
