type NavLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  name: string;
  links: NavLink[];
};

export function Navbar({ name, links }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between">
      <p className="text-lg font-bold">{name}</p>

      <div className="flex gap-4 text-sm text-gray-600">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}