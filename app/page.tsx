import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
export const montserrat = Montserrat({
  subsets: ["latin"],
});
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const WORK_EXPERIENCES = [
  {
    company: "Company XYZ",
    role: "Software Developer",
    period: "2018 - 2020",
    location: "Sydney, AU",
    description:
      "Built internal tools for inventory tracking, improving data accuracy and reducing manual reporting overhead.",
  },
  {
    company: "Nova Labs",
    role: "Frontend Engineer",
    period: "2020 - 2021",
    location: "Melbourne, AU",
    description:
      "Delivered customer-facing UI features in React and optimized bundle performance for faster load times.",
  },
  {
    company: "Blue Finch",
    role: "Full Stack Developer",
    period: "2021 - 2022",
    location: "Brisbane, AU",
    description:
      "Shipped end-to-end features across APIs and web clients with a focus on reliability and test coverage.",
  },
  {
    company: "Orbit Systems",
    role: "Senior Developer",
    period: "2022 - 2023",
    location: "Perth, AU",
    description:
      "Led a migration to Next.js and streamlined deployment workflows for quicker release cycles.",
  },
  {
    company: "Arcadia Tech",
    role: "Lead Engineer",
    period: "2023 - Present",
    location: "Remote, AU",
    description:
      "Guided a small team, set technical direction, and improved performance and accessibility standards.",
  },
];
const FEATURED_PROJECTS = [
  {
    eyebrow: "FEATURED PROJECT",
    title: "QuoteCloud",
    subtitle: "Document editor + proposals platform.",
    href: "#",
    image: "/images/sample-app.png",
  },
  {
    eyebrow: "CASE STUDY",
    title: "SplitNest",
    subtitle: "Expense sharing for households.",
    href: "#",
    image: "/images/sample-app.png",
  },
  {
    eyebrow: "SIDE PROJECT",
    title: "Wedding Invitation",
    subtitle: "A polished Next.js static site.",
    href: "#",
    image: "/images/sample-app.png",
  },
];

const TOOLS = [
  {
    name: "Next.js",
    desc: "App Router, SSR",
    icon: "/images/sample-app.png",
    href: "#",
  },
  {
    name: "React",
    desc: "UI + components",
    icon: "/images/sample-app.png",
    href: "#",
  },
  {
    name: "TypeScript",
    desc: "Type-safe dev",
    icon: "/images/sample-app.png",
    href: "#",
  },
  {
    name: "Tailwind",
    desc: "Fast styling",
    icon: "/images/sample-app.png",
    href: "#",
  },
  {
    name: "PostgreSQL",
    desc: "Relational DB",
    icon: "/images/sample-app.png",
    href: "#",
  },
  {
    name: "Supabase",
    desc: "Auth + DB",
    icon: "/images/sample-app.png",
    href: "#",
  },
];

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

