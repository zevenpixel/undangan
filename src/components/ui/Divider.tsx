import { cn } from "@/lib/utils/cn";

export function Divider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)}>
      <span className="hairline h-px w-16 sm:w-24" />
      <span className="text-gold" aria-hidden>
        ✦
      </span>
      <span className="hairline h-px w-16 sm:w-24" />
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-center text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-center font-serif text-4xl font-light leading-tight text-charcoal sm:text-5xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}
