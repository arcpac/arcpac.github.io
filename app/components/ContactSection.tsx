export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="border border-neutral-200 bg-neutral-50 p-8 text-center dark:border-neutral-800 dark:bg-neutral-950 sm:p-12">
          <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white sm:text-4xl">
            Let's build something
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base text-neutral-700 dark:text-neutral-300 sm:text-lg">
            Have a role, project, or collaboration in mind? Email me and I'll
            get back to you.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="mailto:antonraphaelcaballes@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-2 text-md font-bold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Email me
            </a>
            <a
              href="mailto:antonraphaelcaballes@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-2 text-md font-bold text-neutral-900 transition hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
            >
              antonraphaelcaballes@gmail.com
            </a>
            <a
              href="tel:0452437783"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-2 text-md font-bold text-neutral-900 transition hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
            >
              0452 437 783
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
