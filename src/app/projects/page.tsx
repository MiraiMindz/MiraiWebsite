"use client";

import { useEffect } from "react";
import { fetchGithubPublicRepos } from "../lib/APIs/GitHub/Projects";



export default async function Projects() {
  const token: string = String(process.env.API_KEY);
  console.log(token);
  useEffect(() => {
    const fetchData = async () => {
      const GitRepos = await fetchGithubPublicRepos(token);
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
