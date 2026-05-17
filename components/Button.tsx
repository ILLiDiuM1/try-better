type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const styles = {
    primary: "bg-black text-white",
    secondary: "border border-gray-300 text-black",
  };

  return (
    <a
      href={href}
      className={`rounded-xl px-5 py-3 ${styles[variant]}`}
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}