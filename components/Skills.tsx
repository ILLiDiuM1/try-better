type SkillsProps = {
    skills: string[];
};

export function Skills({ skills }: SkillsProps) {
    return (
        <section id="skills" className="border-t py-16">
        <h2 className="mb-6 text-3xl font-bold">Skills</h2>

        <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
            <span
                key={skill}
                className="rounded-full border px-4 py-2 text-sm text-gray-700"
            >
                {skill}
            </span>
            ))}
        </div>
        </section>
    );
}