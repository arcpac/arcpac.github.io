'use client'

import Image from 'next/image';
import React, { useState } from 'react'

const WORK_EXPERIENCES = [
    {
        company: "CorporateInteractive",
        role: "Software Developer",
        period: "Jun 2024 – Present",
        location: "Australia",
        icon: "/logos/qc.png",
        description:
            `- Worked as a Software Developer contributing to the design, development, and ongoing improvement of QuoteCloud, a production-grade document editor and quoting platform used by customers to create proposals, quotes, and other sales documents.
            - Contributed to AI-enabled features within the application, including supporting the implementation of a chatbot using a Retrieval-Augmented Generation (RAG) approach.
            - Worked closely with senior developers and cross-functional stakeholders to optimise performance, address technical debt, and align implementations with best practices. Actively participated in code reviews, debugging, and refactoring.`,
        stack: [
            {
                name: "Next.js",
                desc: "App Router • SSR/SSG",
                icon: "/logos/nextjs.svg",
                href: "#",
            },
            {
                name: "React",
                desc: "Reusable UI components",
                icon: "/logos/react-2.svg",
                href: "#",
            },
            {
                name: "TypeScript",
                desc: "Type-safe codebase",
                icon: "/logos/ts-1.svg",
                href: "#",
            },

        ],
    },
    {
        company: "Yondu Inc.",
        role: "Systems Analyst",
        period: "Jun 2021 – Feb 2022",
        location: "Philippines",
        icon: "/logos/yondu.png",
        description:
            `- Understanding the products and services back-end configuration and integration
  - Assessing business requirements and ensuring creation of B2B Products
  - Providing the best solution and design based on the business requirement to ensure that the newly created product and services or any modification done on the existing product will not have an impact on business users
  - Support clients with software and implementation`,
    },
    {
        company: "Pragtechnologies",
        role: "Software Engineer",
        period: "Aug 2019 – Jun 2021",
        location: "Philippines",
        icon: "/logos/pragtech.png",
        description:
            `
        - Design, code, test and debugging software applications.
  - Collaborating with cross-functional teams to define, design and ship new features.
  - Write clean and maintainable code.
  - Analysing end-users’ requirements and tailoring software solutions to meet their needs.
  - Tech Stack used: Elixir, Phoenix Framework, GraphQL, Git version control, PostgreSQL, ReactJS, HTML, JavaScript
        `,
        stack: [
            {
                name: "Elixir + Phoenix",
                desc: "Backend services and APIs",
                icon: "/logos/elixir-phoenix.png",
                href: "#",
            },
            {
                name: "PostgreSQL",
                desc: "Relational database",
                icon: "/logos/postgres.svg",
                href: "#",
            },
            {
                name: "GraphQL",
                desc: "Flexible API layer for the React",
                icon: "/logos/graphql.svg",
                href: "#",
            },
        ],
    },
    {
        company: "Bounty Fresh Food Inc.",
        role: "Software Developer",
        period: "Feb 2019 – Jul 2019",
        location: "Philippines",
        icon: "/logos/bounty.png",
        description:
            `
  - System Design: Contribute to the design architecture of software systems
  - Work with cross-functional teams, including QA, product management and developers.
  - Bug fixing
  - Write and maintain high-quality, efficient code
  - Tech stack used: CodeIgniter (PHP), HTML, JavaScript, SVN, CSS, JQuery

        `,
        stack: [
            {
                name: "PHP",
                desc: "Server-side",
                icon: "/logos/php.svg",
                href: "#",
            },
            {
                name: "CodeIgniter",
                desc: "MVC framework for maintainable apps.",
                icon: "/logos/codeigniter.png",
                href: "#",
            },
            {
                name: "PostgreSQL",
                desc: "Database for internal records",
                icon: "/logos/postgres.svg",
                href: "#",
            },
            {
                name: ".Net",
                desc: "Database for internal records",
                icon: "/logos/NET_Core_Logo.png",
                href: "#",
            },
        ],
    },
    {
        company: "HDI System Technology",
        role: "Systems Implementation Specialist",
        period: "Jul 2018 – Feb 2019",
        location: "Philippines",
        icon: "/logos/picture.png",
        description: `
        - Supported system implementation activities, including setup, rollout support, and coordination to ensure smooth adoption for stakeholders.
        - Work closely with developers to validate databases during rollout.

        `,
    },
    {
        company: "Optimind Technology Solutions",
        role: "SEO Link Builder",
        period: "Jul 2016 – Jun 2018",
        location: "Philippines",
        icon: "/logos/optimind.png",
        description:
            "Early career role focused on SEO link-building and off-page optimisation tasks, supporting search visibility and content discoverability.",
    },
    {
        company: "Asia Brewery Incorporated",
        role: "Junior Systems Analyst",
        period: "Aug 2015 – Jun 2016",
        location: "Philippines",
        icon: "/logos/ab.png",
        description: `
         - Early career role assisting with system support, documentation, and coordination across business and technical teams.
         - Perform SQL queries and basic database analysis to validate data accuracy.

        `,
    },
];
const WorkExperience = () => {
    const [activeTech, setActiveTech] = useState<
        { company: string; tech: string } | undefined
    >(undefined)

    return (
        <section
            id="experience"
            className="flex w-full max-w-5xl flex-col items-center justify-center gap-4 p-2 pt-2 md:pt-20 md:min-h-screen"
        >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 md:gap-12 px-4">
                <div className="flex flex-col items-center gap-2 text-center">
                    <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl dark:text-white">
                        Work Experience
                    </h2>
                    <p className="max-w-2xl text-base text-neutral-700 sm:text-lg dark:text-neutral-300">
                        Placeholder company experiences following a clean timeline layout.
                    </p>
                </div>
                {WORK_EXPERIENCES.map((work_exp) => (
                    <div
                        key={`${work_exp.company}-${work_exp.period}`}
                        className={`relative grid gap-2 md:gap-8 ${work_exp.stack?.length && `md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]`} pb-2 md:pb-10`}
                    >
                        <div className={`flex flex-col gap-6 ${work_exp.stack?.length && `md:border-r`}`}>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3">
                                    {work_exp.icon ? (
                                        <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white">
                                            <Image
                                                src={work_exp.icon}
                                                alt={`${work_exp.company} icon`}
                                                fill
                                                className="object-contain"
                                                sizes="48px"
                                            />
                                        </div>
                                    ) : null}

                                    <div className="text-lg font-semibold text-neutral-900 dark:text-white">
                                        {work_exp.company}
                                    </div>
                                </div>

                                <div className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                                    {work_exp.period} | {work_exp.location}
                                </div>

                                {(() => {
                                    const lines = work_exp.description
                                        .split("\n")
                                        .map((line) => line.trim())
                                        .filter(Boolean);
                                    const bulletLines = lines.filter((line) =>
                                        line.startsWith("- "),
                                    );
                                    const renderBullets =
                                        lines.length > 1 && bulletLines.length === lines.length;

                                    if (renderBullets) {
                                        return (
                                            <ul className="list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300">
                                                {bulletLines.map((line, index) => (
                                                    <li key={`${index}-${line}`}>{line.slice(2)}</li>
                                                ))}
                                            </ul>
                                        );
                                    }

                                    return (
                                        <p className="text-sm text-neutral-700 dark:text-neutral-300">
                                            {work_exp.description}
                                        </p>
                                    );
                                })()}

                            </div>
                        </div>
                        {work_exp.stack?.length &&
                            <div className="grid grid-cols-6 md:grid-cols-6 content-start justify-center justify-items-center gap-2 md:gap-1 ">
                                {work_exp.stack?.map((tool) => (
                                    <div className="relative h-8 w-8 overflow-hidden rounded-xl bg-white dark:bg-neutral-800 sm:h-10 sm:w-10 md:h-12 md:w-12">
                                        <Image
                                            src={`${tool.icon}`}
                                            alt={`${tool.name} icon`}
                                            fill
                                            className="object-contain"
                                        // sizes="48px"
                                        />
                                    </div>
                                    // </div>
                                ))}
                            </div>
                        }

                    </div>
                ))}
            </div>
        </section>
    )
}

export default WorkExperience
