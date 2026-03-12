'use client'

import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import Image from 'next/image'
import Link from 'next/link'
import GradientText from '@/components/GradientText'

const FEATURED_PROJECTS = [
    {
        eyebrow: "FEATURED PROJECT",
        title: "QuoteCloud",
        subtitle: (
            <>
                <b>Corporate Interactive’s QuoteCloud</b>. Delivered core features from the ground up.
                Tech stack: NextJs, React + Typescript, API (NextJs) integration for mobile app
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
        image: "/images/ReactNative+NextJs.gif",
        tech: ["React Native", "Expo Router", "Next.js", "Postgres", "Drizzle", "JWT Auth"],
    },
    {
        eyebrow: "CAPSTONE PROJECT",
        title: "HVAC Holiday Scheduler",
        subtitle: (
            <>
                <p>
                    <strong>Tech stack:</strong> MongoDB, React, Node.js, Express, MySQL
                    (edge/local device), and Node-RED
                </p>

                <ul>
                    <li>
                        Designed and developed an automated holiday scheduling system to
                        optimise HVAC energy usage using Australian public holiday data.
                    </li>
                    <li>
                        Built as an integrated web application with MERN architecture and
                        edge-device connectivity.
                    </li>
                </ul>
            </>
        ),
        href: "https://gitlab.com/arcpac/holiday-auto-scheduler",
        image: "/images/airconnect.png",
        tech: ["React", "Node.js", "Express", "MongoDB", "Node-RED", "MQTT (Mosquitto)"],
    },
    {
        href: "https://github.com/arcpac/multitenant-nodejs-api",
        eyebrow: "SIDE PROJECT",
        title: "TeamBoard Production-Grade AuthN/AuthZ API for Multi-Tenant Workspaces",
        subtitle:
            (
                <>
                    TeamBoard is an API-first PERN stack project built to demonstrate security and best practices in AuthZ+ AuthN.
                    It implements secure
                    <GradientText
                        className="!mx-0 !inline-flex !max-w-none !rounded-none !bg-transparent !shadow-none !align-baseline !items-baseline !cursor-default"
                        colors={["#fad14f", "#827a89"]}
                        animationSpeed={2}
                        showBorder={false}
                        direction='vertical'
                        yoyo
                    >JWT access tokens, rotating refresh-token sessions with replay/race protection, role-based org membership.</GradientText>
                </>
            ),
        image: "/images/authnauthz.gif",
    },
    {

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
        <section id="projects" className="flex w-full max-w-10xl flex-col items-center justify-center gap-4 px-3 pt-4 pb-6 sm:px-4 md:min-h-screen md:pt-20">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 md:gap-12">
                {/* Header */}
                <div className="mb-6 md:mb-10">
                    <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
                        Projects
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm text-neutral-600 sm:text-base dark:text-neutral-300">
                        Things I&apos;ve built (and I&apos;m still building). I&apos;m open to developers who want to contribute and share knowledge.
                    </p>
                </div>


                {/* Featured cards (3 big images) */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-0">
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
                                className="project-card group  border-[0.1px] border-neutral-700 bg-[#16171d] shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-900/20 rounded-none dark:shadow-none dark:hover:shadow-[0_12px_28px_-20px_rgba(0,0,0,0.8)] dark:focus:ring-neutral-200/20"
                            >
                                <div className="p-4 sm:p-5">
                                    <div className="text-[10px] font-semibold tracking-widest text-blue-600 sm:text-[11px] dark:text-blue-400">
                                        {p.eyebrow}
                                    </div>

                                    <div className="mt-2 text-[20px] font-semibold leading-tight text-[#ffffff] sm:text-[24px]">
                                        {p.title}
                                    </div>

                                    <div className="mt-1 text-[15px] leading-relaxed text-[#827a89] sm:text-[18px]">
                                        {p.subtitle}
                                    </div>

                                    <div className="mt-3 text-[10px] font-semibold uppercase tracking-wide text-neutral-500 sm:text-xs dark:text-neutral-400">
                                        {hasProjectPage ? "View project page" : isExternal ? "Visit live site" : "Project page coming soon"}
                                    </div>
                                </div>

                                <div>
                                    <div className="relative aspect-[4/3] overflow-hidden sm:aspect-16/10">
                                        <Image
                                            src={p.image}
                                            alt={`${p.title} screenshot`}
                                            fill
                                            className="object-contain object-[left_bottom] transition-transform duration-500"
                                            sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
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
