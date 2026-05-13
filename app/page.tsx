export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10">
      <section className="mx-auto flex max-w-5xl flex-col gap-8">
        <nav className="flex items-center justify-between">
          <p className="text-lg font-bold">Artem</p>

          <div className="flex gap-4 text-sm text-gray-600">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="flex min-h-[70vh] flex-col justify-center gap-6">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
            Frontend Developer
          </p>

          <h1 className="max-w-3xl text-5xl font-bold tracking-tight">
            I build clean, responsive web applications with React and Next.js.
          </h1>

          <p className="max-w-2xl text-lg text-gray-600">
            I am learning frontend development by building real projects,
            improving my skills step by step, and documenting the process.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-black px-5 py-3 text-white"
            >
              View Projects
            </a>

            <a
              href="https://github.com/ILLiDiuM1"
              target="_blank"
              className="rounded-xl border border-gray-300 px-5 py-3"
            >
              GitHub
            </a>
          </div>
        </section>

        <section id="about" className="border-t py-16">
          <h2 className="mb-4 text-3xl font-bold">About me</h2>
          <p className="max-w-2xl text-gray-600">
            I am focused on becoming a frontend developer. Right now I am
            building projects with Next.js, TypeScript, Tailwind CSS, and Git.
          </p>
        </section>

        <section id="projects" className="border-t py-16">
          <h2 className="mb-6 text-3xl font-bold">Projects</h2>

          <div className="grid gap-4 md:grid-cols-3">
            {["Portfolio Website", "Task Tracker", "API Project"].map(
              (project) => (
                <div
                  key={project}
                  className="rounded-2xl border p-5 shadow-sm"
                >
                  <h3 className="mb-2 text-xl font-semibold">{project}</h3>
                  <p className="text-sm text-gray-600">
                    A project built to practice frontend development skills.
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        <section id="contact" className="border-t py-16">
          <h2 className="mb-4 text-3xl font-bold">Contact</h2>
          <p className="text-gray-600">
            You can reach me through GitHub or LinkedIn.
          </p>
        </section>
      </section>
    </main>
  );
}
