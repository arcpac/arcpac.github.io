import Image from "next/image";

type SkillItem = {
  name: string;
  icon?: string;
};

const DEVOPS_SKILLS: SkillItem[] = [
  { name: "GitHub CI/CD", icon: "/logos/github.svg" },
  { name: "Docker" },
  { name: "Github Actions" },
  { name: "DevOps" },
];

const CLOUD_SKILLS: SkillItem[] = [
  { name: "AWS S3", icon: "/logos/aws-s3.svg" },
  { name: "AWS IAM", icon: "/logos/aws-iam.svg" },
  { name: "AWS Lambda", icon: "/logos/aws-lambda.svg" },
  { name: "AWS SQS", icon: "/logos/aws-sqs.svg" },
];

const SOFTWARE_DEV_SKILLS: SkillItem[] = [
  { name: "NextJS", icon: "/logos/nextjs.svg" },
  { name: "ReactJS", icon: "/logos/react-2.svg" },
  { name: "Elixir", icon: "/logos/Elixir.png" },
  { name: "Elixir + Phoenix", icon: "/logos/Phoenix Framework.png" },
  { name: "TypeScript", icon: "/logos/ts-1.svg" },
  { name: "NodeJS", icon: "/logos/nodejs.svg" },
  { name: "PostgreSQL", icon: "/logos/postgres.svg" },
  { name: "GraphQL", icon: "/logos/graphql.svg" },
  { name: "RabbitMQ", icon: "/logos/rabbitmq.svg" },
];

function getSkillInitials(name: string) {
  const parts = name
    .replace(/[^a-zA-Z0-9\s.+#]/g, "")
    .split(/\s+/)
    .filter(Boolean);

  if (parts.length === 1) {
    const value = parts[0].toUpperCase();
    return value.length <= 3 ? value : value.slice(0, 2);
  }

  return parts
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function SkillGrid({
  subtitle,
  items,
}: {
  subtitle: string;
  items: SkillItem[];
}) {
  return (
    <div className="relative w-full">
      <div className="mb-4 flex flex-col gap-1">
        <p className="text-sm text-neutral-600 md:text-base dark:text-neutral-300">
          {subtitle}
        </p>
      </div>

      <div className="overflow-hidden border border-neutral-200 dark:border-neutral-800">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {items.map((item, index) => {
            const lastMobileRow = Math.floor((items.length - 1) / 2);
            const lastDesktopRow = Math.floor((items.length - 1) / 4);
            const isLastMobileRow = Math.floor(index / 2) === lastMobileRow;
            const isLastDesktopRow = Math.floor(index / 4) === lastDesktopRow;
            return (
              <div
                key={item.name}
                className={`flex min-h-[108px] items-center gap-3 border-neutral-500/40 px-4 py-4 md:min-h-[96px] md:px-5 ${index % 2 !== 1 ? "border-r-[0.4px] md:border-r-0" : ""} ${index % 4 !== 3 ? "md:border-r-[0.4px]" : ""} ${!isLastMobileRow ? "border-b-[0.4px] md:border-b-0" : ""} ${!isLastDesktopRow ? "md:border-b-[0.4px]" : ""}`}
                title={item.name}
              >
                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900">
                  {item.icon ? (
                    <Image
                      src={item.icon}
                      alt={`${item.name} logo`}
                      fill
                      className="object-contain p-2"
                    />
                  ) : (
                    <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-200">
                      {getSkillInitials(item.name)}
                    </span>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-lg font-semibold leading-tight text-neutral-900 md:text-xl dark:text-white">
                    {item.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="flex relative w-full max-w-6xl flex-col items-center justify-center gap-4 px-2 py-8 md:py-12"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 md:gap-12 px-1 md:px-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-3xl font-semibold text-neutral-900 text-3xl md:text-4xl dark:text-white">
              The mind behind the creations
            </h2>
            <p className="max-w-2xl text-base text-neutral-700 text-sm md:text-lg dark:text-neutral-300">
              My DevOps experience is part of how I design I use <b>AWS</b> (SQS, Lambda, S3),{" "}
              <b>Docker</b>, <b>GitHub Actions</b>, and <b>CI/CD</b> to build
              systems that are observable, repeatable, and reliable from day
              one. Infrastructure decisions and software decisions happen in the
              same conversation for me.
            </p>
            <p className="max-w-2xl text-base text-neutral-700 text-sm md:text-lg dark:text-neutral-300">
              I genuinely love working with <b>Elixir</b> the BEAM VM reshaped
              how I think about concurrency, fault tolerance, and distributed
              systems. I use it in systems that have processes reacting to
              events in real time, message queues handling load without
              blocking, and supervision trees that keep things running even
              when parts fail. I continue
              building with Elixir and am keen to bring that event-driven
              mindset to a team's production systems.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-1 md:px-6">
        <SkillGrid
          subtitle="The tools and practices I use to build, release, and support software reliably."
          items={DEVOPS_SKILLS}
        />
        <SkillGrid
          subtitle="The stack I use most when building modern web and product experiences."
          items={SOFTWARE_DEV_SKILLS}
        />
        <SkillGrid
          subtitle="Cloud services I use to build and deploy scalable, secure infrastructure."
          items={CLOUD_SKILLS}
        />
      </div>
    </section>
  );
}
