"use client";
import { getSortedPostsData } from '../utils/getPosts.ts';

export default function Mdxpage() {
  const allPostsData: any = getSortedPostsData();
  return (
    <main>
      {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
    </main>
  );
}
