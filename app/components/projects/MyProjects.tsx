'use client'

import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import Image from 'next/image'
import Link from 'next/link'

const FEATURED_PROJECTS = [
    {
        eyebrow: "FEATURED PROJECT",
        title: "QuoteCloud",
        subtitle:
            "Corporate Interactive’s QuoteCloud product — I contributed to core features across the quoting workflow: building/sending quotes, end-to-end document tracking, and eSignature approvals for smoother client sign-off.",

        href: "https://www.quote.cloud/",
        image: "/gifs/qc-demo-vid.gif",
    },
    {
        eyebrow: "CASE STUDY",
        title: "SplitNest",
        subtitle: "Expense sharing for households.",
        href: "#",
        image: "/gifs/Nest-vid.gif",
    },
    {
        eyebrow: "SIDE PROJECT",
        title: "Chatbot",
        subtitle:
            "Ollama + LangChain assistant embedded in QuoteCloud. Uses a local LLM (Ollama) and a LangChain RAG pipeline to answer app-specific questions and guide users through workflows.",
        href: "#",
        image: "/images/chatbot.png",
    },
];

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

        <section id="projects" className="w-full">
            <div className="mx-auto w-full px-4 pt-20 md:pt-0 md:px-16">
                {/* Header */}
                <div className="mb-10">
                    <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                        Projects
                    </h2>
                    <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-300">
                        Things I’ve built (and I’m still building) — clean UI, real-world
                        workflows, and code that’s meant to last.
                    </p>
                </div>

                {/* Featured cards (3 big images) */}
                <div className="grid gap-3 md:gap-8 lg:grid-cols-3">
                    {FEATURED_PROJECTS.map((p) => (
                        <Link
                            key={p.title}
                            href={p.href}
                            className="project-card
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
                                        className="object-cover object-left transition-transform duration-500"
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
    )
}

export default MyProjects
