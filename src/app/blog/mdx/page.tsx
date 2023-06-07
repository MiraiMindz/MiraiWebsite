"use client";
import React from 'react';
import parseMdxFiles from '../utils/getPosts';
import { cwd } from 'process';

export default function Mdxpage() {
  const postsDir = `${cwd()}/src/app/blog/posts`;
  const parsedData = parseMdxFiles(postsDir);
  console.log(parsedData);
  return (
    <main>
      test
    </main>
  );
}
