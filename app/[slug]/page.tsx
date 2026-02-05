
import Image from "next/image"
import Link from "next/link"
import { notFound, redirect } from "next/navigation"

type ProjectDetails = {
    eyebrow: string
    title: string
    subtitle: string
    image: string
    overview: string
    impact: string
    highlights: string[]
    tech: string[]
    techDescriptions?: Partial<Record<string, string>>
    technicalSummary: string
    securitySummary: string
    technicalDetails: string[]
    liveUrl?: string
}

type UnderConstructionProject = {
    title: string
    description: string
}

const PROJECT_REDIRECTS: Record<string, string> = {
    quotecloud: "https://www.quote.cloud/",
    "quote-cloud": "https://www.quote.cloud/",
}

const UNDER_CONSTRUCTION_PROJECTS: Record<string, UnderConstructionProject> = {
    splitnest: {
        title: "SplitNest",
        description:
            "I am currently preparing the case study and technical breakdown of this software.",
    },
}

const PROJECTS: Record<string, ProjectDetails> = {
    "splitnest-mobile-web": {
        eyebrow: "FEATURED PROJECT",
        title: "SplitNest (Mobile + Web)",
        subtitle:
            "A full-stack expense-sharing platform with a React Native app and a unified backend powered by Supabase (Postgres) and a GraphQL data layer.",
        image: "/images/NestApp-marketing.png",
        overview:
            "I built SplitNest as a mobile-first expense sharing system that tracks group spending, computes net balances, and supports clear repay flows designed to feel fast on mobile while staying consistent across web and API consumers.",
        impact:
            "By centralizing data and rules in a single Supabase-backed platform, I reduced duplicated logic between clients, improved data integrity with relational constraints, and shipped features faster with a single source of truth for balances and membership.",

        highlights: [
            "Built the mobile client with React Native + Expo Router, focusing on predictable navigation and reusable screen patterns.",
            "Implemented a shared data contract using GraphQL to query exactly what each screen needs (reducing over-fetching and brittle REST shape changes).",
            "Modeled expenses, members, shares, and repayments on Postgres with explicit relations for correctness, auditability, and maintainable queries.",
            "Designed household/group-scoped authorization so data access is isolated per membership and enforced consistently across entry points.",
        ],

        tech: [
            "React Native",
            "Next.js",
            "TypeScript",
            "Supabase (PostgreSQL)",
            "GraphQL",
        ],
        techDescriptions: {
            "React Native":
                "React Native powers the cross-platform mobile client so one codebase can deliver a native-feeling UI for both iOS and Android.",
            "Expo Router":
                "Expo Router provides file-based navigation and predictable screen composition, making multi-screen flows easier to scale and maintain.",
            "Next.js":
                "Next.js hosts the web experience and supports backend endpoints that align with the same product domain and auth model.",
            "TypeScript":
                "TypeScript enforces strong typing across client, API, and data contracts, reducing runtime errors and making refactors safer.",
            "Supabase (PostgreSQL)":
                "Supabase/PostgreSQL acts as the system of record for members, expenses, shares, and repayments with relational integrity.",
            GraphQL:
                "GraphQL gives each screen a precise query surface, so mobile and web fetch only the fields needed without endpoint sprawl.",
            "Drizzle ORM":
                "Drizzle ORM provides typed SQL modeling and migrations, improving schema confidence while keeping queries explicit and maintainable.",
            "JWT Auth":
                "JWT authentication secures sessions and API calls, enabling membership-scoped access checks on every protected operation.",
        },

        technicalSummary:
            "SplitNest uses Supabase Postgres as the system of record, with a GraphQL layer providing a typed, composable API surface for both mobile and web. The client apps consume GraphQL queries/mutations for expense creation, share calculation, and repayments, while domain rules stay centralized to avoid logic drift across platforms.",

        securitySummary:
            "Security is enforced through authenticated sessions/JWT, row-level authorization patterns (membership-scoped access), and server-side validation on every mutation. The design prevents cross-household data leakage by ensuring reads/writes are always constrained by the caller’s membership and group context.",

        technicalDetails: [
            "GraphQL enables screen-driven data fetching: each view requests only required fields, improving performance and reducing accidental breaking changes during iteration.",
            "Domain logic computes split amounts, balances, and settlement state using consistent server-side rules to keep mobile and web results identical.",
            "Supabase/Postgres relational modeling (memberships, shares, repayments) keeps integrity strong and queries safe especially as groups and history grow.",
            "Trade-offs were considered: GraphQL adds operational complexity (schema/versioning, caching strategy, resolver discipline) compared to simpler REST endpoints.",
            "Supabase accelerates development with managed Postgres and tooling, but introduces vendor/platform constraints (service limits, migrations discipline, and environment management).",
        ],

        // Optional: if you want to display these later in the UI (no design change required now)
        // graphqlNotes: {
        //   advantages: [
        //     "Typed schema + introspection improves DX and reduces client/server contract mismatch.",
        //     "Avoids over/under-fetching by letting each screen request exactly the fields it needs.",
        //     "Enables rapid iteration by evolving the schema without constantly introducing new endpoints."
        //   ],
        //   disadvantages: [
        //     "Requires stricter governance (schema design, deprecations, query complexity limits).",
        //     "Caching is less straightforward than REST and often needs a deliberate client strategy.",
        //     "Poorly designed resolvers can cause N+1 query patterns without batching."
        //   ]
        // }
    },

}

