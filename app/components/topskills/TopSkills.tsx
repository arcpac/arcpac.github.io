"use client"
import Image from 'next/image';
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
        name: "NextJS",
        desc: "App Router • SSR/SSG",
        icon: "/logos/nextjs.svg",
        category: "frontend",
    },
    {
        name: "ReactJS",
        desc: "Component-driven UI",
        icon: "/logos/react-2.svg",
        category: "frontend",
    },
    {
        name: "React Native",
        desc: "Mobile apps (iOS/Android)",
        icon: "/logos/react-native.svg",

        category: "frontend",
    },
    {
        name: "JavaScript",
        desc: "Modern ES6+",
        icon: "/logos/js.png",

        category: "frontend",
    },
    {
        name: "TypeScript",
        desc: "Type-safe JavaScript",
        icon: "/logos/ts-1.svg",

        category: "frontend",
    },
    {
        name: "Tailwind CSS",
        desc: "Utility-first styling",
        icon: "/logos/tailwind.svg",

        category: "frontend",
    },
    {
        name: "PostgreSQL",
        desc: "SQL relational database",
        icon: "/logos/postgres.svg",

        category: "backend",
    },
    {
        name: "Elixir + Phoenix",
        desc: "Backend APIs • OTP",
        icon: "/logos/elixir-phoenix.png",

        category: "backend",
    },
    {
        name: "NodeJS",
        desc: "Runtime • APIs • tooling",
        icon: "/logos/nodejs.svg",

        category: "backend",
    },
    {
        name: ".NET Core",
        desc: "Server-side web apps",
        icon: "/logos/NET_Core_Logo.png",

        category: "backend",
    },
    {
        name: "GitHub",
        desc: "CI/CD pipelines",
        icon: "/logos/github.svg",

        category: "other",
    },
    {
        name: "GraphQL",
        desc: "Server-side web apps",
        icon: "/logos/graphql.svg",
        category: "other",
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

    if (failed || !src) {
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
    return (
        <div id="techs" className="relative w-full overflow-hidden">
            <div className="grid grid-cols-4 grid-rows-4">
                {Array.from({ length: 16 }, (_, index) => {
                    const tool = TOOLS[index];

                    if (!tool) {
                        return (
                            <></>
                        );
                    }

                    return (
                        <div
                            key={tool.name}
                            className={`flex h-24 items-center px-3 border-neutral-500 ${index % 4 !== 3 ? "border-r-[0.4px]" : ""} ${index < 12 ? "border-b-[0.4px]" : ""}`}
                            title={tool.name}
                        >
                            <div className="relative h-10 w-10 shrink-0">
                                <ToolIcon
                                    name={tool.name}
                                    src={tool.icon}
                                    className="object-contain"
                                />
                            </div>
                            <div className="min-w-0">
                                <p className="truncate text-sm font-semibold ">
                                    {tool.name}
                                </p>
                                <p className="truncate text-xs text-neutral-600">{tool.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default TopSkills
