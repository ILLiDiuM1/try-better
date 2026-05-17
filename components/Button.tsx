type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const styles = {
    primary: "bg-black border border-white-300 text-white",
    secondary: "bg-gray-500 border border-white-300 text-black",
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