const toAnchorId = (value: string) =>
    value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")

export function generateStaticParams() {
    return [...Object.keys(PROJECTS), ...Object.keys(UNDER_CONSTRUCTION_PROJECTS)].map((slug) => ({ slug }))
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const projectRedirect = PROJECT_REDIRECTS[slug]
    if (projectRedirect) {
        redirect(projectRedirect)
    }

    const underConstructionProject = UNDER_CONSTRUCTION_PROJECTS[slug]
    if (underConstructionProject) {
        return (
            <main className="grid min-h-screen place-items-center bg-white px-4 text-neutral-700 dark:bg-neutral-950 dark:text-neutral-200">
                <section className="w-full max-w-2xl rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                    <p className="text-[11px] font-semibold tracking-widest text-blue-600 dark:text-blue-400">
                        PROJECT PAGE
                    </p>
                    <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
                        {underConstructionProject.title}
                    </h1>
                    <p className="mt-3 text-base text-neutral-600 dark:text-neutral-300">
                        {underConstructionProject.description}
                    </p>
                    <p className="mt-6 inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                        Under Construction
                    </p>
                    <div className="mt-6">
                        <Link
                            href="/#projects"
                            className="inline-flex items-center rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                        >
                            Back to projects
                        </Link>
                    </div>
                </section>
            </main>
        )
    }

    const project = PROJECTS[slug]

    if (!project) {
        notFound()
    }

    const techSections = project.tech.map((tech, index) => ({
        label: tech,
        id: `tech-${toAnchorId(tech)}-${index + 1}`,
        description:
            project.techDescriptions?.[tech] ??
            `${tech} is part of this solution's stack and supports reliability, maintainability, and delivery speed.`,
    }))

    const sections = [
        { label: "Overview", id: "overview" },
        { label: "Highlights", id: "highlights" },
        { label: "Tech Stack", id: "tech-stack" },
        ...techSections,
        { label: "Architecture", id: "architecture" },
        { label: "Security", id: "security" },
        { label: "Visuals", id: "visuals" },
    ]

    return (
        <main className="min-h-screen bg-white text-neutral-700 dark:bg-neutral-950 dark:text-neutral-200">
            <section className="mx-auto w-full max-w-7xl px-4 py-10 md:px-8 lg:px-10">
                <Link
                    href="/#projects"
                    className="sticky top-10 z-20 inline-flex w-fit items-center rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
                >
                    Back to projects
                </Link>

                <div className="mt-6 grid gap-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-12">
                    <aside className="lg:sticky lg:top-24 lg:h-fit">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500 dark:text-neutral-400">
                            On this page
                        </p>
                        <nav>
                            <ul className="space-y-1.5">
                                {sections.map((section) => (
                                    <li key={section.id}>
                                        <Link
                                            href={`#${section.id}`}
                                            className="inline-flex rounded-md px-2 py-1 text-sm text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
                                        >
                                            {section.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </aside>

                    <article className="max-w-3xl">
                        <header>
                            <p className="text-[11px] font-semibold tracking-widest text-blue-600 dark:text-blue-400">
                                {project.eyebrow}
                            </p>
                            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
                                {project.title}
                            </h1>
                            <p className="mt-3 text-base text-neutral-700 dark:text-neutral-300 md:text-lg">
                                {project.subtitle}
                            </p>
                            <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-950">
                                <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900">
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} preview`}
                                        fill
                                        priority
                                        sizes="(min-width: 1024px) 960px, 100vw"
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </header>

                        <section id="overview" className="mt-10 scroll-mt-28 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Overview</h2>
                            <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">{project.overview}</p>
                            <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">{project.impact}</p>
                            {project.liveUrl ? (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-5 inline-flex rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                                >
                                    Visit live project
                                </a>
                            ) : null}
                        </section>

                        <section id="highlights" className="mt-10 scroll-mt-28 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Highlights</h2>
                            <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                                {project.highlights.map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section id="tech-stack" className="mt-10 scroll-mt-28 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Tech Stack</h2>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.tech.map((item) => (
                                    <span
                                        key={item}
                                        className="inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {techSections.map((tech) => (
                            <section key={tech.id} id={tech.id} className="mt-10 scroll-mt-28 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                                <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">{tech.label}</h2>
                                <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                                    {tech.description}
                                </p>
                            </section>
                        ))}

                        <section id="architecture" className="mt-10 scroll-mt-28 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Architecture</h2>
                            <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                                {project.technicalSummary}
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                                {project.technicalDetails.map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section id="security" className="mt-10 scroll-mt-28 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Security</h2>
                            <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                                {project.securitySummary}
                            </p>
                        </section>

                        <section id="visuals" className="mt-10 scroll-mt-28 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Visuals</h2>
                            <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
                            </p>
                            <div className="mt-4 rounded-lg border border-neutral-200 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-900">
                                <div className="relative aspect-video overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-950">
                                    <Image
                                        src="/logos/picture.png"
                                        alt="Technical architecture diagram placeholder"
                                        fill
                                        sizes="(min-width: 768px) 720px, 100vw"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </section>
                    </article>
                </div>
            </section>
        </main>
    )
}
