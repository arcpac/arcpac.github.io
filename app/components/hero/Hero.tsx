'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import RippleGrid from './RippleGrid';
import GradientText from '@/components/GradientText';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaMediumM } from 'react-icons/fa';
import { IoIosDocument } from 'react-icons/io';


const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const Hero = () => {
    const [colorMode, setColorMode] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        if (typeof document === 'undefined') {
            return;
        }

        const getMode = () =>
            document.documentElement.classList.contains('dark') ? 'dark' : 'light';

        setColorMode(getMode());

        const observer = new MutationObserver(() => {
            setColorMode(getMode());
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => observer.disconnect();
    }, []);

    console.log('colorMode', colorMode)
    return (
        <section
            id="home"
            data-theme={colorMode}
            className="relative flex w-full max-w-screen flex-col items-center justify-center gap-4 md:gap-6 px-4 pt-20 md:pt-28 min-h-screen text-neutral-700 dark:text-neutral-200 sm:p-2 overflow-hidden"
        >

            <div className="relative z-10 max-w-4xl">
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
                            opacity={colorMode === 'light' ? 0.50 : 0.90}
                            gridRotation={0}
                            mouseInteraction
                            mouseInteractionRadius={0.9}
                        />
                    </div>
                    <div className="text-center text-xs uppercase tracking-[0.3em] text-neutral-600 dark:text-neutral-400 sm:text-sm relative z-10">
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
                <div className="border-t border-slate-400 py-6 text-center text-neutral-700 dark:border-slate-700 dark:text-neutral-200">
                    <div className="text-base text-neutral-700 dark:text-neutral-200 text-sm md:text-lg">
                        Software Developer with 7 years of experience building and supporting web applications end-to-end from UI to backend services. I work primarily with JavaScript/TypeScript, React, and Node.js, specialising in API integration and authentication workflows (JWT/session, access control).
                    </div>

                    <div className='flex flex-col items-center justify-center gap-2 pt-4 sm:flex-row sm:gap-3'>
                        <Link
                            href={'https://antonraphaelcaballes.medium.com/'}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Visit my Medium profile"
                            className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200/60 dark:border-blue-500/30 dark:bg-neutral-900 dark:text-blue-300 dark:shadow-none dark:hover:shadow-[0_12px_28px_-20px_rgba(0,0,0,0.8)] dark:focus:ring-blue-500/30"
                        >
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-500/20 dark:text-blue-200">
                                <FaMediumM className="text-base" />
                            </span>
                            My dev articles
                        </Link>
                        <Link
                            href={'https://www.linkedin.com/in/anton-caballes-a44a4a18b/'}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Visit my Medium profile"
                            className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200/60 dark:border-blue-500/30 dark:bg-neutral-900 dark:text-blue-300 dark:shadow-none dark:hover:shadow-[0_12px_28px_-20px_rgba(0,0,0,0.8)] dark:focus:ring-blue-500/30"
                        >
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-500/20 dark:text-blue-200">
                                <FaLinkedin className="text-base" />
                            </span>
                            LinkedIn
                        </Link>
                        <Link
                            href={'https://www.instagram.com/arcdevjs/'}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Visit my Medium profile"
                            className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200/60 dark:border-blue-500/30 dark:bg-neutral-900 dark:text-blue-300 dark:shadow-none dark:hover:shadow-[0_12px_28px_-20px_rgba(0,0,0,0.8)] dark:focus:ring-blue-500/30"
                        >
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-500/20 dark:text-blue-200">
                                <FaInstagram className="text-base" />
                            </span>
                            Instagram
                        </Link>
                        <Link
                            href={`${basePath}/antonio-caballes-resume.pdf`}
                            target="_blank"
                            rel="noreferrer"
                            download={true}
                            aria-label="Visit my Medium profile"
                            className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200/60 dark:border-blue-500/30 dark:bg-neutral-900 dark:text-blue-300 dark:shadow-none dark:hover:shadow-[0_12px_28px_-20px_rgba(0,0,0,0.8)] dark:focus:ring-blue-500/30"
                        >
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-500/20 dark:text-blue-200">
                                <IoIosDocument className="text-base" />
                            </span>
                            Resume
                        </Link>
                        <Link
                            href="/#projects"
                            aria-label="Jump to Projects section"
                            className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200/60 dark:border-blue-500/30 dark:bg-neutral-900 dark:text-blue-300 dark:shadow-none dark:hover:shadow-[0_12px_28px_-20px_rgba(0,0,0,0.8)] dark:focus:ring-blue-500/30"
                        >
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-500/20 dark:text-blue-200">
                                <IoIosDocument className="text-base" />
                            </span>
                            My Projects
                        </Link>
                    </div>
                </div>

                {/* <section
                    className="min-h-[60vh] hidden md:block w-full bg-no-repeat bg-[length:130%] bg-[position:center_30%] bg-[image:var(--hero-bg)] [--hero-bg:url('/backgrounds/me.gif')] "
                /> */}
            </div>
        </section >

    )
}

export default Hero
