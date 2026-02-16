'use client'

import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import Image from 'next/image'
import Link from 'next/link'
import { FaMediumM } from 'react-icons/fa'

const MEDIUM_URL = 'https://antonraphaelcaballes.medium.com/'

const BLOG_POSTS = [
    {
        tag: 'Product',
        title: 'Designing a Fast, Accessible Portfolio in Next.js',
        subtitle: (
            <>
                Notes on page structure, performance wins, and the small accessibility choices
                that make a personal site feel polished.
            </>
        ),
        date: 'Aug 10, 2024',
        readTime: '6 min read',
        href: 'https://medium.com/@your-handle/your-post-slug',
        image: '/images/sample-app.png',
    },
    {
        tag: 'Engineering',
        title: 'Shipping QuoteCloud Features That Users Actually Use',
        subtitle: (
            <>
                A look at the workflows, validation, and UI details that helped quoting teams
                move faster and trust the system.
            </>
        ),
        date: 'Jul 28, 2024',
        readTime: '8 min read',
        href: 'https://medium.com/@your-handle/your-post-slug-2',
        image: '/images/chatbot.png',
    },
    {
        tag: 'AI Systems',
        title: 'From RAG to Reality: Shipping a LangChain Assistant',
        subtitle: (
            <>
                Turning prototypes into dependable product experiences with local LLMs,
                retrieval, and real UX constraints.
            </>
        ),
        date: 'Jun 14, 2024',
        readTime: '7 min read',
        href: 'https://medium.com/@your-handle/your-post-slug-3',
        image: '/images/NestApp-marketing.png',
    },
]

const BlogSection = () => {
    useEffect(() => {
        const sr = ScrollReveal()
        sr.reveal('.blog-card', {
            distance: '90px',
            duration: 500,
            easing: 'ease-out',
            interval: 120,
            origin: 'bottom',
            reset: true,
        })

        return () => sr.destroy()
    }, [])

    const featuredPost = BLOG_POSTS[0]
    const listPosts = BLOG_POSTS.slice(1)

    return (
        <section
            id="blogs"
            className="relative flex w-full flex-col items-center justify-center gap-4 overflow-hidden p-2 pt-4 md:min-h-screen md:pt-16"
        >
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -right-24 top-10 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-500/10" />
                <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl dark:bg-blue-500/10" />
            </div>

            <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-10 pt-6 md:gap-12 md:pb-16">
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
                            Blog
                        </p>
                        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                            Writing, shipped.
                        </h2>
                        <p className="mt-2 max-w-2xl text-neutral-600 dark:text-neutral-300">
                            Short deep-dives on product craft, engineering tradeoffs, and the systems behind the work.
                        </p>
                    </div>

                    <Link
                        href={MEDIUM_URL}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Visit my Medium profile"
                        className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200/60 dark:border-blue-500/30 dark:bg-neutral-900 dark:text-blue-300 dark:shadow-none dark:hover:shadow-[0_12px_28px_-20px_rgba(0,0,0,0.8)] dark:focus:ring-blue-500/30"
                    >
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-500/20 dark:text-blue-200">
                            <FaMediumM className="text-base" />
                        </span>
                        Follow on Medium
                    </Link>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    <Link
                        href={featuredPost.href}
                        target="_blank"
                        rel="noreferrer"
                        className="blog-card group relative overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-lg shadow-blue-100/40 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/60 focus:outline-none focus:ring-2 focus:ring-blue-200/60 dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-none dark:hover:shadow-[0_25px_40px_-30px_rgba(0,0,0,0.8)] dark:focus:ring-blue-500/30"
                    >
                        <div className="absolute inset-0">
                            <Image
                                src={featuredPost.image}
                                alt={`${featuredPost.title} cover`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(min-width: 1024px) 60vw, 100vw"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-900/30 to-transparent dark:from-black/80 dark:via-black/40" />
                        </div>

                        <div className="relative z-10 flex min-h-[360px] flex-col justify-end gap-4 p-6 md:min-h-[420px]">
                            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-blue-700 shadow-sm dark:bg-blue-500/20 dark:text-blue-200">
                                {featuredPost.tag}
                            </span>
                            <h3 className="text-2xl font-semibold text-white md:text-3xl">
                                {featuredPost.title}
                            </h3>
                            <p className="text-sm text-blue-100/80">{featuredPost.subtitle}</p>
                            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-blue-100/70">
                                <span>{featuredPost.date}</span>
                                <span>•</span>
                                <span>{featuredPost.readTime}</span>
                            </div>
                        </div>
                    </Link>

                    <div className="flex flex-col gap-6">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                                Latest Notes
                            </p>
                            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                                {listPosts.length} more
                            </span>
                        </div>

                        <div className="flex flex-col gap-4">
                            {listPosts.map((post, index) => (
                                <Link
                                    key={post.title}
                                    href={post.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="blog-card group flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200/60 dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-none dark:hover:shadow-[0_12px_28px_-20px_rgba(0,0,0,0.8)] dark:focus:ring-blue-500/30"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-sm font-semibold text-blue-700 dark:bg-blue-500/20 dark:text-blue-200">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                                                {post.tag}
                                            </p>
                                            <h4 className="mt-1 text-base font-semibold text-neutral-900 dark:text-white">
                                                {post.title}
                                            </h4>
                                        </div>
                                    </div>

                                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                                        {post.subtitle}
                                    </p>

                                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                                        <span>{post.date}</span>
                                        <span>{post.readTime}</span>
                                    </div>

                                    <div className="relative h-32 overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
                                        <Image
                                            src={post.image}
                                            alt={`${post.title} cover`}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(min-width: 1024px) 30vw, 100vw"
                                        />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogSection
