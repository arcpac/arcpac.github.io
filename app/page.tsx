import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";
import MyProjects from "./components/projects/MyProjects";

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
    company: "CorporateInteractive",
    role: "Software Developer",
    period: "Jun 2024 – Present",
    location: "Australia",
    icon: "/logos/qc.png",
    description:
      `Worked as a Software Developer contributing to the design, development, and ongoing improvement of QuoteCloud, a production-grade document editor and quoting platform used by customers to create proposals, quotes, and other sales documents.

Contributed to AI-enabled features within the application, including supporting the implementation of a chatbot using a Retrieval-Augmented Generation (RAG) approach.

Worked closely with senior developers and cross-functional stakeholders to optimise performance, address technical debt, and align implementations with best practices. Actively participated in code reviews, debugging, and refactoring.`,
    stack: [
      {
        name: "Next.js",
        desc: "App Router • SSR/SSG",
        icon: "/logos/nextjs.svg",
        href: "#",
      },
      {
        name: "React",
        desc: "Reusable UI components",
        icon: "/logos/react-2.svg",
        href: "#",
      },
      {
        name: "TypeScript",
        desc: "Type-safe codebase",
        icon: "/logos/ts-1.svg",
        href: "#",
      },
    ],
  },
  {
    company: "Yondu Inc.",
    role: "Systems Analyst",
    period: "Jun 2021 – Feb 2022",
    location: "Philippines",
    icon: "/logos/yondu.png",
    description:
      `- Understanding the products and services back-end configuration and integration
- Assessing business requirements and ensuring creation of B2B Products
- Providing the best solution and design based on the business requirement to ensure that the newly created product and services or any modification done on the existing product will not have an impact on business users
- Support clients with software and implementation`,
  },
  {
    company: "Pragtechnologies",
    role: "Software Engineer",
    period: "Aug 2019 – Jun 2021",
    location: "Philippines",
    icon: "/logos/pragtech.png",
    description:
      `
      - Design, code, test and debugging software applications.
- Collaborating with cross-functional teams to define, design and ship new features.
- Write clean and maintainable code.
- Analysing end-users’ requirements and tailoring software solutions to meet their needs.
- Tech Stack used: Elixir, Phoenix Framework, GraphQL, Git version control, PostgreSQL, ReactJS, HTML, JavaScript
      `,
    stack: [
      {
        name: "Elixir + Phoenix",
        desc: "Backend services and APIs",
        icon: "/logos/elixir-phoenix.png",
        href: "#",
      },
      {
        name: "PostgreSQL",
        desc: "Relational database",
        icon: "/logos/postgres.svg",
        href: "#",
      },
      {
        name: "GraphQL",
        desc: "Flexible API layer for the React",
        icon: "/logos/graphql.svg",
        href: "#",
      },
    ],
  },
  {
    company: "Bounty Fresh Food Inc.",
    role: "Software Developer",
    period: "Feb 2019 – Jul 2019",
    location: "Philippines",
    icon: "/logos/bounty.png",
    description:
      `
- System Design: Contribute to the design architecture of software systems
- Work with cross-functional teams, including QA, product management and developers.
- Bug fixing
- Write and maintain high-quality, efficient code
- Tech stack used: CodeIgniter (PHP), HTML, JavaScript, SVN, CSS, JQuery

      `,
    stack: [
      {
        name: "PHP",
        desc: "Server-side",
        icon: "/logos/php.svg",
        href: "#",
      },
      {
        name: "CodeIgniter",
        desc: "MVC framework for maintainable apps.",
        icon: "/logos/codeigniter.png",
        href: "#",
      },
      {
        name: "PostgreSQL",
        desc: "Database for internal records",
        icon: "/logos/postgres.svg",
        href: "#",
      },
    ],
  },
  {
    company: "HDI System Technology",
    role: "Systems Implementation Specialist",
    period: "Jul 2018 – Feb 2019",
    location: "Philippines",
    icon: "/logos/picture.png",
    description:
      "Supported system implementation activities, including setup, rollout support, and coordination to ensure smooth adoption for stakeholders.",
  },
  {
    company: "Optimind Technology Solutions",
    role: "SEO Link Builder",
    period: "Jul 2016 – Jun 2018",
    location: "Philippines",
    icon: "/logos/optimind.png",
    description:
      "Early career role focused on SEO link-building and off-page optimisation tasks, supporting search visibility and content discoverability.",
  },
  {
    company: "Asia Brewery Incorporated",
    role: "Junior Systems Analyst",
    period: "Aug 2015 – Jun 2016",
    location: "Philippines",
    icon: "/logos/ab.png",
    description:
      "Early career role assisting with system support, documentation, and coordination across business and technical teams.",
  },
];

