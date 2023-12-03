"use client";

import Link from "next/link"
import TopBar from "../components/top-bar";
import { Tracks } from "../components/tracks";

export default function Home() {

  return (
    <main className="overflow-hidden flex flex-col">
      <TopBar />
      <Link 
      className="mt-4 ml-4"
      href="/">{"<- Back"}</Link>
      <Tracks />
    </main>
  );
}
