"use client";
import PythonLogo from "../components/assets/PythonLogo";

import Link from "next/link";

export default function Classes() {
  return (
    <main>
      <PythonLogo
        blueClass="fill-blue-700 dark:fill-blue-400"
        yellowClass="fill-yellow-600 dark:fill-yellow-400"
      />
      <Link href="/classes/PythonLessons">PythonLessons</Link>
    </main>
  );
}
