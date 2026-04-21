import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const contacts = [
  {
    label: "Instagram",
    value: "@ruddypp",
    href: "https://instagram.com/ruddypp",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    value: "Rudy Paningal",
    href: "https://linkedin.com/in/rudypaningal",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "ruddypp",
    href: "https://github.com/ruddypp",
    icon: Github,
  },
  {
    label: "Email",
    value: "paningalrudy@gmail.com",
    href: "mailto:paningalrudy@gmail.com",
    icon: Mail,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="container mx-auto px-6 py-7 lg:py-9"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white/90 dark:bg-slate-900/80 backdrop-blur-md rounded-[32px] p-6 lg:p-10 border border-white/50 dark:border-white/10"
        >
          <img
            src="/decor/spark-wave.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-6 top-6 hidden w-40 opacity-85 xl:block"
          />

          <div className="inline-block bg-brand-purple text-white font-bold py-2 px-7 rounded-full text-base">
            Contact
          </div>

          <div className="mt-7 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="rounded-[28px] bg-[#B98EFC] p-7 text-white">
              <h2 className="max-w-md text-3xl lg:text-4xl font-bold leading-tight">
                Let&apos;s talk about your next project.
              </h2>
              <p className="mt-4 max-w-md text-white/85 leading-relaxed">
                Reach me through social media, GitHub, LinkedIn, or send an email directly.
              </p>
              <a
                href="mailto:paningalrudy@gmail.com"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-navy transition-all hover:bg-gray-100"
              >
                Email Me Directly
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="divide-y divide-brand-purple/10 overflow-hidden rounded-[24px] border border-brand-purple/10 bg-[#faf7ff] dark:bg-slate-950/60">
              {contacts.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    className="group flex items-center justify-between gap-4 p-5 transition-colors hover:bg-brand-purple/5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-purple/10 text-brand-purple">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-brand-navy/55 dark:text-white/55">{item.label}</p>
                        <p className="text-base font-bold text-brand-navy dark:text-white">{item.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-brand-navy/55 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 dark:text-white/55" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
