"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GitHubRepoType } from "../types/GitHubRepos";
import { ProjectCard } from "../components/Projects/ProjectCards";

async function getData() {
  const res = await fetch("https://api.github.com/users/miraimindz/repos");

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Projects() {
  const repoData: GitHubRepoType[] = await getData();
  return (
    <main className="min-h-screen min-w-full flex-grow flex justify-start items-center flex-col">
      <article className="max-w-[40ch] max-w-[80ch]">
        <h1 className="text-2xl font-black text-center font-ibmPlexMono my-2">Projetos</h1>
        <p className="text-lg my-2 text-center">
          Aqui você encontrará meus projetos pessoais.
        </p>
        <hr className="my-2 w-[99%] bg-neutral-950 dark:bg-neutral-50 block h-0.5 rounded-full"/>
        <h2 className="text-xl font-black text-center font-ibmPlexMono my-2">GitHub</h2>
        {repoData != null ? (
          <div className="my-4">
            <p className="text-justify">
              Aqui estão meus projetos e repostórios do GitHub, eles são automaticamente coletados usando a API do GitHub.
            </p>
            <ul>
              {repoData?.map((repo: GitHubRepoType) => (
                  <li className="my-2 md:my-4" key={repo.id}>
                    <Link href={repo.html_url}>
                      <ProjectCard htmlURL={repo.html_url} repoDescription={repo.description} repoName={repo.name}/>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ) : (
          <p>Error</p>
        )}
      </article>
    </main>
  );
}
