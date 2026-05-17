type Project = {
  title: string;
  description: string;
  tech: string[];
  status: "Done" | "In Progress" | "Planned";
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "In Progress",
    githubUrl: "https://github.com/ILLiDiuM1/try-better",
    demoUrl: "https://project-2nzkw.vercel.app",

  },
  {
    title: "Task Tracker",
    description:
      "A task management app for practicing state, forms, and local storage.",
    tech: ["React", "TypeScript", "LocalStorage"],
    status: "Planned",
  },
  {
    title: "API Project",
    description:
      "A frontend project that works with external API data, loading states, and errors.",
    tech: ["React", "API", "Async/Await"],
    status: "Planned",
  },
];