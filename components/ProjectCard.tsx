type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  status: "Done" | "In Progress" | "Planned";
  githubUrl?: string;
  demoUrl?: string;
};

export function ProjectCard({ title, description,tech,
status, githubUrl, demoUrl,
 }: ProjectCardProps) 
{
  return (
    <div className="rounded-2xl border p-5 shadow-sm">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="mb-3 text-xs font-medium text-orange-300 ">{status}</p>           
        <p className="mb-4 text-sm text-gray-600">
            {description}
        </p>

        <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
            <span
                key={item}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
            >
                {item}
            </span>
            ))}
            <div className="mt-5 flex gap-3 text-sm">
                {githubUrl && (
                    <a href={githubUrl} target="_blank" className="underline">
                    GitHub
                    </a>
                )}

                {demoUrl && (
                    <a href={demoUrl} target="_blank" className="underline">
                    Live Demo
                    </a>
                )}
                </div>
        </div>

    </div>
  );
}