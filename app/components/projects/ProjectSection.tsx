'use client'

import dynamic from "next/dynamic";

const MyProjects = dynamic(() => import("./MyProjects"), {
    ssr: false,
});
const ProjectSection = () => {
    return (
        <div>
            <MyProjects />
        </div>
    )
}

export default ProjectSection
