"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import LogoLoop from "./LogoLoop";


const WORK_EXPERIENCES = [
  {
    company: "CorporateInteractive",
    role: "Software Developer",
    period: "Jun 2024 – Present",
    location: "Australia",
    icon: "/logos/qc.png",
    details: {
      project: "QuoteCloud - A quoting platform",
      website: "https://www.quote.cloud/",
      industry: "SaaS / Sales Enablement",
      overview: "Worked as a Software Developer contributing to the design, development, and ongoing improvement of QuoteCloud, a production-grade document editor and quoting platform used by customers to create proposals, quotes, and other sales documents",
      keyAchievements: [
        "Shipped a Spreadsheet widget/block that expanded document capabilities by enabling structured tables and calculations inside quotes and proposals.",
        "Integrated the Canva Editor into QuoteCloud, allowing users to create and embed designs directly within the quoting workflow.",
        "Delivered an text-editor paint, insert image, Canva editor, editable image in text-editor, spelling suggestion.",
        `Implemented secure View Mode access control for password-protected documents with end-to-end validation and middleware enforcement to prevent bypass and protect client data.`,
        `Created, maintained and expanded FAQ and User guide pages as knowledge source for QuoteCloud’s RAG systems. This will be implemented in the near future for chatbots.`,
        `Built mandatory e-signature for document acceptance, ensuring compliance by blocking acceptance until required signing is completed.`,
        `Day to day: Maintained WebDirector client websites, handling bug fixes and implementing change requests to keep sites up to date and stable.`,
        "Supported AI-enabled features, including a chatbot using a Retrieval-Augmented Generation (RAG) approach.",
      ],
    },
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
      { name: "JavaScript / jQuery", desc: "UI + interactions", icon: "/logos/js.png", href: "#" },
    ],
  },
  {
    company: "Yondu Inc.",
    role: "Systems Analyst",
    period: "Jun 2021 – Feb 2022",
    location: "Philippines",
    icon: "/logos/yondu.png",
    details: {
      project: "Internal system (Prepaid Load Distribution System (e-load / airtime top-up))",
      website: "https://www.yondu.com/",
      industry: "Telecommunications / B2B Digital Services. Subsidiary of Globe Telecom",
      overview: "Supported an internal telecom transaction platform used to send prepaid load to SIM cards for. Acted as the system SME—triaging incidents, analysing transaction failures, validating configuration changes, and coordinating updates to integrations and endpoints with stakeholders.",
      keyAchievements: [
        "Investigated and resolved transaction issues by analysing logs, system configuration, and integration changes (e.g., IP/endpoint updates causing failures).",
        "Worked closely with stakeholders to gather requirements, clarify changes, and update system endpoints to keep integrations stable.",
        "Performed functional testing/UAT support to validate fixes and ensure new changes didn’t break existing transaction flows.",
        "Provided implementation and production support for internal users and client-facing teams to keep operations running smoothly.",
      ],
    },
    stack: [],
  },
  {
    company: "Pragtechnologies",
    role: "Software Engineer",
    period: "Aug 2019 – Jun 2021",
    location: "Philippines",
    icon: "/logos/pragtech.png",
    details: {
      project: "SeeYouDoc — healthcare consultation & clinic workflow platform",
      website: "https://www.seeyoudoc.com/",
      industry: "SeeYouDoc Healthcare platform / Telehealth SaaS",
      overview:
        "Delivered end-to-end features for SeeYouDoc, a healthcare platform connecting patients and doctors for online consultations, appointment scheduling, and clinic workflow management. Worked across requirements analysis, solution design, implementation, testing, and debugging, collaborating with stakeholders to ship reliable product improvements.",
      keyAchievements: [
        `Implemented GraphQL APIs and integrated them with a React Native mobile app with the help of senior mobile developers, enabling the app to fetch exactly the data it needs in a single request, reducing over-fetching and improving performance on mobile networks.`,
        `Developed and maintained backend endpoints and business logic in Elixir/Phoenix to support React web pages in SeeYouDoc.`,
        `Delivered core features such as appointment creation, validate forms, and user creation.`,
        `Collaborating with cross-functional teams to define, design and ship new features.`,
      ],
    },
    stack: [
      {
        name: "Elixir + Phoenix",
        desc: "Backend services and APIs",
        icon: "/logos/elixir-phoenix.png",
        href: "#",
      },
      {
        name: "Elixir",
        desc: "Relational database",
        icon: "/logos/elixir.svg",
        href: "#",
      },
      {
        name: "PostgreSQL",
        desc: "Relational database",
        icon: "/logos/postgres.svg",
        href: "#",
      },
      {
        name: "React Native",
        desc: "",
        icon: "/logos/react-native.svg",
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
    details: {
      project: "Feed Monitoring System",
      website: "https://bounty.com.ph/",
      industry: "Food & Agriculture / Internal Operations",
      products: [
        "Feed Monitoring System - internal tool for Bounty Farms to monitor chicken and pig feeds",
      ],
      overview:
        `Workflow involved exporting data from interal system, importing it into the application (Feed monitoring system) and running validation and processing to generate dashboard summaries.
        The system also generate SSRS reports for offical reporting purposes.`,
      keyAchievements: [
        "Built an internal web app from scratch (CodeIgniter 3) with Excel upload, validation, processing, and dashboard summaries.",
        "Integrated SSRS reporting so users could generate formal reports with a one-click action from the dashboard.",
        "Worked closely with stakeholders to clarify workflows and requirements across farm/office users.",
        "Improved reliability through structured testing, bug triage, and sprint-based fixes.",
      ],
      highlights: [
        {
          item: "Built web portal to validate uploaded data and surface results via dashboard summaries",
          tools: "PHP, CodeIgniter 3, HTML/CSS, JavaScript/jQuery",
          outcome: "Deployed to 1 farm/office and handed over to a senior developer for long-term support",
        },
        {
          item: "Integrated SSRS (SQL Server Reporting Services) for formal reporting",
          tools: "SSRS / SQL Server Reporting Services",
          outcome: "Made reporting easier for farm/office users via one-click report generation",
        },
        {
          item: "Business analysis and workflow gathering with subsidiaries and staff",
          tools: "Requirements workshops, documentation (functional + non-functional)",
          outcome: "Reduced misunderstandings by confirming assumptions early and aligning on the real workflow",
        },
      ],
    },
    stack: [
      { name: "PHP", desc: "Backend development", icon: "/logos/php.svg", href: "#" },
      { name: "CodeIgniter", desc: "MVC framework", icon: "/logos/codeigniter.png", href: "#" },
      { name: "SQL Server / SSRS", desc: "Reporting", icon: "/logos/ssrs.png", href: "#" },
      { name: "JavaScript / jQuery", desc: "UI + interactions", icon: "/logos/js.png", href: "#" },
    ],
  },
  {
    company: "HDI System Technology",
    role: "Systems Implementation Specialist",
    period: "Jul 2018 – Feb 2019",
    location: "Philippines",
    icon: "/logos/picture.png",
    details: {
      project: "HRIS implementation (Workwise)",
      website: "",
      industry: "HR Technology / Enterprise Systems",
      overview:
        "Implemented HRIS solutions for client organizations by aligning system configuration with existing HR and manual payroll processes. Gathered requirements with HR stakeholders, mapped workflows, and produced functional and non-functional specifications to support implementation and adoption.",
      keyAchievements: [
        "Configured HRIS workflows based on client processes and validated outputs against manual payroll calculations.",
        "Facilitated requirements gathering with HR staff and documented functional/non-functional specifications.",
        "Supported rollout activities and coordinated with stakeholders to ensure smooth adoption.",
        "Worked with developers to validate databases and ensure data readiness during implementation.",
      ],
    },
    stack: [],
  },
  {
    company: "Optimind Technology Solutions",
    role: "SEO Link Builder",
    period: "Jul 2016 – Jun 2018",
    location: "Philippines",
    icon: "/logos/optimind.png",
    details: {
      project: "",
      website: "https://www.myoptimind.com/",
      industry: "Digital Marketing / SEO",
      overview:
        "Early career role focused on off-page SEO and link-building to improve search visibility, domain authority, and content discoverability. Supported SEO reporting and performance monitoring using analytics and search performance tools.",
      keyAchievements: [
        "Executed link-building and outreach activities to support organic search growth and improve content discoverability.",
        "Monitored search performance and indexing health using Google Search Console; flagged issues and opportunities for improvements.",
        "Tracked SEO performance metrics and traffic trends using Google Analytics to support reporting and prioritisation.",
        "Maintained consistent documentation of outreach targets, placements, and campaign outcomes.",
      ],
    },
    stack: [
      {
        name: "Google Analytics",
        desc: "Traffic & performance tracking",
        icon: "/logos/google-analytics.svg",
        href: "#",
      },
      {
        name: "Google Search Console",
        desc: "Search performance & indexing",
        icon: "/logos/google-search-console.svg",
        href: "#",
      },
    ],
  },
  {
    company: "Asia Brewery Incorporated",
    role: "Junior Systems Analyst",
    period: "Aug 2015 – Jun 2016",
    location: "Philippines",
    icon: "/logos/ab.png",
    details: {
      project: "SOAS -Sales Office Automation System",
      website: "https://asiabrewery.com/",
      industry: "FMCG Distribution",
      overview:
        "Supported SOAS (Sales Office Automation System), an internal sales monitoring platform used across multiple sales offices. Each sales office operated its own instance, which triggered end-of-day sales and summary uploads to head office. Provided operational and technical support to ensure end-to-end data flow—from salesperson handheld devices to on-premise syncing, registration in SOAS, and successful delivery to headquarters.",
      keyAchievements: [
        "Supported multiple sales office instances of SOAS and ensured daily end-to-end data delivery to head office.",
        "Troubleshot syncing and registration issues between sales handheld devices/apps and the sales office SOAS system.",
        "Validated data accuracy using SQL queries and basic database analysis; helped identify gaps before end-of-day submission.",
        "Coordinated with business users and technical teams to document issues, track resolutions, and support smooth operations.",
      ],
    },
    stack: [],
  }
];


const NewVersionWorkExperience = () => {
  const [activeTech, setActiveTech] = useState<
    { company: string; tech: string } | undefined
  >(undefined);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <section
      id="experience"
      className="flex w-full max-w-5xl flex-col items-center justify-center gap-4 p-2 pt-2 md:min-h-screen md:pt-20"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 md:gap-12">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white sm:text-4xl">
            Work Experience
          </h2>
          <p className="max-w-2xl text-base text-neutral-700 dark:text-neutral-300 sm:text-lg">
            A timeline of the products I've shipped and contributed. Experiences delivering features, collaborating with stakeholders, and keeping production systems stable.
          </p>
        </div>

        {WORK_EXPERIENCES.map((work_exp) => {
          const hasStack = Boolean(work_exp.stack?.length);
          const hasDetails = Boolean((work_exp as any).details);
          const logosForLoop =
            work_exp.stack?.map((tool) => ({
              title: tool.name,
              href: tool.href ?? "#",
              node: (
                <div className="relative h-[65px] w-[65px]">
                  <Image
                    src={tool.icon}
                    alt={`${tool.name} logo`}
                    fill
                    className=""
                    sizes="65px"
                  />
                </div>
              ),
            })) ?? [];
          const count = logosForLoop.length;

          const mobileHeight = Math.min(220, Math.max(120, 90 + count * 12));   // 120–220px
          const desktopHeight = Math.min(600, Math.max(260, 180 + count * 35));
          return (
            <div
              key={`${work_exp.company}-${work_exp.period}`}
              className={`relative grid gap-2 pb-2 md:gap-8 md:pb-10 ${hasStack ? "md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]" : ""
                }`}
            >
              <div className={`flex flex-col gap-6 ${hasStack ? "md:border-r md:pr-8" : ""}`}>
                <div className="flex flex-col gap-3">
                  {/* Header row */}
                  <div className="flex items-start gap-3">
                    {work_exp.icon ? (
                      <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white dark:bg-neutral-800">
                        <Image
                          src={work_exp.icon}
                          alt={`${work_exp.company} icon`}
                          fill
                          className="object-contain"
                          sizes="48px"
                        />
                      </div>
                    ) : null}

                    <div className="flex flex-col">
                      <div className="text-lg font-semibold text-neutral-900 dark:text-white">
                        {work_exp.company}
                      </div>
                      <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        {work_exp.role}
                      </div>
                    </div>
                  </div>

                  <div className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                    {work_exp.period} | {work_exp.location}
                  </div>

                  {/* Details format (new) */}
                  {hasDetails ? (
                    <div className="mt-2 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
                      <div className="grid gap-2 sm:grid-cols-[120px_1fr]">
                        <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                          Project
                        </div>
                        <div className="font-medium text-neutral-900 dark:text-white">
                          {(work_exp as any).details.project}
                        </div>
                      </div>

                      <div className="grid gap-2 sm:grid-cols-[120px_1fr]">
                        <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                          Industry
                        </div>
                        <div>{(work_exp as any).details.industry}</div>
                      </div>
                      <div className="grid gap-2 sm:grid-cols-[120px_1fr]">
                        <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                          Website
                        </div>
                        <div><a className="hover: text-blue-500" href={`${(work_exp as any).details.website}`}>{(work_exp as any).details.website} </a></div>
                      </div>

                      {work_exp.details.overview ? (
                        <div className="grid gap-2 sm:grid-cols-[120px_1fr]">
                          <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                            Overview
                          </div>
                          <p className="leading-relaxed">
                            {work_exp.details.overview}
                          </p>
                        </div>
                      ) : null}

                      <div className="grid gap-2 sm:grid-cols-[120px_1fr]">
                        <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                          Key achievements
                        </div>

                        <ul className="list-disc space-y-1 pl-5">
                          {(work_exp as any).details.keyAchievements?.map((item: string) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    // Fallback (old description string)
                    (() => {
                      const desc = (work_exp as any).description ?? "";
                      const lines = desc
                        .split("\n")
                        .map((line: string) => line.trim())
                        .filter(Boolean);

                      const bulletLines = lines.filter((line: string) => line.startsWith("- "));
                      const renderBullets = lines.length > 1 && bulletLines.length === lines.length;

                      if (renderBullets) {
                        return (
                          <ul className="list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300">
                            {bulletLines.map((line: string, index: number) => (
                              <li key={`${index}-${line}`}>{line.slice(2)}</li>
                            ))}
                          </ul>
                        );
                      }

                      return (
                        <p className="text-sm text-neutral-700 dark:text-neutral-300">
                          {desc}
                        </p>
                      );
                    })()
                  )}
                </div>
              </div>
              {hasStack &&
                <div
                  className="relative flex overflow-hidden h-[110px] sm:h-[120px] md:h-[520px] lg:h-[600px] justify"
                >
                  <LogoLoop
                    logos={logosForLoop}
                    fadeOutColor="var(--background)"
                    speed={50}
                    direction={isMobile ? "right" : "up"}
                    logoHeight={65}
                    gap={30}

                    hoverSpeed={0}
                  />
                </div>
              }
              {/* Stack icons
              {hasStack ? (
                <div className="grid content-start justify-center justify-items-center gap-2 md:gap-1 grid-cols-6 md:grid-cols-6">
                  {work_exp.stack!.map((tool) => (
                    <div
                      key={`${work_exp.company}-${tool.name}`}
                      className="relative h-8 w-8 overflow-hidden rounded-xl bg-white dark:bg-neutral-800 sm:h-10 sm:w-10 md:h-12 md:w-12"
                    >
                      <Image
                        src={tool.icon}
                        alt={`${tool.name} icon`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              ) : null} */}
            </div>
          );
        })}
      </div>
    </section>

  );
};

export default NewVersionWorkExperience;
