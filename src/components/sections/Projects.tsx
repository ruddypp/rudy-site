import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { projects } from "@/data/projects";

const projectDecor = [
  "/decor/orbit-ring.svg",
  "/decor/starburst.svg",
  "/decor/plus-cluster.svg",
  "/decor/spark-wave.svg",
];

export default function Projects() {
  const projectsPerPage = 4;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedProjects = projects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  return (
    <section
      id="projects"
      className="container mx-auto px-6 py-7 lg:py-9"
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-white/88 dark:bg-slate-900/80 backdrop-blur-md rounded-[32px] p-6 lg:p-10 border border-white/50 dark:border-white/10">
          <img
            src="/decor/plus-cluster.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 -top-4 hidden w-24 opacity-80 lg:block"
          />

          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="inline-block bg-brand-purple text-white font-bold py-2 px-7 rounded-full text-base">
                Projects
              </div>
              <h2 className="mt-5 text-3xl lg:text-4xl font-bold tracking-tight text-brand-navy dark:text-white">
                Selected works and shipped ideas.
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:gap-5 lg:grid-cols-2">
            {paginatedProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="h-full"
              >
                <div className="flex h-full flex-col overflow-hidden rounded-[26px] border border-brand-purple/10 bg-[#faf7ff] dark:bg-slate-950/60">
                  <div className="relative overflow-hidden border-b border-brand-purple/10">
                    <img
                      src={
                        projectDecor[
                          (((currentPage - 1) * projectsPerPage) + index) % projectDecor.length
                        ]
                      }
                      alt=""
                      aria-hidden="true"
                      className={`pointer-events-none absolute z-10 opacity-90 ${
                        index % 2 === 0
                          ? "bottom-3 right-3 w-20 sm:w-24"
                          : "right-4 top-12 w-16 sm:w-20"
                      }`}
                    />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="aspect-[12/5] w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="pr-2 text-xl lg:text-2xl font-bold text-brand-navy dark:text-white">
                        {project.title}
                      </h3>
                      <span className="shrink-0 rounded-full bg-brand-purple/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-purple">
                        {project.kind}
                      </span>
                    </div>

                    <p className="mt-4 flex-1 text-sm leading-7 text-brand-navy/75 dark:text-white/75">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-white/90 dark:bg-white/10 border border-brand-purple/15 px-3 py-1.5 text-xs font-semibold text-brand-navy/80 dark:text-white/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand-navy px-5 py-3 text-sm font-bold text-white transition-all hover:bg-brand-black dark:bg-white dark:text-brand-navy dark:hover:bg-gray-200"
                    >
                      View Project
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-brand-purple/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-brand-navy/60 dark:text-white/60">
              Page {currentPage} of {totalPages}
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={currentPage === 1}
                className="inline-flex items-center gap-2 rounded-full border border-brand-purple/15 bg-white/90 px-4 py-2 text-sm font-semibold text-brand-navy transition disabled:cursor-not-allowed disabled:opacity-45 dark:bg-white/10 dark:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Prev
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, index) => {
                  const page = index + 1;
                  const isActive = page === currentPage;

                  return (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className={`h-10 w-10 rounded-full text-sm font-bold transition ${
                        isActive
                          ? "bg-brand-purple text-white"
                          : "bg-white/90 text-brand-navy hover:bg-brand-purple/10 dark:bg-white/10 dark:text-white"
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                disabled={currentPage === totalPages}
                className="inline-flex items-center gap-2 rounded-full border border-brand-purple/15 bg-white/90 px-4 py-2 text-sm font-semibold text-brand-navy transition disabled:cursor-not-allowed disabled:opacity-45 dark:bg-white/10 dark:text-white"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
