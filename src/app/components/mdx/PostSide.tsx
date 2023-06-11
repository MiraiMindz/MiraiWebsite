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
      <div className="p-5 border-2 rounded-lg border-neutral-950 dark:border-neutral-50">
        <h2 className="font-black font-base truncate">{props.title}</h2>
        <p className="italic text-neutral-500 font-sm truncate">{props.shortSum}</p>
        <p className="text-neutral-500 font-sm truncate">Publicado em: {formattedDate}</p>
        <p className="text-neutral-500 font-sm underline truncate">{props.readTime}</p>
      </div>
    </Link>
  );
}
