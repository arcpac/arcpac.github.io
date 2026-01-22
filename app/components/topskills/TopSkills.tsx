"use client"
import Image from 'next/image';
import Link from 'next/link'
import { useState } from 'react';

type Tool = {
    name: string;
    desc: string;
    icon: string;
    href?: string;
    category: "frontend" | "backend" | "other";
};
type ToolIconProps = {
    name: string;
    src: string;
    className?: string;
};
const TOOLS: Tool[] = [
    {
        name: "Next.js",
        desc: "App Router • SSR/SSG",
        icon: "/logos/nextjs.svg",
        href: "#",
        category: "frontend",
    },
    {
        name: "React",
        desc: "Component-driven UI",
        icon: "/logos/react-2.svg",
        href: "#",
        category: "frontend",
    },
    {
        name: "JavaScript",
        desc: "Modern ES6+",
        icon: "/logos/js.png",
        href: "#",
        category: "frontend",
    },
    {
        name: "TypeScript",
        desc: "Type-safe JavaScript",
        icon: "/logos/ts-1.svg",
        href: "#",
        category: "frontend",
    },
    {
        name: "Tailwind CSS",
        desc: "Utility-first styling",
        icon: "/logos/tailwind.svg",
        href: "#",
        category: "frontend",
    },
    {
        name: "PostgreSQL",
        desc: "SQL relational database",
        icon: "/logos/postgres.svg",
        href: "#",
        category: "backend",
    },
    {
        name: "Elixir + Phoenix",
        desc: "Backend APIs • OTP",
        icon: "/logos/elixir-phoenix.png",
        href: "#",
        category: "backend",
    },
    {
        name: ".NET Core",
        desc: "Server-side web apps",
        icon: "/logos/NET_Core_Logo.png",
        href: "#",
        category: "backend",
    },
    {
        name: "LLM Integration",
        desc: "Ollama • Prompting • Safety",
        icon: "/logos/ai.svg",
        href: "#",
        category: "other",
    },
    {
        name: "RAG Systems",
        desc: "Embeddings • Vector search • Grounding",
        icon: "/logos/rag.svg",
        href: "#",
        category: "other",
    },
    {
        name: "LangChain",
        desc: "Loaders • Chains • Tools",
        icon: "/logos/langchain.png",
        href: "#",
        category: "other",
    },
    {
        name: "GraphQL",
        desc: "Server-side web apps",
        icon: "/logos/graphql.svg",
        href: "#",
        category: "other",
    },
    {
        name: "PHP",
        desc: "Server-side web apps",
        icon: "/logos/php.svg",
        href: "#",
        category: "backend",
    },
];
const CATEGORIES = [
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "other", label: "Other tools & AI integrations" },
] as const;

export function getInitials(name: string) {
    const clean = name.replace(/[^a-zA-Z0-9\s.+#]/g, "").trim();

    // Special cases (optional, tweak as you like)
    if (clean.toLowerCase().includes("next")) return "N";
    if (clean.toLowerCase().includes("react")) return "R";
    if (clean.toLowerCase().includes("typescript")) return "TS";
    if (clean.toLowerCase().includes("javascript")) return "JS";
    if (clean.toLowerCase().includes("tailwind")) return "TW";
    if (clean.toLowerCase().includes("postgres")) return "PG";
    if (clean.toLowerCase().includes("graphql")) return "GQL";
    if (clean.toLowerCase().includes(".net")) return ".NET";

    const parts = clean.split(/\s+/).filter(Boolean);

    // Take first char of first 2 words (e.g. "Tailwind CSS" -> "TC")
    const initials = parts.slice(0, 2).map(p => p[0]?.toUpperCase()).join("");

    // If single word, take first 2 chars (e.g. "PHP" -> "PH" but we may want "PHP")
    if (parts.length === 1) {
        const w = parts[0].toUpperCase();
        return w.length <= 3 ? w : w.slice(0, 2);
    }

    return initials || "?";
}


export function ToolIcon({ name, src, className = "" }: ToolIconProps) {
    const [failed, setFailed] = useState(false);

    if (failed) {
        return (
            <div
                aria-label={`${name} logo`}
                title={name}
                className={`flex items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 text-neutral-700 font-semibold select-none ${className}`}
                style={{}}
            >
                {getInitials(name)}
            </div>
        );
    }

    return (
        <Image
            src={src}
            alt={`${name} logo`}
            sizes="40px"
            fill
            className={`rounded-full ${className}`}
            onError={() => setFailed(true)}
        />
    );
}

const TopSkills = () => {
    const [imageFailed, setFailed] = useState(false)
    return (
        <div id="techs" className="w-full">
            <div className="mx-auto w-full px-4 md:px-16 py-8">
                {/* Tools header row */}
                <div className="mb-6 flex items-end justify-between gap-4">
                    <div>
                        <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                            Tools & Tech I use
                        </h3>
                        {/* <p className="mt-1 text-neutral-600 dark:text-neutral-300">
                            My Top-Tier Tools
                        </p> */}
                    </div>
                </div>

                <div className="grid gap-4 md:gap-6 md:grid-cols-3">
                    {CATEGORIES.map((category) => (
                        <div
                            key={category.key}
                            className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
                        >
                            <div className="mb-4 text-sm font-semibold text-neutral-900 dark:text-white">
                                {category.label}
                            </div>
                            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                                {TOOLS.filter((t) => t.category === category.key).map((t) => (
                                    <div
                                        key={t.name}
                                        className="flex items-center gap-3 rounded-xl border border-neutral-200/70 bg-neutral-50 p-3 dark:border-neutral-800 dark:bg-neutral-950"
                                    >
                                        <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-white dark:bg-neutral-800">
                                            <ToolIcon name={t.name} src={t.icon} />

                                        </div>
                                        <div className="leading-tight">
                                            <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                                                {t.name}
                                            </div>
                                            <div className="text-xs text-neutral-600 dark:text-neutral-300">
                                                {t.desc}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopSkills
