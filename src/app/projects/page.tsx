"use client";

import { useEffect, useState } from "react";

import { GitHubRepoType } from "../types/GitHubRepos";
import { ProjectCard } from "../components/Projects/ProjectCards";

async function getData() {
  const res = await fetch("https://api.github.com/users/miraimindz/repos");
  let temp = res.json.toString()
  console.log()

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Projects() {
  const repoData = await getData();

  return (
    <main>
      Projects
      {repoData != null ? (
      <div>
        <ul>
          {repoData?.map((repo: GitHubRepoType) => (
              <li className="my-2 md:my-4" key={repo.id}>
                <ProjectCard htmlURL={repo.html_url} repoDescription={repo.description} repoName={repo.name}/>
              </li>
            ))}
        </ul>
      </div>) : (<p>Error</p>)
      }
    </main>
  );
}