const TOOLS = [
  {
    name: "Next.js",
    desc: "App Router • SSR/SSG",
    icon: "/logos/nextjs.svg",
    href: "#",
  },
  {
    name: "React",
    desc: "Component-driven UI",
    icon: "/logos/react-2.svg",
    href: "#",
  },
  {
    name: "JavaScript",
    desc: "Modern ES6+",
    icon: "/logos/js.png",
    href: "#",
  },
  {
    name: "TypeScript",
    desc: "Type-safe JavaScript",
    icon: "/logos/ts-1.svg",
    href: "#",
  },
  {
    name: "Tailwind CSS",
    desc: "Utility-first styling",
    icon: "/logos/tailwind.svg",
    href: "#",
  },
  {
    name: "PostgreSQL",
    desc: "SQL relational database",
    icon: "/logos/postgres.svg",
    href: "#",
  },
  {
    name: "Elixir + Phoenix",
    desc: "Backend APIs • OTP",
    icon: "/logos/elixir-phoenix.png",
    href: "#",
  },
  {
    name: "PHP",
    desc: "Server-side web apps",
    icon: "/logos/php.svg",
    href: "#",
  },
];

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
      <nav className="fixed top-5 z-50">
        <div className="rounded-full bg-black/95 px-6 py-3 shadow-[0_12px_35px_-20px_rgba(0,0,0,0.9)]">
          <ul className="flex items-center gap-6 text-[10px] font-semibold uppercase tracking-wide text-white sm:gap-10 md:text-[14px]">
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
        className="flex w-full max-w-4xl flex-col items-center justify-center gap-4 md:gap-6 px-4 pb-10 pt-20 md:pt-28 min-h-screen text-neutral-700 dark:text-neutral-200  sm:p-2"
      >
        <div className="flex w-full flex-col items-center">
          <div className="text-center text-xs uppercase tracking-[0.3em] text-neutral-600 dark:text-neutral-400 sm:text-sm">
            Based in Australia
          </div>
          <div className="flex w-full flex-col gap-4 py-4 items-center sm:flex-row sm:items-center sm:justify-center sm:py-3 sm:px-4">
            <div className="relative h-40 w-40 md:h-60 md:w-60 shrink-0 overflow-hidden rounded-full border-[5px] border-slate-400 dark:border-slate-500">
              <Image
                src={`${basePath}/images/me.jpg`}
                alt="Antonio Caballes"
                fill
                priority
                className="object-cover object-[center_10%] dark:brightness-95"
              />
            </div>
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <div className="text-2xl font-semibold text-neutral-900 dark:text-white sm:text-[42px]">
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
          <div className="text-base text-neutral-700 dark:text-neutral-200 sm:text-[24px]">
            I’m a software developer with 7 years of experience building modern
            web apps using JavaScript, React, and Next.js. I care a lot about
            clean code, testing, and building things that are ready for
            real-world use. I’ve worked across both frontend and backend, and
            I’m comfortable picking up new tools and technologies along the way.
            I’m currently looking for a full-time Software Developer or QA/Test
            role.
          </div>
          <div className="flex flex-col items-center justify-center gap-3 py-4 sm:flex-row sm:gap-9">
            <a className="group inline-flex items-center justify-center rounded-full bg-neutral-200 text-neutral-800 px-8 py-2 text-md font-bold dark:bg-neutral-600 dark:text-slate-100 transition hover:bg-neutral-300 dark:hover:bg-neutral-500"
              href="#experience">
              <span
                className="inline-flex items-center overflow-hidden w-0 opacity-0 -ml-1 transition-all duration-200 group-hover:w-4 group-hover:opacity-100 group-hover:ml-0"
                aria-hidden="true"
              >
                x
              </span>

              <span className="ml-2">Explore my Work</span>
            </a>

            <a
              href="/antonio-caballes-resume.pdf"
              download
              className="group inline-flex items-center justify-center rounded-full bg-neutral-200 text-neutral-800 px-8 py-2 text-md font-bold dark:bg-neutral-600 dark:text-slate-100 transition hover:bg-neutral-300 dark:hover:bg-neutral-500"
            >
              <span
                className="inline-flex items-center overflow-hidden w-0 opacity-0 -ml-1 transition-all duration-200 group-hover:w-4 group-hover:opacity-100 group-hover:ml-0"
                aria-hidden="true"
              >
                x
              </span>

              <span className="ml-2">Check my Resume</span>
            </a>
          </div>
          <div className="flex justify-center gap-6 pb-2">
            <a
              href="https://www.linkedin.com/in/anton-caballes-a44a4a18b/"
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
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="flex w-full max-w-4xl flex-col items-center justify-center gap-4 p-2 md:pt-20 md:min-h-screen"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 md:gap-12 px-6">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
            <div className="flex flex-col items-center gap-2 text-center">
              <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl dark:text-white">
                The mind behind the creations
              </h2>
              <p className="max-w-2xl text-base text-neutral-700 sm:text-lg dark:text-neutral-300">
                I’m a software developer who loves building practical,
                production-ready web apps — and I’m currently deep into AI
                tooling. Right now I’m exploring chatbot implementations and RAG
                systems, including internal assistants (connected to company
                data and workflows) and external assistants trained on public
                content like product pages and FAQs. I’m naturally curious,
                always experimenting, and I enjoy learning new tools that help
                teams move faster and users get better experiences.
              </p>
            </div>
          </div>

          {/* <NowNextStack /> */}
        </div>
        <div id="techs" className="w-full">
          <div className="mx-auto w-full px-4 md:px-16 py-8">
            {/* Tools header row */}
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                {/* <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                  Tools & Tech I use
                </h3> */}
                <p className="mt-1 text-neutral-600 dark:text-neutral-300">
                  My Top-Tier Tools
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
            <div className="grid gap-3 md:gap-6 grid-cols-2 lg:grid-cols-2">
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
                    <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white dark:bg-neutral-800">
                      <Image
                        src={t.icon}
                        alt={`${t.name} icon`}
                        fill
                        className="object-contain"
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

                  {/* <Link
                    href={t.href}
                    className="
                  rounded-full bg-neutral-100 px-4 py-2
                  text-xs font-semibold text-blue-600
                  transition hover:bg-neutral-200
                  dark:bg-neutral-800 dark:text-blue-400 dark:hover:bg-neutral-700
                "
                  >
                    View
                  </Link> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="flex w-full max-w-5xl flex-col items-center justify-center gap-4 p-2 pt-2 md:pt-20 md:min-h-screen"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 md:gap-12 px-4">
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl dark:text-white">
              Work Experience
            </h2>
            <p className="max-w-2xl text-base text-neutral-700 sm:text-lg dark:text-neutral-300">
              Placeholder company experiences following a clean timeline layout.
            </p>
          </div>

          {WORK_EXPERIENCES.map((work_exp) => (
            <div
              key={`${work_exp.company}-${work_exp.period}`}
              className="relative grid gap-12"
            >
              <div className="grid gap-2 md:gap-8">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      {work_exp.icon ? (
                        <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white">
                          <Image
                            src={work_exp.icon}
                            alt={`${work_exp.company} icon`}
                            fill
                            className="object-contain"
                            sizes="48px"
                          />
                        </div>
                      ) : null}

                      <div className="text-lg font-semibold text-neutral-900 dark:text-white">
                        {work_exp.company}
                      </div>
                    </div>

                    <div className="text-sm text-neutral-700 dark:text-neutral-300 font-bold">
                      {work_exp.role} | {work_exp.period} | {work_exp.location}
                    </div>

                    {(() => {
                      const lines = work_exp.description
                        .split("\n")
                        .map((line) => line.trim())
                        .filter(Boolean);
                      const bulletLines = lines.filter((line) =>
                        line.startsWith("- "),
                      );
                      const renderBullets =
                        lines.length > 1 && bulletLines.length === lines.length;

                      if (renderBullets) {
                        return (
                          <ul className="list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300">
                            {bulletLines.map((line, index) => (
                              <li key={`${index}-${line}`}>{line.slice(2)}</li>
                            ))}
                          </ul>
                        );
                      }

                      return (
                        <p className="text-sm text-neutral-700 dark:text-neutral-300">
                          {work_exp.description}
                        </p>
                      );
                    })()}
                  </div>
                </div>
                <div className="hidden md:grid gap-3 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                  {work_exp.stack?.map((tool) => (
                    <div className="flex items-center max-w- justify-between gap-4 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
                      <div className="flex items-center gap-4">
                        <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
                          <Image
                            src={`${tool.icon}`}
                            alt={`${tool.name} icon`}
                            fill
                            className="object-contain"
                            sizes="48px"
                          />
                        </div>

                        <div className="leading-tight">
                          <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                            {tool.name}
                          </div>
                          <div className="text-xs text-neutral-600 dark:text-neutral-300">
                            {tool.desc}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <MyProjects />
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
    </div>
  );
}
