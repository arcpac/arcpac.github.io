import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";

import ProjectSection from "./components/projects/ProjectSection";
import TopSkills from "./components/topskills/TopSkills";
import WorkExperience from "./components/experiences/WorkExperience";
import Hero from "./components/hero/Hero";
import RippleGrid from "./components/hero/RippleGrid";
import ThemeToggle from "./components/ThemeToggle";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
export const montserrat = Montserrat({
  subsets: ["latin"],
});


const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

const NOW_STACK = [
  { name: "React", icon: "/logos/react-2.svg" },
  { name: "Next.js", icon: "/logos/nextjs.svg" },
  { name: "TypeScript", icon: "/logos/typescript.svg" },
  { name: "JavaScript", icon: "/logos/javascript.svg" },
  { name: "Tailwind", icon: "/logos/tailwind.svg" },
  { name: "PostgreSQL", icon: "/logos/postgres.svg" },
  { name: "Supabase", icon: "/logos/supabase.svg" },
  { name: "Docker", icon: "/logos/docker.svg" },
  { name: "Git", icon: "/logos/git.svg" },
];

const NEXT_STACK = [
  { name: "LLMs", icon: "/logos/llm.svg" }, // or OpenAI/Ollama icon
  { name: "RAG", icon: "/logos/rag.svg" },
  { name: "LangChain", icon: "/logos/langchain.svg" },
  { name: "Ollama", icon: "/logos/ollama.svg" },
  { name: "Vector DBs", icon: "/logos/vector.svg" }, // Pinecone/pgvector/etc.
];

function StackRow({
  label,
  items,
}: {
  label: string;
  items: { name: string; icon: string }[];
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
      <div className="shrink-0 text-xs font-semibold tracking-wide text-neutral-500 dark:text-neutral-400">
        {label}
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <div
            key={item.name}
            className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-800 shadow-sm transition hover:-translate-y-[1px] hover:border-neutral-300 hover:shadow dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
            title={item.name}
          >
            <span className="relative h-4 w-4 overflow-hidden rounded-sm">
              <Image
                src={item.icon}
                alt={`${item.name} logo`}
                fill
                className="object-contain"
              />
            </span>
            <span className="font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function NowNextStack() {
  return (
    <div className="mx-auto mt-6 w-full max-w-2xl">
      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-950">
        <div className="flex flex-col gap-5">
          <StackRow label="NOW (daily drivers)" items={NOW_STACK} />
          <div className="h-px w-full bg-neutral-200 dark:bg-neutral-800" />
          <StackRow label="NEXT (currently exploring)" items={NEXT_STACK} />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div
      className={`flex flex-col w-full items-center justify-center min-h-screen bg-white text-neutral-700 dark:bg-neutral-950 dark:text-neutral-200 ${inter.className}`}
    >
      <nav className="fixed top-3 z-50 w-full px-3 sm:top-5 sm:w-auto sm:px-0">
        <div className="mx-auto w-full max-w-md rounded-2xl bg-black/95 px-4 py-2 shadow-[0_12px_35px_-20px_rgba(0,0,0,0.9)] sm:max-w-none sm:rounded-full sm:px-6">
          <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-8">
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] font-semibold uppercase tracking-wide text-white sm:gap-10 md:text-[14px]">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-opacity hover:opacity-80"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hidden h-5 w-px bg-white/20 sm:block" />
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <Hero />

      <section
        id="skills"
        className="flex relative w-full max-w-6xl flex-col items-center justify-center gap-4 p-2 pt-2 md:pt-1 md:min-h-screen"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 md:gap-12 px-1 md:px-6">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
            <div className="flex flex-col items-center gap-2 text-center">
              <h2 className="text-3xl font-semibold text-neutral-900 text-3xl md:text-4xl dark:text-white">
                The mind behind the creations
              </h2>
              <p className="max-w-2xl text-base text-neutral-700 text-sm md:text-lg dark:text-neutral-300">
                I’m a software developer who loves building practical,
                production-ready web apps and I’m currently deep into AI
                tooling. Right now I’m exploring chatbot implementations and RAG
                systems, including internal assistants (connected to company
                data and workflows) and external assistants trained on public
                content like product pages and FAQs. I’m naturally curious,
                always experimenting, and I enjoy learning new tools that help
                teams move faster and users get better experiences.
              </p>
            </div>
          </div>
        </div>
        <TopSkills />
      </section>
      <WorkExperience />
      <ProjectSection />
      <section id="contact" className="w-full py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8 text-center dark:border-neutral-800 dark:bg-neutral-950 sm:p-12">
            <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white sm:text-4xl">
              Let’s build something
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-base text-neutral-700 dark:text-neutral-300 sm:text-lg">
              Have a role, project, or collaboration in mind? Email me and I’ll
              get back to you.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="mailto:antonraphaelcaballes@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-2 text-md font-bold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                Email me
              </a>

              <a
                href="mailto:antonraphaelcaballes@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-2 text-md font-bold text-neutral-900 transition hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
              >
                antonraphaelcaballes@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}
