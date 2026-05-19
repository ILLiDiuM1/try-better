"use client";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { Hero } from "@/components/Hero";
import { skills } from "@/data/skills";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { ThemeToggle } from "@/components/ThemeToggle";
import { journey } from "@/data/journey";
import { MyJourney } from "@/components/MyJourney";
import { GitHubProfile } from "@/components/GitHubProfile";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() =>{
    const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    setDarkMode(true);
  }
  }, [])
  useEffect(() => {
    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
      );
  }, [darkMode]);
  
  return (
    <main
      className={`min-h-screen px-6 py-10 transition-colors ${
        darkMode
          ? "bg-white text-black"
          : "bg-black text-white"
      }`}
>
      <Container>
        <Navbar
          name="Chel"
          darkMode={darkMode}
          links={[
            { label: "About", href: "#about" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" },
            { label: "Skills", href: "#skills" },
            { label: "Journey", href: "#journey" }, 
          ]}
          
          />
        <ThemeToggle
          darkMode={darkMode}
          onToggle={() => setDarkMode(!darkMode)}
        />
        <Hero
          label="Frontend Developer"
          title="I build clean, responsive web applications with React and Next.js."
          subtitle="I am learning frontend development by building real projects, improving my skills step by step, and documenting the process."
          githubUrl="https://github.com/ILLiDiuM1"
        />

        <About />
        <GitHubProfile/>
        <Skills skills={skills} />
        <section id="journey" className="border-t py-16">
          <h2 className="mb-4 text-3xl font-bold">My Journey</h2>
          <div className="grid gap-4 md:grid-cols-4">{journey.map((item) => (
            <MyJourney
              key={item.step}
              step={item.step}
              content={item.content}
              status={item.status}
            />
          ))}</div>
        </section>
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
            You can reach me through GitHub.
          </p>
          <ContactForm />
        </section>
      </Container>
    </main>
  );
}
