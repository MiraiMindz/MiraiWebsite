"use client";
import PythonLogo from "../components/assets/PythonLogo";

import Link from "next/link";

export default function Classes() {
  return (
    <main className="min-h-screen min-w-full flex-grow flex flex-row justify-center items-start">
      <Link href="/classes/PythonLessons">
        <div className="w-[40ch] flex flex-col justify-between items-center border-2 rounded-lg border-neutral-950 dark:border-neutral-50 p-2">
          <div className="flex justify-between items-center w-full">
            <div className="w-fit flex justify-center items-center">
              <h1 className="text-2xl text-center font-black font-ibmPlexMono text-neutral-950 dark:text-neutral-50">Python Lessons</h1>
            </div>
            <div className="rounded-full border-neutral-950 dark:border-neutral-50 border-2 w-16 h-16 aspect-square p-2">
              <PythonLogo
                blueClass="fill-blue-400"
                yellowClass="fill-yellow-400"
              />
            </div>
          </div>
          <hr className="my-2 w-[99%] bg-neutral-950 dark:bg-neutral-50 block h-0.5 rounded-full"/>
          <p className="mt-2 text-neutral-950/75 dark:text-neutral-50/75">
            Um curso de Python escrito por mim para armazenar meu conhecimento na linguagem e ajudar as pessoas que desejam entrar no mundo de desenvolvimento ou apenas aprender Python.
          </p>
        </div>
      </Link>
    </main>
  );
}
