import type { Metadata } from "next";
import Hero from "@/components/features/hero";

export const metadata: Metadata = {
  title: "ptmbalitrans",
  description: "PTM Bali Trans is a leading transportation service provider in Bali.",
};

export default function HomePage() {
  return (
    <Hero />
  );
}
