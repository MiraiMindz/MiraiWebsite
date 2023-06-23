"use client";

import { useEffect, useState } from "react";

export default async function Projects() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const GitRepos = await fetchGithubPublicRepos();
  //     console.log(GitRepos);
  //   }
  //   fetchData();
  // }, []);

  const [repoData, setRepoData] = useState<any>();

  useEffect(() => {
    const apiUrl = 'https://api.github.com/users/miraimindz/repos';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data: any) => {
        console.log('This is your data', data);
        setRepoData(data);
      });
      console.log("repoData", repoData);
  }, []);

  return (
    <main>
      Projects
    </main>
  );
}
