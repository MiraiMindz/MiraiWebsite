"use client";

import { fetchGithubPublicRepos } from "../lib/APIs/GitHub/Projects";



export default async function Projects() {
  const GitRepos = await fetchGithubPublicRepos();
  console.log(GitRepos);
  return (
    <main>
      Projects
    </main>
  );
}
