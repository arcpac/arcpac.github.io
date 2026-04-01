import Link from "next/link"
import type { ReactNode } from "react"

const NAV_SECTIONS = [
    { label: "Overview", id: "overview" },
    { label: "Highlights", id: "highlights" },
    { label: "Docker Stack", id: "docker-stack" },
    { label: "Docker Images", id: "docker-images" },
    { label: "Docker Storage", id: "docker-storage" },
    { label: "Docker Networking", id: "docker-networking" },
    { label: "Docker Registry", id: "docker-registry" },
    { label: "Orchestration & Swarm", id: "orchestration-swarm" },
    { label: "Visuals", id: "visuals" },
]

const TAGS = [
    "Docker Engine",
    "Dockerfile",
    "Docker Compose",
    "Docker Swarm",
    "Docker Hub",
    "Private Registries",
    "Volumes",
    "Overlay Networks",
]

function Bullet({ children }: { children: ReactNode }) {
    return (
        <li className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
            <span>{children}</span>
        </li>
    )
}

function Placeholder({ label }: { label: string }) {
    return (
        <div className="flex h-full min-h-[220px] items-center justify-center rounded-md border border-dashed border-neutral-300 bg-neutral-50 text-sm text-neutral-500 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-400">
            {label}
        </div>
    )
}

