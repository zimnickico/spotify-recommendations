"use client";

import { Hero } from "./components/hero";
import { RecommendationForm } from "./components/recommendation-form";
import TopBar from "./components/top-bar";

export default function Home() {

  return (
    <main
    className="overflow-hidden">
      <TopBar/>
      <Hero/>
      <RecommendationForm />
    </main>
  );
}
