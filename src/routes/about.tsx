import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/about")({
  component: About,
});

const sections = [
  {
    eyebrow: "Mission & Vision",
    title: "Walking with you, wherever you are.",
    body: "We exist to support anyone who wants to grow their relationship with God and build their faith life on His Word. Whether you're new to Scripture or have been studying for years, we're here to walk that journey with you.",
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1100&q=80",
  },
  {
    eyebrow: "Our Story",
    title: "A community rooted in the Word.",
    body: "The Zion Biblical Institute of New Jersey was founded in 2019 with a simple heart: to share the unfiltered Word of God with anyone who is interested, and to build a loving, joyful community right here in New Jersey — a place where people from all walks of life can come together, learn, and grow.",
    img: "https://images.unsplash.com/photo-1499377193864-82682aefed04?w=1100&q=80",
  },
  {
    eyebrow: "Community & Partnerships",
    title: "Faith grows best in community.",
    body: "We believe faith grows best in community. That's why we partner with organizations like The Healing Hive to create spaces where people from all different backgrounds can fellowship, build friendships, and strengthen the communities around them.",
    img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1100&q=80",
  },
];

function About() {
  return (
    <Layout>
      <PageHero
        eyebrow="About Us"
        title="Welcome!"
        subtitle="Founded in 2019. Built around Community. Grounded in the Word of God.  "
      />
      {sections.map((s, i) => (
        <section key={s.title} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
          <div
            className={`mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:items-center px-6 py-24 lg:px-10 ${
              i % 2 === 1 ? "lg:[&>img]:order-2" : ""
            }`}
          >
            <img
              src={s.img}
              alt=""
              className="rounded-2xl object-cover w-full h-[420px] shadow-sm"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-gold mb-4">{s.eyebrow}</p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">{s.title}</h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/85">{s.body}</p>
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
}
