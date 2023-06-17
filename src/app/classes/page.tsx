"use client";
import PythonLogo from "../components/assets/PythonLogo";

import Link from "next/link";

export default function Classes() {
  return (
    <main>
      <Link href="/classes/PythonLessons">
        <div className="w-[40ch] flex flex-col justify-between items-center p-2 m-2 border-2 rounded-md border-neutral-950 dark:border-neutral-50">
          <div className="flex justify-between items-center">
            <div className="rounded-full border-neutral-950 dark:border-neutral-50 border-2 p-2 w-16 h-16 aspect-square">
              <PythonLogo
                blueClass="fill-blue-400"
                yellowClass="fill-yellow-400"
              />
            </div>
            <div className="block text-center">
              <h1>Python Lessons</h1>
            </div>
          </div>
          <p className="mt-2 border-neutral-950/60 dark:border-neutral-50/60">
            Um curso de Python escrito por mim para armazenar meu conhecimento na linguagem e ajudar as pessoas que desejam entrar no mundo de desenvolvimento ou apenas aprender Python.
          </p>
        </div>
      </Link>
    </main>
  );
}
