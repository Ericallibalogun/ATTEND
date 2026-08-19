import type { Metadata } from "next";

type PageShellProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

export function PageShell({ title, description, children }: PageShellProps) {
  return (
    <div className="section-x mx-auto max-w-6xl py-16 sm:py-20">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground">{description}</p>
      {children ?? (
        <p className="mt-8 rounded-sm border border-dashed border-zinc-300 px-6 py-12 text-center text-sm text-muted-foreground">
          Page content coming soon — design from Figma will be implemented here.
        </p>
      )}
    </div>
  );
}

export function createPageMetadata(
  title: string,
  description: string,
): Metadata {
  return { title, description };
}
