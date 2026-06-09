import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowRight, BookOpen, Globe, Users, Calendar, MapPin } from "lucide-react";
import comingSoonAsset from "@/assets/coming-soon.png.asset.json";
import bibleOpenAsset from "@/assets/bible-open-v2.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Home,
});

const events = [
  {
    title: "Touch Grass",
    date: "SAT · JUNE 13",
    location: "Lincoln Park, Jersey City, NJ",
    desc: "Be in nature, disconnect, self reflect in gratitude to God",
    img: bibleOpenAsset.url,
  },
  {
    title: "Event details coming soon!",
    date: "JUNE 2026",
    location: "New Jersey",
    desc: "",
    img: comingSoonAsset.url,
  },
  {
    title: "Event details coming soon!",
    date: "JULY 2026 ",
    location: "New Jersey",
    desc: "",
    img: comingSoonAsset.url,
  },
];

function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1800&q=80"
          alt="Community gathered together studying scripture"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative mx-auto max-w-6xl px-6 py-32 lg:py-44 lg:px-10 text-center">
          <h1 className="text-cream text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.02] max-w-4xl mx-auto fade-in-up">
            Welcome to the Zion Biblical Institute of NJ
          </h1>
          <p
            className="mt-8 text-lg md:text-xl text-cream/85 max-w-2xl mx-auto leading-relaxed fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            We're excited to walk with you as you grow on your journey with God.
          </p>
          <div
            className="mt-10 flex flex-wrap justify-center gap-4 fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Link to="/bible-class" hash="apply" className="btn-gold">
              Apply for the Free Bible Class <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/about" className="btn-outline-cream">
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
          <p className="text-xs uppercase tracking-[0.24em] text-gold mb-4">Who We Are</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            A community grounded in Scripture, open to everyone.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/85">
            The Zion Biblical Institute of New Jersey is a non-denominational biblical institute
            welcoming all who want to study the Word of God and gain a true understanding of
            Scripture. Our mission is to help people understand God's will, build a strong
            scriptural foundation for their faith, and grow fluent in the content of the Bible.
          </p>
        </div>
      </section>

      {/* Three feature cards */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-navy mb-12">
            The Bible class we offer
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: "100% Free",
                body: "Our entire 10-month Bible class is offered completely free of charge. No tuition, no hidden costs — just open access to the Word.",
              },
              {
                icon: Globe,
                title: "Flexible format",
                body: "Our class is offered in-person in Manhattan or online on zoom. Use the format that best fits your schedule.",
              },
              {
                icon: Users,
                title: "Open to All",
                body: "Wherever you're starting from, you're welcome here. Our community is non-denominational and open to people of every background (Students under 18 years old need parental permission).",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-cream/40 p-8 hover:shadow-md hover:-translate-y-1 transition"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 text-navy">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">{title}</h3>
                <p className="mt-3 text-ink/80 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:items-center px-6 py-24 lg:px-10">
          <img
            src="https://images.unsplash.com/photo-1490127252417-7c393f993ee4?w=1100&q=80"
            alt="An open Bible with soft natural light"
            className="rounded-2xl object-cover w-full h-[420px] shadow-sm"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-gold mb-4">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Rooted in Scripture, built in New Jersey.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/85">
              Founded in 2019 with a simple heart — to share the unfiltered Word of God with anyone
              who is interested, and to build a loving, joyful community right here in New Jersey
              where people from all walks of life can come together, learn, and grow.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-navy font-semibold hover:text-gold transition"
            >
              Learn More About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Events teaser */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-gold mb-3">Upcoming Events</p>
              <h2 className="text-3xl md:text-4xl font-bold">Come and join us.</h2>
            </div>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition"
            >
              View All Events <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {events.map((e) => (
              <article
                key={e.title}
                className="group rounded-2xl overflow-hidden border border-border bg-cream/30 hover:shadow-lg transition"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={e.img}
                    alt={e.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-gold font-semibold">
                    <Calendar className="h-3.5 w-3.5" /> {e.date}
                  </div>
                  <h3 className="mt-3 text-xl font-bold">{e.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-ink/70">
                    <MapPin className="h-3.5 w-3.5" /> {e.location}
                  </p>
                  <p className="mt-3 text-ink/80">{e.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy">
        <div className="mx-auto max-w-4xl px-6 py-24 lg:py-28 lg:px-10 text-center">
          <h2 className="text-cream text-3xl md:text-5xl font-bold leading-tight">
            Ready to Begin Your Journey?
          </h2>
          <p className="mt-6 text-lg text-cream/80">
            Apply today for our free 10-month Bible class.
          </p>
          <div className="mt-10">
            <Link to="/bible-class" hash="apply" className="btn-gold">
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
