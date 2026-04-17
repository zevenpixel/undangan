import { MotionSection } from "@/components/ui/MotionSection";
import { invitation } from "@/lib/data/invitation";

export function Quote() {
  const { text, source } = invitation.quote;
  return (
    <MotionSection id="quote" className="bg-cream-deep">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-serif text-2xl italic leading-relaxed text-charcoal sm:text-3xl">
          &ldquo;{text}&rdquo;
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.4em] text-gold">— {source}</p>
      </div>
    </MotionSection>
  );
}
