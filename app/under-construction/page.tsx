import Link from "next/link"

export default function UnderConstructionPage() {
    return (
        <main className="min-h-screen bg-white text-neutral-700 dark:bg-neutral-950 dark:text-neutral-200">
            <section className="mx-auto w-full max-w-4xl px-4 py-12 md:px-8 lg:px-10">
                <Link
                    href="/#projects"
                    className="sticky top-10 z-20 inline-flex w-fit items-center rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
                >
                    Back to projects
                </Link>

                <div className="mt-8 rounded-3xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/40 md:p-10">
                    <p className="text-[11px] font-semibold tracking-[0.35em] text-neutral-500 dark:text-neutral-400">
                        UNDER CONSTRUCTION
                    </p>
                    <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
                        Still working on this page or case study in progress.
                    </h1>
                    <p className="mt-4 text-base text-neutral-700 dark:text-neutral-300 md:text-lg">
                        I&apos;m currently planning the technical study and the detailed walkthrough for this project.
                        The full write-up will cover architecture decisions, data modeling, performance trade-offs, and
                        product iteration notes.
                    </p>

                    {/* <div className="mt-8 grid gap-4 md:grid-cols-2">
                        <div className="rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950">
                            <p className="text-sm font-semibold text-neutral-900 dark:text-white">In scope</p>
                            <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                                <li className="flex items-start gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                                    <span>System architecture and API contract</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                                    <span>Database schema, RLS policies, and data integrity</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                                    <span>Mobile + web client patterns</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                                    <span>Performance trade-offs and testing notes</span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950">
                            <p className="text-sm font-semibold text-neutral-900 dark:text-white">Coming next</p>
                            <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                                <li className="flex items-start gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                                    <span>End-to-end flows and UI walkthroughs</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                                    <span>Security overview and auth edge cases</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                                    <span>Design decisions and iteration snapshots</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                                    <span>Deployment notes and future roadmap</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6 rounded-2xl border border-dashed border-neutral-300 bg-white/70 p-4 dark:border-neutral-700 dark:bg-neutral-950/60">
                        <div className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                            <div>
                                <p className="text-sm font-semibold text-neutral-900 dark:text-white">Current focus</p>
                                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                                    Mapping the technical study: schema diagrams, GraphQL queries, and the reasoning
                                    behind key architectural trade-offs.
                                </p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </main>
    )
}
