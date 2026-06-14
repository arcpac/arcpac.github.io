import { Inter, Montserrat } from "next/font/google";

import ProjectSection from "./components/projects/ProjectSection";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar";
import Certificates from "./components/Certificates";
import NewVersionWorkExperience from "./components/experiences/NewVersionWorkExperience";
import SkillsSection from "./components/skills/SkillsSection";
import DevArticlesSection from "./components/DevArticlesSection";
import ContactSection from "./components/ContactSection";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
export const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`flex flex-col w-full items-center justify-center min-h-screen bg-white text-neutral-700 dark:bg-[#16171d] dark:text-neutral-200 ${inter.className}`}
    >
      <Navbar />
      <Hero />
      <SkillsSection />
      <DevArticlesSection />
      <Certificates />
      <NewVersionWorkExperience />
      <ProjectSection />
      {/* <BlogSection /> */}
      <ContactSection />
    </div>
  );
}
