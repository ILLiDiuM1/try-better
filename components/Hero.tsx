type HeroProps = {
  title: string;
  subtitle: string;
  label: string;
  githubUrl: string;
};

export function Hero({ title, subtitle, label, githubUrl }: HeroProps) {
  return (
    <section className="flex min-h-[70vh] flex-col justify-center gap-6">
      <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
        {label}
      </p>

      <h1 className="max-w-3xl text-5xl font-bold tracking-tight">{title}</h1>

      <p className="max-w-2xl text-lg text-gray-600">{subtitle}</p>

      <div className="flex gap-4">
        <a href="#projects" className="rounded-xl bg-black px-5 py-3 text-white">
          View Projects
        </a>

        <a
          href={githubUrl}
          target="_blank"
          className="rounded-xl border border-gray-300 px-5 py-3"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}