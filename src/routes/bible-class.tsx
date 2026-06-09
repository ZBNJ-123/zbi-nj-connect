import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { BookOpen, Layers, Compass, Users, Presentation, LifeBuoy, ArrowRight, Quote, Monitor, MapPin } from "lucide-react";

export const Route = createFileRoute("/bible-class")({
  component: BibleClass,
});

const stages = [
  {
    n: "1",
    icon: BookOpen,
    title: "Elementary Section",
    body: "Discover the figurative language of the Bible. Many words in Scripture are used figuratively, and understanding these meanings is essential to a deep grasp of God's Word. This is the foundation everything else is built on.",
  },
  {
    n: "2",
    icon: Layers,
    title: "Intermediate Section",
    body: "Apply what you've learned. Interpret the prophetic books of the Old Testament using the figurative language from the Elementary Section, gaining a deeper understanding of Scripture and uncovering the mysteries of Genesis.",
  },
  {
    n: "3",
    icon: Compass,
    title: "Advanced Section",
    body: "Bring it all together. Building on figurative language and your understanding of the Old Testament prophets, you'll study Revelation — the final book of the Bible — reaching a comprehensive understanding of Scripture and deep insight into God's will and truth.",
  },
];

const differentiators = [
  { icon: BookOpen, title: "In-depth and structured", body: "A structured curriculum that builds step by step, not scattered topics." },
  { icon: Presentation, title: "Live instruction with visual lessons", body: "Real instructors teach every class, supported by clear, visual PowerPoint lessons." },
  { icon: LifeBuoy, title: "A support network", body: "Every student is paired with advisors who walk alongside them through the entire journey." },
];

const reviews = [
  { initials: "J.P. - Graduated in 2022", quote: "This class was excellent. I really grew in my relationship with God, and I loved how we decoded Scripture — like working through parables across the Bible using other scriptures to interpret them. Everything was rooted in the Bible itself, not people's opinions, and I really appreciated that." },
  { initials: "A.K. - Graduated in 2020", quote: "At first I was hesitant about joining, but I'm so glad I did. My view of the Bible is completely different now. I understand more about God's will and I have so much more confidence in my knowledge of Scripture." },
  { initials: "R.S. - Graduated in 2024", quote: "I had a great time in the class. The instructor was wonderful and the content was deeply insightful. I highly recommend it!" },
];

const applicationSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  city: z.string().trim().min(1, "Town/City is required").max(100),
  state: z.string().trim().min(1, "State is required").max(60),
  age: z.coerce.number().int().min(1, "Please enter a valid age").max(120),
  format: z.enum(["Online", "In-Person", "Either"], { errorMap: () => ({ message: "Please choose a format" }) }),
  interested: z.literal("on", { errorMap: () => ({ message: "Please confirm your interest" }) }),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

const US_STATES = ["New Jersey", "New York", "Pennsylvania", "Connecticut", "Massachusetts", "Other"];

