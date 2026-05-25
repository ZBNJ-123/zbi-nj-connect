import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/faculty")({
  component: FacultyPage,
});

const faculty = [
  { name: "Pastor David Chen", title: "Lead Instructor", bio: "A devoted teacher of Scripture with over 20 years of experience guiding students through the Bible." },
  { name: "Sarah Mitchell", title: "Senior Advisor", bio: "Walks alongside students through the entire 8-month journey with care and biblical insight." },
  { name: "James Park", title: "Elementary Section Instructor", bio: "Specializes in the figurative language of Scripture and foundational biblical interpretation." },
  { name: "Rebecca Lee", title: "Intermediate Section Instructor", bio: "Passionate about prophetic literature and helping students uncover the mysteries of the Old Testament." },
  { name: "Michael Rivera", title: "Advanced Section Instructor", bio: "Leads the study of Revelation with depth, clarity, and a heart for the truth of God's Word." },
  { name: "Grace Thompson", title: "Student Advisor", bio: "Provides one-on-one support to ensure every student feels seen, heard, and equipped to grow." },
];

function FacultyPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Our Faculty"
        title="The teachers and advisors who walk with you."
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
