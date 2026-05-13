type NavbarProps = {
  name: string;
};

export function Navbar({ name }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between">
      <p className="text-lg font-bold">{name}</p>

      <div className="flex gap-4 text-sm text-gray-600">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}