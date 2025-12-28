"use client";
import React from 'react';
import Hero from "../components/Hero";
import VideoSection from "../components/VideoSection";

export default function Home() {
  return (
    <main className="relative">
        <Hero />
        <VideoSection />
    </main>
  );
}