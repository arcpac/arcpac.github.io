import Image from "next/image";

export type Certificate = {
    id: string;
    title: string;
    image: string;
    url: string;
    download?: boolean
};
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const certificates: Certificate[] = [
    {
        id: "cybersecurity2",
        title: "Introduction to Cybersecurity",
        image: "/certificates/introduction-to-cybersecurity.png",
        url: "https://www.credly.com/badges/45603219-dd75-43fb-86ce-781f656262fc/public_url",
    },
    {
        id: "cybersecurity1",
        title: "Cybersecurity Essentials",
        image: "/certificates/cybersecurity-essentials.png",
        url: "https://www.credly.com/badges/34c74903-640e-4d8b-9e9c-1902d68098e4/public_url",
    },
    {
        id: "Linux1",
        title: "NDG Linux Unhatched",
        image: `/certificates/NDG-Linux-Unhatc-certificate.png`,
        url: `${basePath}/certificates/antonio-caballes-ndg-linux.pdf`,
        download: true
    },
    {
        id: "Docker1",
        title: "Docker Training Course for the Absolute Beginner",
        image: `/certificates/Docker-Training-Course.png`,
        url: `https://learn.kodekloud.com/certificate/e67a0567-c7c0-40eb-bdf9-43d3d51ff13d`,
    },

];

type CertificatesProps = {
    items?: Certificate[];
};

export default function Certificates({
    items = certificates,
}: CertificatesProps) {
    return (
        <section
            id="certificates"
            className="w-full px-3 py-14 text-neutral-900 dark:text-white sm:px-4 md:py-20"
        >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-1 md:px-6">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                        Certificates
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                        Badges and certifications
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
                        Verified learning, platform badges, and credentials from the tools I
                        use when building software.
                    </p>
                </div>

                <div className="-mx-3 overflow-x-auto px-3 pb-2 sm:mx-0 sm:px-0">
                    <div className="flex min-w-max gap-3 sm:min-w-0 sm:flex-wrap">
                        {items.map((certificate) => (
                            <a
                                key={certificate.id}
                                href={certificate.url}
                                target="_blank"
                                download={certificate.download}
                                rel="noopener noreferrer"
                                aria-label={`Open ${certificate.title} certificate`}
                                className="group flex w-36 shrink-0 flex-col items-center gap-3 rounded-lg text-center shadow-sm transition hover:-translate-y-1 "
                            >
                                <div className="relative flex h-35 w-35 items-center justify-center overflow-hidden">
                                    <Image
                                        src={certificate.image}
                                        alt={`${certificate.title} badge`}
                                        fill
                                        sizes="80px"
                                        className="object-contain p-1 transition duration-300 group-hover:scale-105"
                                    />
                                </div>

                                <span className="text-sm font-semibold leading-snug text-neutral-800 dark:text-neutral-100">
                                    {certificate.title}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
