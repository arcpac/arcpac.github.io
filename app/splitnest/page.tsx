'use client'
import Image from "next/image"
import Link from "next/link"
import Carousel from "./Carousel"

const NAV_SECTIONS = [
    { label: "Overview", id: "overview" },
    { label: "Highlights", id: "highlights" },
    { label: "Tech Stack", id: "tech-stack" },
    { label: "TypeScript", id: "typescript" },
    { label: "Supabase (PostgreSQL)", id: "supabase-postgresql" },
    { label: "GraphQL", id: "graphql" },
    { label: "Architecture", id: "architecture" },
    { label: "Visuals", id: "visuals" },
]

export default function SplitNestPage() {

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
                                {NAV_SECTIONS.map((section) => (
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
                                FEATURED PROJECT
                            </p>
                            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
                                SplitNest (Mobile + Web)
                            </h1>
                            <p className="mt-3 text-base text-neutral-700 dark:text-neutral-300 md:text-lg">
                                A full-stack expense-sharing platform with a React Native app and a unified backend
                                powered by Supabase (Postgres) and a GraphQL data layer.
                            </p>
                            <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-950">
                                <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900">
                                    <Carousel
                                        autoplay={true}
                                        autoplayDelay={3000}
                                        pauseOnHover={false}
                                        loop={false}
                                        round={false}
                                    />

                                </div>
                            </div>
                        </header>

                        <section id="overview" className="mt-10 scroll-mt-28 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Overview</h2>
                            <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                                SplitNest is a shared-backend expense sharing platform for mobile and web tracking groups, expenses, and shares,
                                computing balances in real time, and supporting streamlined repayments with consistent business rules across clients.
                            </p>
                        </section>

                        <section id="highlights" className="mt-10 scroll-mt-28 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Highlights</h2>
                            <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                                <li className="flex gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                                    <span>
                                        Built the mobile client with React Native + Expo Router, focusing on predictable
                                        navigation and reusable screen patterns.
                                    </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                                    <span>
                                        Implemented a shared data contract using GraphQL to query exactly what each
                                        screen needs (reducing over-fetching and brittle REST shape changes).
                                    </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                                    <span>
                                        Modeled expenses, members, shares, and repayments on Postgres with explicit
                                        relations for correctness, auditability, and maintainable queries.
                                    </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                                    <span>
                                        Designed household/group-scoped authorization so data access is isolated per
                                        membership and enforced consistently across entry points.
                                    </span>
                                </li>
                            </ul>
                        </section>

                        <section id="tech-stack" className="mt-10 scroll-mt-28 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Tech Stack</h2>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                                    React Native
                                </span>
                                <span className="inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                                    Next.js
                                </span>
                                <span className="inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                                    TypeScript
                                </span>
                                <span className="inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                                    Supabase (PostgreSQL)
                                </span>
                                <span className="inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                                    GraphQL
                                </span>
                            </div>
                        </section>

                        <section id="supabase-postgresql" className="mt-10 scroll-mt-28 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                                Supabase (PostgreSQL)
                            </h2>
                            <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                                Supabase Postgres helps SplitNest for integrity
                                and Row Level Security (RLS) to ensure users can only read and write data within groups they belong to.
                            </p>
                            <div className="mt-4 rounded-lg border border-neutral-200 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-900">
                                <div className="relative aspect-video overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-950">
                                    <Image
                                        src="/splitnest/otp.png"
                                        alt="Technical architecture diagram placeholder"
                                        fill
                                        sizes="(min-width: 768px) 720px, 100vw"
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </section>

                        <section id="graphql" className="mt-10 scroll-mt-28 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">GraphQL</h2>
                            <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                                GraphQL centralises data access behind a single API surface. This minimises payloads and keep mobile/web models consistent.
                            </p>
                        </section>

                        <section id="architecture" className="mt-10 scroll-mt-28 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Architecture</h2>
                            <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                                SplitNest uses Supabase Postgres as the system of record, with a GraphQL layer providing
                                a typed, composable API surface for both mobile and web. The client apps consume GraphQL
                                queries/mutations for expense creation, share calculation, and repayments, while domain
                                rules stay centralized to avoid logic drift across platforms.
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                                <li className="flex gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                                    <span>
                                        GraphQL enables screen-driven data fetching: each view requests only required
                                        fields, improving performance and reducing accidental breaking changes during
                                        iteration.
                                    </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                                    <span>
                                        Domain logic computes split amounts, balances, and settlement state using
                                        consistent server-side rules to keep mobile and web results identical.
                                    </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                                    <span>
                                        Supabase/Postgres relational modeling (memberships, shares, repayments) keeps
                                        integrity strong and queries safe especially as groups and history grow.
                                    </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                                    <span>
                                        Trade-offs were considered: GraphQL adds operational complexity
                                        (schema/versioning, caching strategy, resolver discipline) compared to simpler
                                        REST endpoints.
                                    </span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                                    <span>
                                        Supabase accelerates development with managed Postgres and tooling, but
                                        introduces vendor/platform constraints (service limits, migrations discipline,
                                        and environment management).
                                    </span>
                                </li>
                            </ul>
                        </section>

                        <section id="security" className="mt-10 scroll-mt-28 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Security</h2>
                            <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                                Security is enforced through authenticated sessions/JWT, row-level authorization
                                patterns (membership-scoped access), and server-side validation on every mutation. The
                                design prevents cross-household data leakage by ensuring reads/writes are always
                                constrained by the caller’s membership and group context.
                            </p>
                        </section>

                        <section id="visuals" className="mt-10 scroll-mt-28 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Visuals</h2>
                            <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
                                UI walkthroughs and architecture visuals will be added as the full case study ships.
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
