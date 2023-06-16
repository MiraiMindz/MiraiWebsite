"use client";

import Link from "next/link";

import PythonLogo from "../components/assets/PythonLogo";

export default function Classes() {
  return (
    <main>
      <div className="w-8 h-8">
      <PythonLogo/>
      </div>
      <Link href="/classes/PythonLessons">PythonLessons</Link>
    </main>
  );
}
