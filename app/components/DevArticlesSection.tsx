import Link from "next/link";
import { FaMediumM } from "react-icons/fa";

export default function DevArticlesSection() {
  return (
    <section
      id="dev-articles"
      className="flex relative w-full max-w-6xl flex-col items-center justify-center gap-4 px-2 py-8 md:py-12"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 md:gap-12 px-1 md:px-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
          <div className="flex w-full flex-col gap-4 text-left md:gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold md:text-4xl text-white">
                Real-World Dev Guides
              </h2>
              <p className="mt-2 text-sm md:text-lg text-neutral-300">
                Here I share practical articles and tutorials based on my
                hands-on experience in software development, DevOps, Docker,
                CI/CD, API integration, and secure coding with AI. I use this
                space as a learning log to document real-world lessons, working
                solutions, and useful patterns that junior developers can apply
                in actual projects.
              </p>
              <Link
                href="https://antonraphaelcaballes.medium.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit my Medium profile"
                className="mt-4 inline-flex items-center gap-1.5 underline decoration-slate-300 underline-offset-4 transition hover:text-violet-500 hover:decoration-violet-400 dark:decoration-slate-600 dark:hover:text-violet-300 dark:hover:decoration-violet-400"
              >
                <FaMediumM className="text-base" />
                My Dev Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