export default function Home() {
  return (
    <div
      className={`flex flex-col w-full items-center justify-center min-h-screen bg-white text-neutral-700 dark:bg-neutral-950 dark:text-neutral-200 ${inter.className}`}
    >
      <nav className="fixed left-1/2 top-6 z-50 -translate-x-1/2">
        <div className="rounded-full border border-white/90 bg-black/95 px-6 py-3 shadow-[0_12px_35px_-20px_rgba(0,0,0,0.9)]">
          <ul className="flex items-center gap-6 text-[13px] font-semibold uppercase tracking-wide text-white sm:gap-10 sm:text-sm">
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
        </div>
      </nav>

      <section
        id="home"
        className="flex w-full max-w-3xl flex-col items-center justify-center gap-6 px-4 pb-10 pt-28 min-h-screen text-neutral-700 dark:text-neutral-200 sm:gap-4 sm:p-2"
      >
        <div className="flex w-full flex-col items-center">
          <div className="text-center text-xs uppercase tracking-[0.3em] text-neutral-600 dark:text-neutral-400 sm:text-sm">
            Based in Australia
          </div>
          <div className="flex w-full flex-col items-center gap-4 py-4 sm:flex-row sm:items-start sm:justify-center sm:py-3 sm:px-4">
            <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border border-[5px] border-slate-400 dark:border-slate-500 sm:h-40 sm:w-40">
              <Image
                src={`${basePath}/images/me.jpg`}
                alt="Antonio Caballes"
                width={450}
                height={450}
                priority
                className="object-cover object-[center_10%] dark:brightness-95"
              />
            </div>
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <div className="text-2xl font-semibold text-neutral-900 dark:text-white sm:text-[32px]">
                <div>
                  Hi, I am{" "}
                  <span className="font-bold text-neutral-700">
                    Anton Caballes
                  </span>
                </div>
                <div className="font-bold">Software Developer</div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-400 py-6 text-center text-neutral-700 dark:border-slate-700 dark:text-neutral-200">
          <div className="text-base text-neutral-700 dark:text-neutral-200 sm:text-[20px]">
            I’m a software developer with 7 years of experience building modern
            web apps using JavaScript, React, and Next.js. I care a lot about
            clean code, testing, and building things that are ready for
            real-world use. I’ve worked across both frontend and backend, and
            I’m comfortable picking up new tools and technologies along the way.
            I’m currently looking for a full-time Software Developer or QA/Test
            role.{" "}
          </div>
          <div className="flex flex-col items-center justify-center gap-3 py-4 sm:flex-row sm:gap-9">
            {/* Explore */}
            <button
              className="
          group inline-flex items-center justify-center
          rounded-full 
          bg-neutral-200 text-neutral-800
          px-8 py-2 text-md font-bold
          dark:bg-neutral-600 dark:text-slate-100
          transition hover:bg-neutral-300 dark:hover:bg-neutral-500
        "
            >
              <span
                className="inline-flex items-center overflow-hidden
            w-0 opacity-0 -ml-1
            transition-all duration-200
            group-hover:w-4 group-hover:opacity-100 group-hover:ml-0
          "
                aria-hidden="true"
              >
                x
              </span>

              <span className="ml-2">Explore my Work</span>
            </button>

            {/* Resume */}
            <button
              className="
          group inline-flex items-center justify-center
          rounded-full
          bg-neutral-200 text-neutral-800
          px-8 py-2 text-md font-bold
          dark:bg-neutral-600 dark:text-slate-100
          transition hover:bg-neutral-300 dark:hover:bg-neutral-500
        "
            >
              <span
                className="
            inline-flex items-center overflow-hidden
            w-0 opacity-0 -ml-1
            transition-all duration-200
            group-hover:w-4 group-hover:opacity-100 group-hover:ml-0
          "
                aria-hidden="true"
              >
                x
              </span>

              <span className="ml-2">Check my Resume</span>
            </button>
          </div>
          <div className="flex justify-center gap-6 pb-2">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-slate-300 p-3 transition hover:bg-slate-200 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-slate-800 dark:text-slate-200"
                aria-hidden="true"
              >
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.75 9.5H6.5V17H8.75V9.5M7.63 6.75A1.38 1.38 0 0 0 6.25 8.12A1.38 1.38 0 0 0 7.63 9.5A1.38 1.38 0 0 0 9 8.12A1.37 1.37 0 0 0 7.63 6.75M17.5 12.5C17.5 10.79 16.5 9.5 14.71 9.5C13.81 9.5 13.25 10 13 10.5V9.5H10.75V17H13V13C13 12 13.22 11 14.2 11C15.16 11 15.25 11.86 15.25 13V17H17.5V12.5Z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-slate-300 p-3 transition hover:bg-slate-200 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-slate-800 dark:text-slate-200"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.26C2 16.94 4.87 20.98 8.84 22.5C9.34 22.58 9.5 22.27 9.5 22V20.13C6.73 20.75 6.14 18.92 6.14 18.92C5.68 17.73 5 17.42 5 17.42C4.09 16.77 5.07 16.78 5.07 16.78C6.06 16.85 6.58 17.83 6.58 17.83C7.47 19.38 8.92 18.95 9.48 18.7C9.57 18.03 9.83 17.57 10.12 17.31C7.91 17.05 5.58 16.16 5.58 11.69C5.58 10.42 6.03 9.39 6.77 8.58C6.65 8.31 6.24 7.2 6.88 5.73C6.88 5.73 7.86 5.41 9.5 6.57C10.43 6.31 11.41 6.18 12.39 6.18C13.37 6.18 14.35 6.31 15.28 6.57C16.92 5.41 17.9 5.73 17.9 5.73C18.54 7.2 18.13 8.31 18.01 8.58C18.75 9.39 19.2 10.42 19.2 11.69C19.2 16.17 16.86 17.04 14.64 17.3C15 17.61 15.33 18.22 15.33 19.13V22C15.33 22.27 15.49 22.58 15.99 22.5C19.97 20.98 22.84 16.94 22.84 12.26C22.84 6.58 18.36 2 12 2Z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="flex w-full max-w-3xl flex-col items-center justify-center gap-4 p-2 md:min-h-screen"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl dark:text-white">
              The mind behind the creations
            </h2>
            <p className="max-w-2xl text-base text-neutral-700 sm:text-lg dark:text-neutral-300">
              Computer Science text for the story behind the work. This space is
              where I share what fuels my creativity, from late-night coding
              sessions to riff-heavy guitar practice.
            </p>
          </div>

          <div className="grid items-center gap-12">
            <div className="flex flex-col gap-6 text-neutral-700 dark:text-neutral-200">
              <div className="grid gap-4 text-neutral-700 dark:text-neutral-300">
                <div className="mb-2">
                  <p className="uppercase tracking-[0.3em] text-neutral-800 dark:text-neutral-200">
                    Coding + Software Developer
                  </p>
                  <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                    Placeholder text about building clean systems, refining
                    ideas, and staying curious with new tools.
                  </p>
                </div>
                <div className="mb-2">
                  <p className="uppercase tracking-[0.3em] text-neutral-800 dark:text-neutral-200">
                    Coding + Software Developer
                  </p>
                  <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                    Placeholder text about building clean systems, refining
                    ideas, and staying curious with new tools.
                  </p>
                </div>
                <div className="mb-2">
                  <p className="uppercase tracking-[0.3em] text-neutral-800 dark:text-neutral-200">
                    Coding + Software Developer
                  </p>
                  <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                    Placeholder text about building clean systems, refining
                    ideas, and staying curious with new tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="flex w-full max-w-3xl flex-col items-center justify-center gap-4 p-2 md:min-h-screen"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl dark:text-white">
              Work Experience
            </h2>
            <p className="max-w-2xl text-base text-neutral-700 sm:text-lg dark:text-neutral-300">
              Placeholder company experiences following a clean timeline layout.
            </p>
          </div>

          {WORK_EXPERIENCES.map((work_exp) => (
            <div className="relative grid gap-12">
              <div className="grid  gap-8">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <div className="text-lg font-semibold text-neutral-900 dark:text-white">
                      {work_exp.company}
                    </div>
                    <div className="text-sm text-neutral-700 dark:text-neutral-300">
                      {work_exp.role} | {work_exp.period} | {work_exp.location}
                    </div>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                      {work_exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="relative grid gap-12">
            <div className="grid  gap-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <div className="text-lg font-semibold text-neutral-900 dark:text-white">
                    Horizon Labs • Horizon Labs Inc.
                  </div>
                  <div className="text-sm text-neutral-700 dark:text-neutral-300">
                    Software Engineer | Jan 2025 – Present | Melbourne
                  </div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Placeholder summary about building responsive web
                    interfaces, collaborating with cross-functional teams, and
                    shipping features on a fast cadence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="w-full">
        <div className="mx-auto w-full px-4 md:px-16 py-16">
          {/* Header */}
          <div className="mb-10">
            <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
              Projects
            </h2>
            <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-300">
              A few builds I’m proud of — clean UI, real-world workflows, and
              production-ready code.
            </p>
          </div>

          {/* Featured cards (3 big images) */}
          <div className="grid gap-8 lg:grid-cols-3">
            {FEATURED_PROJECTS.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="
                group rounded-2xl border border-neutral-200 bg-white
                shadow-sm transition
                hover:-translate-y-1 hover:shadow-md
                focus:outline-none focus:ring-2 focus:ring-neutral-900/20
                dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-none
                dark:hover:shadow-[0_12px_28px_-20px_rgba(0,0,0,0.8)]
                dark:focus:ring-neutral-200/20
              "
              >
                <div className="p-5">
                  <div className="text-[11px] font-semibold tracking-widest text-blue-600 dark:text-blue-400">
                    {p.eyebrow}
                  </div>

                  <div className="mt-2 text-lg font-semibold text-neutral-900 dark:text-white">
                    {p.title}
                  </div>

                  <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                    {p.subtitle}
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
                    <Image
                      src={p.image}
                      alt={`${p.title} screenshot`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      priority
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="my-14 h-px w-full bg-neutral-200 dark:bg-neutral-800" />

          {/* Tools header row */}
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                Tools & Tech I use
              </h3>
              <p className="mt-1 text-neutral-600 dark:text-neutral-300">
                The stack I reach for to ship fast and keep things stable.
              </p>
            </div>

            <Link
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              See All
            </Link>
          </div>

          {/* Small “icon rows” grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TOOLS.map((t) => (
              <div
                key={t.name}
                className="
                flex items-center justify-between gap-4
                rounded-2xl border border-neutral-200 bg-white p-4
                shadow-sm transition hover:shadow-md
                dark:border-neutral-800 dark:bg-neutral-900
              "
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
                    <Image
                      src={t.icon}
                      alt={`${t.name} icon`}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>

                  <div className="leading-tight">
                    <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                      {t.name}
                    </div>
                    <div className="text-xs text-neutral-600 dark:text-neutral-300">
                      {t.desc}
                    </div>
                  </div>
                </div>

                <Link
                  href={t.href}
                  className="
                  rounded-full bg-neutral-100 px-4 py-2
                  text-xs font-semibold text-blue-600
                  transition hover:bg-neutral-200
                  dark:bg-neutral-800 dark:text-blue-400 dark:hover:bg-neutral-700
                "
                >
                  View
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <section>
        <div className="rounded-2xl border border-slate-700/60 bg-slate-700/70 p-4 shadow-[0_20px_40px_-30px_rgba(15,23,42,0.9)]">
          <div className="flex items-center gap-2 pb-3">
            <span className="h-4 w-4 rounded-full bg-rose-400/90" />
            <span className="h-4 w-4 rounded-full bg-amber-300/100" />
            <span className="h-4 w-4 rounded-full bg-emerald-500/100" />
            <span className="ml-auto text-xs uppercase tracking-[0.3em] text-slate-500">
              hobby
            </span>
          </div>
          <p className="text-lg font-semibold text-white">sdf</p>
          <p className="mt-2 text-sm text-slate-300">asdf</p>
        </div>
      </section> */}
    </div>
  );
}
