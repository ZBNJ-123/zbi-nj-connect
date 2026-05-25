export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-navy text-cream">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:py-32 lg:px-10">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.24em] text-gold mb-4">{eyebrow}</p>
        )}
        <h1 className="text-cream text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg text-cream/80 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
