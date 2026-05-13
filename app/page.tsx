import { projects } from "@/data/projects";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10">
      <section className="mx-auto flex max-w-5xl flex-col gap-8">
        <Navbar
          name="Chel"
          links={[
            { label: "About", href: "#about" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" },
          ]}
/>
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
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tech={project.tech}
              />
            ))}
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
