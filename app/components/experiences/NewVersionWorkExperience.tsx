"use client";

import Image from "next/image";
import React, { useState } from "react";

const WORK_EXPERIENCES = [
  {
    company: "CorporateInteractive",
    role: "Software Developer",
    period: "Jun 2024 – Present",
    location: "Australia",
    icon: "/logos/qc.png",
    details: {
      project: "QuoteCloud — document editor & quoting platform",
      industry: "SaaS / Sales Enablement",
      keyAchievements: [
        "Shipped and maintained core editor features used to build proposals, quotes, and sales documents in production.",
        "Supported AI-enabled features, including a chatbot using a Retrieval-Augmented Generation (RAG) approach.",
        "Collaborated with senior engineers and stakeholders to reduce technical debt through debugging, refactoring, and performance improvements.",
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
    ],
  },
];
const NewVersionWorkExperience = () => {
  const [activeTech, setActiveTech] = useState<
    { company: string; tech: string } | undefined
  >(undefined);

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
            Placeholder company experiences following a clean timeline layout.
          </p>
        </div>

        {WORK_EXPERIENCES.map((work_exp) => {
          const hasStack = Boolean(work_exp.stack?.length);
          const hasDetails = Boolean((work_exp as any).details);

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

              {/* Stack icons */}
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
              ) : null}
            </div>
          );
        })}
      </div>
    </section>

  );
};

export default NewVersionWorkExperience;
