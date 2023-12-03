"use client";

import { AccordionFAQ } from "./components/faq/accordion";
import { Hero } from "./components/hero";
import { RecommendationForm } from "./components/recommendation-form";
import TopBar from "./components/top-bar";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <TopBar />
      <Hero />
      <RecommendationForm />
      <AccordionFAQ />
    </main>
  );
}
