"use client";

import Image from "next/image";

type SkillImage = {
    name: string;
    src: string;
};

const SKILL_IMAGES: SkillImage[] = [
    {
        name: "Auth0",
        src: "/topSkillsImages/Auth0.png",
    },
    {
        name: "GitHub",
        src: "/topSkillsImages/Github.png",
    },
    {
        name: "GraphQL",
        src: "/topSkillsImages/GraphQL.png",
    },
    {
        name: "JavaScript",
        src: "/topSkillsImages/Javascript.png",
    },
    {
        name: "Next.js",
        src: "/topSkillsImages/NextJs.png",
    },
    {
        name: "Node.js",
        src: "/topSkillsImages/NodeJs.png",
    },
    {
        name: "React",
        src: "/topSkillsImages/React.png",
    },
    {
        name: "TypeScript",
        src: "/topSkillsImages/Typescript.png",
    },
];

const TopSkills2 = () => {
    return (
        <div id="techs" className="relative w-full overflow-hidden">
            <div className="grid w-full grid-cols-2 gap-0 md:grid-cols-4">
                {SKILL_IMAGES.map((skill, index) => (
                    <div
                        key={skill.name}
                        className="relative aspect-[20/9] overflow-hidden md:aspect-[20/9]"
                        title={skill.name}
                    >
                        <Image
                            src={skill.src}
                            alt={`${skill.name} top skill preview`}
                            fill
                            priority={index === 0}
                            sizes="(max-width: 768px) 50vw, 25vw"
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopSkills2;