function BibleClass() {
  return (
    <Layout>
      <PageHero
        eyebrow="The Class"
        title="The Free 10-Month Bible Class"
        subtitle="An in-depth, systematic journey through Scripture — taught live or on zoom, supported by advisors, and completely free."
      />

      {/* Intro */}
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-10">
          <p className="text-lg leading-relaxed text-ink/85">
            Our Bible class is an in-depth, systematic journey through Scripture designed to give
            you a comprehensive understanding of the Word of God. Taught live by our instructors
            using visual PowerPoint lessons, the course is supported by a network of advisors who
            walk with each student through every stage. The class is offered online and in-person
            in Manhattan, completely free of charge.
          </p>
        </div>
      </section>

      {/* Course Structure */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.24em] text-gold mb-3">What You'll Learn</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              One journey, three sequential sections.
            </h2>
            <p className="mt-5 text-ink/80 leading-relaxed">
              Our single 10-month course is divided into three sequential sections. Every student
              progresses through all three to gain a complete understanding of Scripture.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3 relative">
            {stages.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="h-full rounded-2xl border-2 border-gold/30 bg-cream/40 p-8 flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-cream font-bold text-lg">
                      {s.n}
                    </div>
                    <s.icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-ink/80 leading-relaxed">{s.body}</p>
                </div>
                {i < stages.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-5 -translate-y-1/2 h-8 w-8 text-gold z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It's Free */}
      <section className="bg-navy">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
          <p className="text-xs uppercase tracking-[0.24em] text-gold mb-4">Why It's Free</p>
          <h2 className="text-cream text-3xl md:text-5xl font-bold leading-tight">
            Freely You Have Received, Freely Give
          </h2>
          <p className="mt-6 text-lg text-cream/85 leading-relaxed">
            Our class is free because we were freely given to. We share the Word of God the same way
            it was shared with us — without cost.
          </p>
          <blockquote className="mt-12 scripture max-w-2xl mx-auto">
            "Freely you have received; freely give."
            <footer className="mt-3 text-sm not-italic font-sans uppercase tracking-[0.2em] text-cream/60">
              — Matthew 10:8
            </footer>
          </blockquote>
        </div>
      </section>

      {/* What Makes Our Class Different */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <h2 className="text-center text-3xl md:text-4xl font-bold">
            What Makes Our Class Different
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {differentiators.map((d) => (
              <div key={d.title} className="bg-white rounded-2xl p-8 shadow-sm border border-border">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-navy">
                  <d.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{d.title}</h3>
                <p className="mt-2 text-ink/80 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.24em] text-gold mb-3">Student Reviews</p>
            <h2 className="text-3xl md:text-5xl font-bold">What Our Students Are Saying</h2>
            <p className="mt-4 text-ink/80">
              Hear from students who have walked this journey with us.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {reviews.map((r) => (
              <div
                key={r.initials}
                className="bg-cream/60 rounded-2xl p-8 shadow-sm border border-border"
              >
                <Quote className="h-8 w-8 text-gold" fill="currentColor" />
                <p className="mt-5 text-ink/85 leading-relaxed">{r.quote}</p>
                <p className="mt-6 text-navy font-bold tracking-wider">{r.initials}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Format comparison */}
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">Choose Your Format</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white rounded-2xl p-10 border border-border text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 text-navy">
                <Monitor className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold">Online</h3>
              <p className="mt-3 text-ink/80 leading-relaxed">
                Join from anywhere in New Jersey or New York. Live virtual classes with the same instructors and support.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 border border-border text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 text-navy">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold">In-Person</h3>
              <p className="mt-3 text-ink/80 leading-relaxed">
                Meet with us in Manhattan for an in-person classroom experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intake form */}
      <ApplyForm />
    </Layout>
  );
}

function ApplyForm() {
  return (
    <section id="apply" className="bg-cream scroll-mt-24">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.24em] text-gold mb-3">Apply</p>
          <h2 className="text-3xl md:text-5xl font-bold">Ready to Begin? Apply Below</h2>
          <p className="mt-4 text-ink/80 leading-relaxed">
            Fill out the form and we'll be in touch with next steps. Applicants under 18 require
            parental permission.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScC3FBJcBoGV5ZrDJA00w_LT_eW31C9_HJlapOfLxDxMlVggg/viewform?embedded=true"
            width="100%"
            height="1200"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="Bible Class Application Form"
            className="w-full"
          >
            Loading…
          </iframe>
        </div>

        <p className="mt-6 text-center text-sm text-ink/70">
          Having trouble with the form?{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScC3FBJcBoGV5ZrDJA00w_LT_eW31C9_HJlapOfLxDxMlVggg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy font-semibold underline hover:text-gold"
          >
            Open it in a new tab
          </a>
          .
        </p>
      </div>
    </section>
  );
}

function _UnusedApplyForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = applicationSchema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        errs[issue.path.join(".")] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  return (
    <section className="hidden">
      <div>
        {submitted ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gold p-10 text-center">
            <Users className="h-10 w-10 text-gold mx-auto" />
            <h3 className="mt-4 text-2xl font-bold">Thank you!</h3>
            <p className="mt-3 text-ink/80">
              Your application has been received. We'll be in touch with you soon about next steps.
            </p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="bg-white rounded-2xl shadow-sm border border-border p-8 lg:p-10 space-y-6"
            noValidate
          >
            <div className="grid gap-6 md:grid-cols-2">
              <TextField label="Full Name" name="fullName" required error={errors.fullName} />
              <TextField label="Email" name="email" type="email" required error={errors.email} />
              <TextField label="Phone (optional)" name="phone" type="tel" error={errors.phone} />
              <TextField label="Age" name="age" type="number" required error={errors.age} />
              <TextField label="Town / City" name="city" required error={errors.city} />
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">
                  State <span className="text-destructive">*</span>
                </label>
                <select
                  name="state"
                  defaultValue="New Jersey"
                  className="w-full rounded-lg border border-border bg-cream/30 px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-gold/60"
                >
                  {US_STATES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                {errors.state && <p className="mt-1 text-xs text-destructive">{errors.state}</p>}
              </div>
            </div>

            <fieldset>
              <legend className="block text-sm font-semibold text-navy mb-3">
                Preferred Format <span className="text-destructive">*</span>
              </legend>
              <div className="flex flex-wrap gap-3">
                {["Online", "In-Person", "Either"].map((opt, i) => (
                  <label
                    key={opt}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-cream/30 cursor-pointer hover:border-gold transition has-[:checked]:border-gold has-[:checked]:bg-gold/10"
                  >
                    <input
                      type="radio"
                      name="format"
                      value={opt}
                      defaultChecked={i === 2}
                      className="accent-gold"
                    />
                    <span className="text-sm font-medium text-ink">{opt}</span>
                  </label>
                ))}
              </div>
              {errors.format && <p className="mt-2 text-xs text-destructive">{errors.format}</p>}
            </fieldset>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="interested"
                className="mt-1 h-4 w-4 accent-gold"
              />
              <span className="text-sm text-ink">
                Yes, I'm interested in the course. <span className="text-destructive">*</span>
              </span>
            </label>
            {errors.interested && (
              <p className="-mt-3 text-xs text-destructive">{errors.interested}</p>
            )}

            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                Message or Questions (optional)
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-lg border border-border bg-cream/30 px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-gold/60"
              />
            </div>

            <button type="submit" className="btn-gold w-full justify-center">
              Submit Application <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function TextField({
  label,
  name,
  type = "text",
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-navy mb-2">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <input
        name={name}
        type={type}
        className="w-full rounded-lg border border-border bg-cream/30 px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-gold/60"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
