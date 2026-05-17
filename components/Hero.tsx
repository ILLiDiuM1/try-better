
import { Button } from "@/components/Button";

type HeroProps = {
  title: string;
  subtitle: string;
  label: string;
  githubUrl: string;
};

export function Hero({ title, subtitle, label, githubUrl }: HeroProps) {
  return (
    <div className="flex gap-4">
      <Button href="#projects">View Projects</Button>

      <Button href={githubUrl}>
        GitHub
      </Button>
    </div>
  );
}