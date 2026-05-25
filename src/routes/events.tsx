import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Calendar, MapPin } from "lucide-react";

export const Route = createFileRoute("/events")({
  component: EventsPage,
});

const events = [
  {
    title: "Open House",
    date: "Saturday, September 14",
    location: "New Jersey",
    desc: "Meet our faculty and learn about the program.",
    img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1000&q=80",
  },
  {
    title: "Guest Speaker Night",
    date: "Friday, October 3",
    location: "Online + In Person",
    desc: "A special evening of teaching and fellowship.",
    img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1000&q=80",
  },
  {
    title: "Community Worship Gathering",
    date: "Sunday, October 19",
    location: "New Jersey",
    desc: "Worship and connect with our community.",
    img: "https://images.unsplash.com/photo-1507120410856-1f35574c3b45?w=1000&q=80",
  },
  {
    title: "Bible Study Kickoff",
    date: "Wednesday, November 5",
    location: "New Jersey",
    desc: "First night of a new study series — all are welcome.",
    img: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1000&q=80",
  },
  {
    title: "Family Fellowship Day",
    date: "Saturday, November 22",
    location: "New Jersey",
    desc: "A community day for families to connect.",
    img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1000&q=80",
  },
  {
    title: "Year-End Celebration",
    date: "Sunday, December 14",
    location: "New Jersey",
    desc: "Celebrating a year of growth and learning together.",
    img: "https://images.unsplash.com/photo-1490127252417-7c393f993ee4?w=1000&q=80",
  },
];

function EventsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Events"
        title="Upcoming Events"
        subtitle="Gatherings to learn, worship, and connect with our community."
      />
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <article
              key={e.title}
              className="group rounded-2xl overflow-hidden bg-white border border-border hover:shadow-lg transition"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={e.img}
                  alt={e.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-4 left-4 bg-gold text-navy text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
                  <Calendar className="h-3 w-3" /> {e.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{e.title}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-ink/70">
                  <MapPin className="h-3.5 w-3.5" /> {e.location}
                </p>
                <p className="mt-3 text-ink/80">{e.desc}</p>
                <a
                  href="#"
                  className="inline-block mt-4 text-navy font-semibold hover:text-gold transition"
                >
                  Learn More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
