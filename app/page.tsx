import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
