// src/_components/PageProjet.js
import React from "react";
import Link from "next/link";

const PageProjet = ({ project }) => {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12">

      {/* retour */}
      <Link
        href="/projet"
        className="mb-6 inline-block text-sm text-neutral-400 hover:text-emerald-400 transition"
      >
        ← Retour aux projets
      </Link>

      {/* titre */}
      <h1 className="mb-2 text-3xl font-semibold">
        {project.title}
      </h1>

      {/* mini description */}
      {project.minidescription && (
        <p className="mb-6 text-neutral-400">
          {project.minidescription}
        </p>
      )}

      {/* lien externe */}
      {project.lien && (
        <div className="mb-6">
          <a
            href={project.lien}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md border border-emerald-500 px-4 py-2 text-sm text-emerald-400 hover:bg-emerald-500 hover:text-black transition"
          >
            Voir le projet
          </a>
        </div>
      )}

      {/* image */}
      <div className="mb-8 overflow-hidden rounded-lg border border-neutral-800">
        <img
          src={project.imagelink}
          alt={project.title}
          className="w-full object-cover"
        />
      </div>

      {/* description longue */}
      <p className="leading-relaxed text-neutral-300 whitespace-pre-line">
        {project.description}
      </p>

      {/* technologies */}
      {project.technoutilises && (
        <div className="mt-10 border-t border-neutral-800 pt-4">
          <p className="text-sm text-neutral-400 mb-1">
            Technologies utilisees
          </p>
          <p className="text-sm font-mono text-neutral-300">
            {project.technoutilises}
          </p>
        </div>
      )}

    </article>
  );
};

export default PageProjet;
