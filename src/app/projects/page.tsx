"use client";

import { useEffect } from "react";
import { fetchGithubPublicRepos } from "../lib/APIs/GitHub/Projects";



export default async function Projects() {
  useEffect(() => {
    const fetchData = async () => {
      const GitRepos = await fetchGithubPublicRepos();
      console.log(GitRepos);
    }
    fetchData();
  }, []);
  return (
    <main>
      Projects
    </main>
  );
}
