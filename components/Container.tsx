import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6">
      {children}
    </div>
  );
}