import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/faculty")({
  component: FacultyPage,
});

const faculty = [
  { name: "Leah", title: "Lead Instructor", bio: "" },
  { name: "Alli", title: "SENIOR ADVISOR", bio: "" },
  { name: "Edith", title: "SENIOR ADVISOR", bio: "" },
  { name: "Tsaone", title: "SENIOR ADVISOR", bio: "" },
  { name: "Rachel", title: "SENIOR ADVISOR", bio: "" },
  { name: "Ify", title: "SENIOR ADVISOR", bio: "" },
];

function FacultyPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Our Faculty"
        title="The instructors and advisors who walk with you."
        subtitle="Meet the instructors and advisors who guide students through the Bible class with knowledge, care, and dedication."
      />
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {faculty.map((f, i) => (
            <div key={f.name} className="text-center">
              <div className="mx-auto w-40 h-40 rounded-full overflow-hidden bg-navy/10 ring-4 ring-gold/40">
                <img
                  src={`https://i.pravatar.cc/320?img=${i + 12}`}
                  alt={f.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-6 text-xl font-bold">{f.name}</h3>
              <p className="text-sm font-semibold text-gold uppercase tracking-wider mt-1">
                {f.title}
              </p>
              <p className="mt-3 text-ink/80 leading-relaxed max-w-xs mx-auto">{f.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
