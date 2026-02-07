'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import RippleGrid from './RippleGrid';
import GradientText from '@/components/GradientText';
import Folder from './Folder';


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
                        I’m a software developer with 7 years of experience building modern
                        web apps using JavaScript, React, and Next.js. I care a lot about
                        clean code, testing, and building things that are ready for
                        real-world use. I’ve worked across both frontend and backend, and
                        I’m comfortable picking up new tools and technologies along the way.
                    </div>
                    <div className='flex flex-col items-center justify-center gap-3 pt-4 sm:flex-row sm:gap-9'>
                        <div>
                            {/* todo: fix color  */}
                            <Folder size={1} className="custom-folder"
                                color="#e5e5e5"
                            />
                        </div>
                    </div>

                    {/* <div className="flex justify-center gap-6 pb-2">
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
                    </div> */}
                </div>

                <section
                    className="min-h-[60vh] hidden md:block w-full bg-no-repeat bg-[length:130%] bg-[position:center_30%] bg-[image:var(--hero-bg)] [--hero-bg:url('/backgrounds/hero-bg-1.png')] dark:[--hero-bg:url('/backgrounds/hero-bg-dark.png')]"
                />
            </div>
        </section >

    )
}

export default Hero
