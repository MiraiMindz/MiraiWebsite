"use client";

import { useEffect, useState } from "react";

import { GitHubRepoType } from "../types/GitHubRepos";
import { ProjectCard } from "../components/Projects/ProjectCards";

export default async function Projects() {
  const [repoData, setRepoData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const apiUrl = 'https://api.github.com/users/miraimindz/repos';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data: any) => {
        console.log("data", data);
        setRepoData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);
  
  useEffect(() => {
    if (repoData) {
      console.log('Updated repoData:', repoData);
    }
  }, [repoData]);

  while (isLoading) {
    if (isLoading) {
      return <div>Loading...</div>; // Render a loading state or spinner while fetching data
    } else {
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
  }
}
