import { projects } from "@/data/projects";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { Hero } from "@/components/Hero";
import { skills } from "@/data/skills";
import { Skills } from "@/components/Skills";

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
            { label: "Skills", href: "#skills" },
          ]}
/>
        <Hero
          label="Frontend Developer"
          title="I build clean, responsive web applications with React and Next.js."
          subtitle="I am learning frontend development by building real projects, improving my skills step by step, and documenting the process."
          githubUrl="https://github.com/ILLiDiuM1"
        />

        <section id="about" className="border-t py-16">
          <h2 className="mb-4 text-3xl font-bold">About me</h2>
          <p className="max-w-2xl text-gray-600">
            I am focused on becoming a frontend developer. Right now I am
            building projects with Next.js, TypeScript, Tailwind CSS, and Git.
          </p>
        </section>
        <Skills skills={skills} />
        <section id="projects" className="border-t py-16">
          <h2 className="mb-6 text-3xl font-bold">Projects</h2>

          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                status={project.status}
                description={project.description}
                tech={project.tech}
                githubUrl={project.githubUrl}
                demoUrl={project.demoUrl}
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
