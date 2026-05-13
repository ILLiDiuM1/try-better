type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
};

export function ProjectCard({ title, description,tech, }: ProjectCardProps) 
{
  return (
    <div className="rounded-2xl border p-5 shadow-sm">
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>

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
      </div>
    </div>
  );
}