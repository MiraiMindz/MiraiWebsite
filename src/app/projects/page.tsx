"use client";

import { useEffect } from "react";
import { fetchGithubPublicRepos } from "../lib/APIs/GitHub/Projects";
import { json } from "stream/consumers";

export default async function Projects() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const GitRepos = await fetchGithubPublicRepos();
  //     console.log(GitRepos);
  //   }
  //   fetchData();
  // }, []);

  useEffect(() => {
    let repoData;
    const apiUrl = 'https://api.github.com/users/miraimindz/repos';
    repoData = fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log('This is your data', data);
        return json(data);
      });
      console.log("repoData", repoData);
  }, []);

  return (
    <main>
      Projects
    </main>
  );
}
