type ThemeToggleProps = {
  darkMode: boolean;
  onToggle: () => void;
};

export function ThemeToggle({ darkMode, onToggle }: ThemeToggleProps) {
  return (
    <button onClick={onToggle} className="w-fit rounded-xl border px-4 py-2">
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}