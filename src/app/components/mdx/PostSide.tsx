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
        <h2 className="font-black text-base truncate transition-all text-left">{props.title}</h2>
        <p className="italic text-neutral-500 dark:text-neutral-400 text-sm truncate">{props.shortSum}</p>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm truncate">Publicado em: {formattedDate}</p>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm underline truncate">{props.readTime}</p>
      </div>
    </Link>
  );
}

export function PostCard(props: PostSideProps) {
  const formattedDate = dayjs(props.date).locale('pt-br').format('D/MM/YYYY');
  return (
    <Link href={props.href}>
      <div className="postSideClass">
        <h2 className="font-black truncate transition-all text-center text-lg">{props.title}</h2>
        <p className="italic text-neutral-500 dark:text-neutral-400 whitespace-normal text-base">{props.shortSum}</p>
        <div className="flex flex-row justify-between items-center">
          <p className="text-neutral-500 dark:text-neutral-400 text-base">Publicado em: {formattedDate}</p>
          <p className="text-neutral-500 dark:text-neutral-400 underline text-base">{props.readTime}</p>
        </div>
      </div>
    </Link>
  );
}
