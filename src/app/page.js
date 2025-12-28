"use client";
import React from "react";
import HeroVideoSection from "../components/HeroVideoSection";
import Team from "@/components/Team";


export default function Home() {
  return (
    <main className="relative">
      <HeroVideoSection />
      <Team/>
    </main>
  );
}
