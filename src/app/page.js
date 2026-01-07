"use client";
import React from "react";
import HeroVideoSection from "../components/HeroVideoSection";
import Team from "@/components/Team";
import Advisory from "@/components/Advisory";


export default function Home() {
  return (
    <main className="relative">
      <HeroVideoSection />
      <Team/>
      <Advisory/>
    </main>
  );
}
