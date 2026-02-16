'use client'

import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import Image from 'next/image'
import Link from 'next/link'

const FEATURED_PROJECTS = [
    {
        eyebrow: "FEATURED PROJECT",
        title: "QuoteCloud",
        subtitle: (
            <>
                <b>Corporate Interactive’s QuoteCloud</b>. I contributed to core features across the
                quoting workflow building and sending quotes, end-to-end document tracking, and
                eSignature approvals for smoother client sign-off. I also delivered embedded
                spreadsheet widgets, Canva image editing integration, and password-protected
                documents with confirmation prompts, plus eSignature validation to ensure all
                required signatures are completed before acceptance.
            </>
        ),
        href: "https://www.quote.cloud/",
        image: "/gifs/qc-demo-vid.gif",
    },
    {
        slug: "splitnest",
        eyebrow: "FEATURED PROJECT",
        title: "SplitNest",
        subtitle: (<>
            A modern household expense-sharing app for tracking bills, balances, and who owes who.
        </>),
        href: "#",
        image: "/gifs/Nest-vid.gif",
    },
    {
        slug: "splitnest",
        eyebrow: "FEATURED PROJECT",
        title: "SplitNest (Mobile + Web)",
        subtitle: (
            <>
                Expense-sharing app for households. Mobile app built with React Native (Expo Router),
                backed by a Next.js API with token-based auth and a shared Postgres/Drizzle data layer.
            </>
        ),
        href: "#",
        image: "/images/NestApp-marketing.png",
        tech: ["React Native", "Expo Router", "Next.js", "Postgres", "Drizzle", "JWT Auth"],
    },
    {
        slug: "under-construction",
        eyebrow: "CAPSTONE PROJECT",
        title: "HVAC Holiday Scheduler",
        subtitle: (
            <>
                Automated holiday scheduling concept for smart-building HVAC. Uses Australian public-holiday data,
                a cloud NoSQL store, and an IoT-style workflow (Node-RED + MQTT) to sync schedules and trigger device states.
            </>
        ),
        href: "#",
        image: "/images/airconnect.png",
        tech: ["React", "Node.js", "Express", "MongoDB", "Node-RED", "MQTT (Mosquitto)"],
    },
    {
        slug: "under-construction",
        eyebrow: "SIDE PROJECT",
        title: "Chatbot",
        subtitle:
            (
                <>
                    <b>
                        Ollama
                    </b>
                    + <b>LangChain</b> assistant embedded in QuoteCloud. Uses a local LLM (Ollama) and a LangChain RAG pipeline to answer app-specific questions and guide users through workflows.
                </>
            ),
        href: "#",
        image: "/images/chatbot.png",
    },
    {
        slug: "seeyoudoc",
        eyebrow: "FEATURED PROJECT",
        title: "SeeYouDoc",
        subtitle: (
            <>
                A healthcare platform built at <b>Pragtechnologies</b>, where I worked as a
                <b>Software Engineer</b> focused on backend development and
                <b>GraphQL integration</b> to support mobile app features and data flows.
                I built and maintained API endpoints, handled bug fixes across services,
                and occasionally contributed to UI updates to ensure a smooth end-to-end
                experience.
            </>
        ),
        href: "https://www.seeyoudoc.com/",
        image: "/images/seeyoudoc.png", // replace with your screenshot/logo
        tech: ["Backend", "GraphQL", "API Integration", "Bug Fixing", "React (occasional)"],
    },
    {
        slug: "under-construction",
        eyebrow: "SIDE PROJECT",
        title: "Booking Web API",
        subtitle: (
            <>
                A .NET Web API for managing bookings with real-world business rules —
                prevents double-booking, supports pagination/filtering/sorting, and includes
                a booking status lifecycle (Pending → Confirmed → Cancelled). Built with EF
                Core + SQL Server, documented via Swagger, with optional email/background
                job hooks for notifications.
            </>
        ),
        href: "#", // replace with GitHub/Live link
        image: "/images/ledgerrlift-api.png", // replace with your screenshot/gif
        tech: [".NET 10", "ASP.NET Core", "EF Core", "SQL Server", "Swagger"],
    },
];

const PROJECT_PAGE_SLUGS = new Set(["quotecloud", "splitnest", "splitnest-mobile-web"])

const MyProjects = () => {

    useEffect(() => {
        const sr = ScrollReveal()
        sr.reveal('.project-card', {
            distance: '90px',
            duration: 500,
            easing: 'ease-out',
            interval: 120,
            origin: 'bottom',
            reset: true,
        })

        return () => sr.destroy()
    }, [])


    return (
        <section id="projects" className="flex w-full max-w-10xl flex-col items-center justify-center gap-4 p-2 pt-2 md:min-h-screen md:pt-20">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 md:gap-12">
                {/* Header */}
                <div className="mb-10">
                    <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                        Projects
                    </h2>
                    <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-300">
                        Things I&apos;ve built (and I&apos;m still building). I&apos;m open to developers who want to contribute and share knowledge.
                    </p>
                </div>


                {/* Featured cards (3 big images) */}
                <div className="grid gap-3 md:gap-8 lg:grid-cols-3">
                    {FEATURED_PROJECTS.map((p) => {
                        const hasProjectPage = p?.slug
                        const isExternal = !hasProjectPage && p.href.startsWith("http")
                        const href = hasProjectPage ? `/${p.slug}` : isExternal ? p.href : "#projects"

                        return (
                            <Link
                                key={p.title}
                                href={href}
                                target={isExternal ? "_blank" : undefined}
                                rel={isExternal ? "noreferrer" : undefined}
                                className="project-card group rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-900/20 dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-none dark:hover:shadow-[0_12px_28px_-20px_rgba(0,0,0,0.8)] dark:focus:ring-neutral-200/20"
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

                                    <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                                        {hasProjectPage ? "View project page" : isExternal ? "Visit live site" : "Project page coming soon"}
                                    </div>
                                </div>

                                <div className="px-5 pb-5">
                                    <div className="relative aspect-16/10 overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
                                        <Image
                                            src={p.image}
                                            alt={`${p.title} screenshot`}
                                            fill
                                            className="object-contain object-left transition-transform duration-500"
                                            sizes="(min-width: 1024px) 33vw, 100vw"
                                            priority
                                        />
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default MyProjects
