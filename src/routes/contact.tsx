import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().max(150).optional(),
  message: z.string().trim().min(1, "Message is required").max(1500),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        errs[issue.path.join(".")] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  }

  return (
    <Layout>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="Have a question? We'd love to hear from you."
      />
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10 grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">We'd love to connect.</h2>
            <p className="mt-4 text-ink/80 leading-relaxed">
              Reach out with questions about the Bible class, our events, or how to get involved.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-navy">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-ink/60 font-semibold">Email</p>
                  <a href="mailto:info@zbinj.org" className="text-navy font-semibold hover:text-gold">
                    info@zbinj.org
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-navy">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-ink/60 font-semibold">Location</p>
                  <p className="text-navy font-semibold">New Jersey</p>
                </div>
              </li>
            </ul>
            <div className="mt-8 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-cream hover:bg-gold hover:text-navy transition"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-cream hover:bg-gold hover:text-navy transition"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="bg-white rounded-2xl shadow-sm p-8 lg:p-10 border border-border"
          >
            {sent && (
              <div className="mb-6 p-4 bg-gold/20 border border-gold/40 rounded-lg text-navy text-sm font-semibold">
                Thank you — your message has been received.
              </div>
            )}
            <div className="space-y-5">
              <Field label="Name" name="name" required error={errors.name} />
              <Field label="Email" name="email" type="email" required error={errors.email} />
              <Field label="Subject" name="subject" error={errors.subject} />
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">
                  Message <span className="text-destructive">*</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full rounded-lg border border-border bg-cream/30 px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-gold/60"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                )}
              </div>
              <button type="submit" className="btn-gold w-full justify-center">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}

function Field({
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
