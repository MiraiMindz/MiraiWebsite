"use client";

import { useEffect, useState } from "react";

import { GitHubRepoType } from "../types/GitHubRepos";
import { ProjectCard } from "../components/Projects/ProjectCards";

async function getData() {
  const apiUrl = 'https://api.github.com/users/miraimindz/repos';
  const res = await fetch(apiUrl)

  console.log(res.json.toString())

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Projects() {
  const [repoData, setRepoData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let tempData = await getData();
      setRepoData(tempData);
    }
    fetchData();
  }, []);
  
  useEffect(() => {
    if (repoData) {
      console.log('Updated repoData:', repoData);
    }
  }, [repoData]);

  
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
