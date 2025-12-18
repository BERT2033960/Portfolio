// src/_components/PageDesProjets.js
import React from "react";
import { db } from "../../db/index.js";
import { projets } from "../../db/schemas/schema.js";
import Link from "next/link";

const PageDesProjets = async () => {
  const allProjects = await db.select().from(projets).all();

  return (
    <section>
      <h1 className="mb-8 text-3xl font-semibold">
        Projets
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allProjects.map((p) => (
          <Link
            key={p.id}
            href={`/projet/${p.id}`}
            className="group"
          >
            <article className="flex h-full flex-col overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950 transition hover:border-emerald-500/50">
              
              <div className="aspect-video overflow-hidden bg-neutral-900">
                <img
                  src={p.imagelink}
                  alt={p.title}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col gap-2 p-4">
                <h3 className="text-lg font-medium text-neutral-200 group-hover:text-emerald-400 transition">
                  {p.title}
                </h3>

                <p className="text-sm text-neutral-400 line-clamp-3">
                  {p.description}
                </p>

                <span className="mt-2 font-mono text-xs text-neutral-500">
                  Voir le projet →
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PageDesProjets;
