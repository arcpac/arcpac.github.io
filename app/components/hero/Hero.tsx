'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import RippleGrid from './RippleGrid';
import GradientText from '@/components/GradientText';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaMediumM } from 'react-icons/fa';
import { IoIosDocument } from 'react-icons/io';
import CardSwap, { Card } from './CardSwap';


const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const getDocumentTheme = (): 'light' | 'dark' => {
    if (typeof document === 'undefined') {
        return 'light';
    }
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
};

const Hero = () => {
    const [colorMode, setColorMode] = useState<'light' | 'dark'>(getDocumentTheme)
    const heroCards = [
        {
            title: 'Auth & API Workflows',
            description:
                'JWT/session auth, protected routes, and robust API integrations across frontend and backend.',
            image: `${basePath}/images/api-sec.gif`,
            imageAlt: 'Authentication and API workflow preview',
        },
        {
            title: 'Full-Stack Product Builder',
            description:
                'I build features from UI to backend services with maintainable architecture and clean handoff.',
            image: `${basePath}/images/cardImage.png`,
        },
        {
            title: 'Security-Minded Engineering',
            description:
                'Reliable delivery, readable code, and practical solutions that scale with the product.',
            image: `${basePath}/images/candid.gif`,
        },
    ];

    useEffect(() => {
        if (typeof document === 'undefined') {
            return;
        }

        const observer = new MutationObserver(() => {
            setColorMode(getDocumentTheme());
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="home"
            data-theme={colorMode}
            className="relative flex w-full flex-col items-center justify-center gap-4 overflow-hidden px-4 pt-20 text-neutral-700 dark:text-neutral-200 sm:px-6 md:gap-6 md:pt-28"
        >
            <div className="relative z-10 w-full max-w-6xl dark:border-slate-800">
                <div className="grid min-h-[76vh] w-full grid-cols-1 lg:grid-cols-2">
                    <div className="flex flex-col border-b border-slate-300/80 dark:border-slate-800 lg:border-b-0 lg:border-r">
                        <div className="flex relative w-full flex-col items-center">
                            <div className="absolute inset-0 z-0">
                                <RippleGrid
                                    enableRainbow
                                    gridColor="#5227FF"
                                    rippleIntensity={0.05}
                                    gridSize={15}
                                    gridThickness={15}
                                    fadeDistance={1.1}
                                    vignetteStrength={1}
                                    glowIntensity={0.1}
                                    opacity={colorMode === 'light' ? 0.90 : 2}
                                    gridRotation={0}
                                    mouseInteraction
                                    mouseInteractionRadius={0.9}
                                />
                            </div>
                            <div className="text-start text-xs uppercase tracking-[0.3em] text-neutral-600 dark:text-neutral-400 sm:text-sm relative z-10">
                                Based in Australia
                            </div>
                            <div className="flex w-full flex-col gap-4 py-4 items-center sm:flex-row sm:items-center sm:justify-center sm:py-3 sm:px-4 relative z-10">
                                <div className="relative h-40 w-40 md:h-50 md:w-50 shrink-0 overflow-hidden rounded-full border-[5px] border-slate-400 dark:border-slate-500">
                                    <Image
                                        src={`${basePath}/images/me.jpg`}
                                        alt="Antonio Caballes"
                                        fill
                                        priority
                                        className="object-cover object-[center_10%] dark:brightness-95"
                                    />
                                </div>
                            </div>
                            <div className="flex w-full flex-col gap-4 py-4 items-center sm:flex-row sm:items-center sm:justify-center sm:py-3 sm:px-4 relative z-10">
                                <div className="text-2xl font-semibold text-neutral-900 dark:text-white sm:text-[38px]">
                                    <div className="flex items-baseline justify-center gap-2 whitespace-nowrap sm:justify-start">
                                        <span>Hi, I&apos;m</span>

                                        <GradientText
                                            colors={["#FF0000", "#FF7A00", "#FFD400", "#00C853", "#00B0FF", "#3D5AFE", "#B400FF"]}
                                            animationSpeed={8}
                                            showBorder={false}
                                            yoyo
                                        >
                                            Antonio Caballes
                                        </GradientText>
                                    </div>

                                    <div className="font-bold">Software Developer</div>
                                </div>

                            </div>
                        </div>
                        <div id="external-links" className="w-full px-4 pb-8 pt-6 text-neutral-700 dark:text-neutral-200 md:px-6">
                            <div className="max-w-2xl text-start text-sm leading-relaxed text-neutral-700 dark:text-neutral-200 md:text-lg">
                                Software Developer with 7 years of experience building and supporting web applications end-to-end from UI to backend services. I work primarily with NextJs and NodeJs, specialising in API integration and AuthN & AuthZ workflows (JWT/session, access control).
                            </div>

                            <div className="mt-6 flex flex-wrap items-center gap-3">
                                <Link
                                    href={`${basePath}/antonio-caballes-resume.pdf`}
                                    target="_blank"
                                    rel="noreferrer"
                                    download={true}
                                    aria-label="Download my resume"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-violet-500/60 bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_30px_-18px_rgba(139,92,246,0.9)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-20px_rgba(139,92,246,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 sm:w-auto"
                                >
                                    <span className="inline-flex h-5 w-5 items-center justify-center">
                                        <IoIosDocument className="text-base" />
                                    </span>
                                    Download Resume
                                </Link>
                                <Link
                                    href="/#projects"
                                    aria-label="Jump to Projects section"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 dark:border-slate-700 dark:bg-neutral-900/70 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-neutral-900 sm:w-auto"
                                >
                                    <span className="inline-flex h-5 w-5 items-center justify-center">
                                        <IoIosDocument className="text-base" />
                                    </span>
                                    View Projects
                                </Link>
                            </div>

                            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                <Link
                                    href={'https://antonraphaelcaballes.medium.com/'}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Visit my Medium profile"
                                    className="inline-flex items-center gap-1.5 underline decoration-slate-300 underline-offset-4 transition hover:text-violet-500 hover:decoration-violet-400 dark:decoration-slate-600 dark:hover:text-violet-300 dark:hover:decoration-violet-400"
                                >
                                    <FaMediumM className="text-base" />
                                    My Dev Articles
                                </Link>
                                <Link
                                    href={'https://www.linkedin.com/in/anton-caballes-a44a4a18b/'}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Visit my LinkedIn profile"
                                    className="inline-flex items-center gap-1.5 underline decoration-slate-300 underline-offset-4 transition hover:text-violet-500 hover:decoration-violet-400 dark:decoration-slate-600 dark:hover:text-violet-300 dark:hover:decoration-violet-400"
                                >
                                    <FaLinkedin className="text-base" />
                                    LinkedIn
                                </Link>
                                <Link
                                    href={'https://www.instagram.com/arcdevjs/'}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Visit my Instagram profile"
                                    className="inline-flex items-center gap-1.5 underline decoration-slate-300 underline-offset-4 transition hover:text-violet-500 hover:decoration-violet-400 dark:decoration-slate-600 dark:hover:text-violet-300 dark:hover:decoration-violet-400"
                                >
                                    <FaInstagram className="text-base" />
                                    ArcDevJs
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative min-h-[340px] lg:min-h-full" aria-label="Hero image placeholder">
                        <div className="mx-auto flex w-full max-w-md flex-col gap-4 px-2 py-6 lg:hidden">
                            {heroCards.map((card, idx) => (
                                <div
                                    key={card.title}
                                    className="overflow-hidden rounded-2xl border border-white/15 bg-[#16171d] p-5 text-slate-100 shadow-[0_24px_60px_-26px_rgba(15,23,42,0.95)]"
                                >
                                    <h3 className="text-xl font-semibold tracking-tight text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-300">{card.description}</p>
                                    {card.image && (
                                        <div className="relative mt-4 h-[220px] w-full overflow-hidden rounded-xl">
                                            <Image
                                                src={card.image}
                                                alt={card.imageAlt ?? `Hero card image ${idx + 1}`}
                                                fill
                                                className="object-cover opacity-80"
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="hidden h-full w-full lg:block">
                            <div style={{ height: '600px', position: 'relative' }}>
                                <CardSwap
                                    cardDistance={60}
                                    verticalDistance={70}
                                    delay={4500}
                                    pauseOnHover={false}
                                >
                                    {heroCards.map((card, idx) => (
                                        <Card
                                            key={card.title}
                                            className={idx === 0 ? 'translate-x-8 rounded-3xl overflow-hidden' : undefined}
                                        >
                                            <div data-card-header>
                                                <h3>{card.title}</h3>
                                                <p>{card.description}</p>
                                            </div>
                                            {card.image && (
                                                <div className="relative h-[260px] w-full">
                                                    <Image
                                                        src={card.image}
                                                        alt={card.imageAlt ?? `Hero card image ${idx + 1}`}
                                                        fill
                                                        className="object-cover opacity-80"
                                                    />
                                                </div>
                                            )}
                                        </Card>
                                    ))}
                                </CardSwap>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}

export default Hero