export default function DockerPage() {
    return (
        <main className="min-h-screen bg-white text-neutral-700 dark:bg-neutral-950 dark:text-neutral-200">
            <section className="mx-auto w-full max-w-7xl px-4 py-10 md:px-8 lg:px-10">
                <Link
                    href="/#skills"
                    className="sticky top-10 z-20 inline-flex w-fit items-center rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
                >
                    Back to skills
                </Link>

                <div className="mt-6 grid gap-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-12">
                    <aside className="lg:sticky lg:top-24 lg:h-fit">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500 dark:text-neutral-400">
                            On this page
                        </p>
                        <nav>
                            <ul className="space-y-1.5">
                                {NAV_SECTIONS.map((section) => (
                                    <li key={section.id}>
                                        <Link
                                            href={`#${section.id}`}
                                            className="inline-flex rounded-md px-2 py-1 text-sm text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
                                        >
                                            {section.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </aside>

                    <article className="max-w-3xl">
                        <header>
                            <p className="text-[11px] font-semibold tracking-widest text-blue-600 dark:text-blue-400">
                                SKILL PROFILE
                            </p>
                            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
                                Docker
                            </h1>
                            <p className="mt-3 text-base text-neutral-700 dark:text-neutral-300 md:text-lg">
                                Proficiency in building efficient container images, managing Docker storage,
                                designing container networking, publishing to registries, and coordinating
                                multi-service environments with Docker Compose and Docker Swarm.
                            </p>
                            <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-950">
                                <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900">
                                    <Placeholder label="Docker visual placeholder" />
                                </div>
                            </div>
                        </header>

                        <section id="overview" className="mt-10 scroll-mt-28 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Overview</h2>
                            <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                                Docker is one of my core DevOps skills for packaging applications into repeatable,
                                portable runtime environments. I use it to standardise local development,
                                streamline deployments, isolate services, and make infrastructure behaviour more
                                predictable across environments.
                            </p>
                        </section>

                        <section id="highlights" className="mt-10 scroll-mt-28 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Highlights</h2>
                            <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                                <Bullet>
                                    Build clean, production-ready Docker images with layered caching, sensible base
                                    image selection, and multi-stage build patterns.
                                </Bullet>
                                <Bullet>
                                    Configure storage correctly using bind mounts and named volumes depending on
                                    persistence, portability, and development workflow needs.
                                </Bullet>
                                <Bullet>
                                    Work confidently with Docker networking, including service-to-service
                                    communication, port publishing, custom bridge networks, and overlay networks.
                                </Bullet>
                                <Bullet>
                                    Publish and manage images in Docker Hub or private registries using consistent
                                    tagging, authentication, and version promotion practices.
                                </Bullet>
                                <Bullet>
                                    Coordinate multi-container systems with Docker Compose and use Docker Swarm for
                                    native Docker orchestration, scaling, and rolling service updates.
                                </Bullet>
                            </ul>
                        </section>

                        <section id="docker-stack" className="mt-10 scroll-mt-28 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Docker Stack</h2>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {TAGS.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section id="docker-images" className="mt-10 scroll-mt-28 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Docker Images</h2>
                            <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                                I build Docker images with a focus on repeatability, small attack surface, and fast
                                rebuild times. That usually means using well-maintained base images, keeping layers
                                intentional, separating build-time and runtime dependencies, and structuring
                                Dockerfiles so caching stays effective during iteration.
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                                <Bullet>Write maintainable Dockerfiles for application and service workloads.</Bullet>
                                <Bullet>Use multi-stage builds to keep final images lean and deployment-ready.</Bullet>
                                <Bullet>Optimise layer order to improve cache hits and reduce rebuild time.</Bullet>
                            </ul>
                        </section>

                        <section id="docker-storage" className="mt-10 scroll-mt-28 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Docker Storage</h2>
                            <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                                I understand where container data should stay ephemeral and where it must persist.
                                I use bind mounts for fast local iteration and named volumes when data durability,
                                cleaner container boundaries, or environment portability matters more.
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                                <Bullet>Choose between bind mounts and named volumes based on runtime needs.</Bullet>
                                <Bullet>Handle persistent service data for databases, uploads, and shared assets.</Bullet>
                                <Bullet>Keep storage decisions explicit so environments are easier to reproduce.</Bullet>
                            </ul>
                        </section>

                        <section id="docker-networking" className="mt-10 scroll-mt-28 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Docker Networking</h2>
                            <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                                I use Docker networking to define clean communication paths between services without
                                leaking unnecessary access. This includes port exposure for external traffic,
                                internal service discovery across custom networks, and overlay networking for Swarm
                                deployments that span multiple nodes.
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                                <Bullet>Configure bridge networks for isolated multi-service applications.</Bullet>
                                <Bullet>Use service names and network scoping for reliable internal discovery.</Bullet>
                                <Bullet>Work with overlay networks when services need cross-node communication.</Bullet>
                            </ul>
                        </section>

                        <section id="docker-registry" className="mt-10 scroll-mt-28 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Docker Registry</h2>
                            <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                                I use registries as the distribution layer for containerised applications. That
                                includes tagging conventions, authentication, image versioning, and promoting images
                                across environments without rebuilding the same artifact repeatedly.
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                                <Bullet>Push and pull images from Docker Hub and private registries.</Bullet>
                                <Bullet>Apply clear tags for releases, environments, and rollback safety.</Bullet>
                                <Bullet>Keep image distribution aligned with CI/CD and deployment workflows.</Bullet>
                            </ul>
                        </section>

                        <section id="orchestration-swarm" className="mt-10 scroll-mt-28 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                                Orchestration &amp; Swarm
                            </h2>
                            <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                                Rather than claiming every container orchestrator broadly, the strongest wording here
                                is Docker-native orchestration. I use Docker Compose for defining and running
                                multi-container application stacks, and Docker Swarm for clustering Docker nodes,
                                scaling services, distributing workloads, and handling rolling updates inside the
                                Docker ecosystem.
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                                <Bullet>Define multi-service stacks clearly with Docker Compose.</Bullet>
                                <Bullet>Deploy replicated services with Docker Swarm across clustered nodes.</Bullet>
                                <Bullet>Use rolling updates and service scaling as part of operational workflows.</Bullet>
                            </ul>
                        </section>

                        <section id="visuals" className="mt-10 scroll-mt-28 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Visuals</h2>
                            <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
                                A diagram or deployment screenshot can be added here later if you want to show a
                                Docker Compose stack, image pipeline, or Swarm topology.
                            </p>
                            <div className="mt-4 rounded-lg border border-neutral-200 bg-white p-3 dark:border-neutral-700 dark:bg-neutral-900">
                                <div className="relative aspect-video overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-950">
                                    <Placeholder label="Image placeholder" />
                                </div>
                            </div>
                        </section>
                    </article>
                </div>
            </section>
        </main>
    )
}
