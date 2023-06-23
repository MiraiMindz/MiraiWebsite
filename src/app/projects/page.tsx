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

  const [repoData, setRepoData] = useState<Object | null>(null);

  useEffect(() => {
    const apiUrl = 'https://api.github.com/users/miraimindz/repos';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data: Object) => {
        console.log('This is your data', data);
        setRepoData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    if (repoData != null) {
      console.log("repoData", repoData);
    }
  }, []);

  return (
    <main>
      Projects
    </main>
  );
}
