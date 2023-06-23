"use client";

import { useEffect, useState } from "react";

import { GitHubRepoType } from "../types/GitHubRepos";
import { ProjectCard } from "../components/Projects/ProjectCards";

export default async function Projects() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const GitRepos = await fetchGithubPublicRepos();
  //     console.log(GitRepos);
  //   }
  //   fetchData();
  // }, []);

  const [repoData, setRepoData] = useState<GitHubRepoType[] | null>(null);

  useEffect(() => {
    const apiUrl = 'https://api.github.com/users/miraimindz/repos';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data: GitHubRepoType[]) => {
        setRepoData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <main>
      Projects
      <div>
        <ul>
          {repoData?.map((repo: GitHubRepoType) => (
              <li className="my-2 md:my-4" key={repo.id}>
                <ProjectCard htmlURL={repo.html_url} repoDescription={repo.description} repoName={repo.name}/>
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
}
