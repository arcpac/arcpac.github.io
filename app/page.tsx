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
    company: "CorporateInteractive",
    role: "Software Developer",
    period: "Jun 2024 – Present",
    location: "Australia",
    icon: "/logos/qc.png",
    description:
      "Contribute to QuoteCloud’s core product features end-to-end from UI implementation to backend integration ensuring components are consistent, reusable, and conflict-free across the app. Maintain and enhance the QuoteCloud product and marketing websites via an in-house CMS, including ongoing improvements to the Visual Editor and content-building workflow. Support product growth through research and experiments focused on improving user experience and customer acquisition.",
  },
  {
    company: "Yondu Inc.",
    role: "Systems Analyst",
    period: "Jun 2021 – Feb 2022",
    location: "Philippines",
    icon: "/logos/yondu.png",
    description:
      "Served as the system SME for enterprise projects—capturing requirements from client and dev discussions, documenting decisions, and maintaining clear references for configuration and environment details. Supported system setup and configuration, ran User Acceptance Testing (UAT), and produced functional/non-functional documentation to support smooth releases and handover.",
  },
  {
    company: "Pragtechnologies",
    role: "Software Engineer",
    period: "Aug 2019 – Jun 2021",
    location: "Philippines",
    icon: "/logos/pragtech.png",
    description:
      "Built and shipped features for production web applications in healthcare and SMS platforms, working primarily across React (frontend) and Elixir/Phoenix (backend). Delivered end-to-end improvements with a focus on clean implementation, reliability, and maintainable code.",
  },
  {
    company: "Bounty Fresh Food Inc.",
    role: "Software Developer",
    period: "Feb 2019 – Jul 2019",
    location: "Philippines",
    icon: "/logos/bounty.png",
    description:
      "Built and maintained internal business applications using PHP (CodeIgniter), supporting day-to-day operational workflows. Also handled systems analysis—gathering requirements from stakeholders, documenting processes, and translating business needs into practical system features and improvements.",
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

const FEATURED_PROJECTS = [
  {
    eyebrow: "FEATURED PROJECT",
    title: "QuoteCloud",
    subtitle:
      "Contributed to core QuoteCloud features that help businesses create and send quotes efficiently, track document status end-to-end, and complete approvals via eSignature—no messy back-and-forth.",
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
    title: "Chatbot",
    subtitle:
      "Ollama + LangChain assistant embedded in QuoteCloud. Uses a local LLM (Ollama) and a LangChain RAG pipeline to answer app-specific questions and guide users through workflows.",
    href: "#",
    image: "/images/sample-app.png",
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
    name: "TypeScript",
    desc: "Type-safe JavaScript",
    icon: "/logos/ts-1.svg",
    href: "#",
  },
  {
    name: "JavaScript",
    desc: "Modern ES6+",
    icon: "/logos/js.png",
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
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
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
            role.
          </div>
          <div className="flex flex-col items-center justify-center gap-3 py-4 sm:flex-row sm:gap-9">
            <button className="group inline-flex items-center justify-center rounded-full bg-neutral-200 text-neutral-800 px-8 py-2 text-md font-bold dark:bg-neutral-600 dark:text-slate-100 transition hover:bg-neutral-300 dark:hover:bg-neutral-500">
              <span
                className="inline-flex items-center overflow-hidden w-0 opacity-0 -ml-1 transition-all duration-200 group-hover:w-4 group-hover:opacity-100 group-hover:ml-0"
                aria-hidden="true"
              >
                x
              </span>

              <span className="ml-2">Explore my Work</span>
            </button>

            <a
              href="/next.svg"
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
        className="flex w-full max-w-3xl flex-col items-center justify-center gap-4 p-2 md:min-h-screen"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
            <div className="flex flex-col items-center gap-2 text-center">
              <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl dark:text-white">
                The mind behind the creations
              </h2>
              <p className="max-w-2xl text-base text-neutral-700 sm:text-lg dark:text-neutral-300">
                Always learning, always optimising. Lately, I’ve been exploring
                AI-powered apps: chatbots, LLMs, and practical ways to bring
                them into real products. I’m comfortable picking up new
                technologies quickly, and I enjoy learning from strong teams and
                experienced engineers to keep improving how I build.
              </p>
            </div>
          </div>

          {/* <NowNextStack /> */}
        </div>
        <div id="techs" className="w-full">
          <div className="mx-auto w-full px-4 md:px-16 py-16">
            {/* Tools header row */}
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                {/* <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                  Tools & Tech I use
                </h3> */}
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
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
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
                    <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
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
            <div
              key={`${work_exp.company}-${work_exp.period}`}
              className="relative grid gap-12"
            >
              <div className="grid gap-8">
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

                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                      {work_exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
        </div>
      </section>
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

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="mailto:YOUR_EMAIL_HERE"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-2 text-md font-bold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                Email me
              </a>

              <a
                href="mailto:YOUR_EMAIL_HERE"
                className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-8 py-2 text-md font-bold text-neutral-900 transition hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
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
