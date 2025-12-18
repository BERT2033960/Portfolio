// src/_components/PageProjet.js
import React from "react";
import Link from "next/link";

const PageProjet = ({ project }) => {
  return (
    <article className="mx-auto max-w-3xl">
      <Link
        href="/projet"
        className="mb-6 inline-block text-sm text-neutral-400 hover:text-emerald-400 transition"
      >
        ← Retour aux projets
      </Link>

      <h1 className="mb-4 text-3xl font-semibold">
        {project.title}
      </h1>

      <div className="mb-6 overflow-hidden rounded-lg border border-neutral-800">
        <img
          src={project.imagelink}
          alt={project.title}
          className="w-full object-cover"
        />
      </div>

      <p className="leading-relaxed text-neutral-300">
        {project.description}
      </p>

      <div className="mt-8 border-t border-neutral-800 pt-4 text-sm text-neutral-500 font-mono">
        Projet backend — API, base de données, authentification
      </div>
    </article>
  );
};

export default PageProjet;
