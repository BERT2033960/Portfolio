import React from "react";
import Link from "next/link";

const Accueil = () => {
  return (
    <main>

      {/* HERO IMAGE */}
      <section className="relative h-[70vh] w-full">
        <img
          src="/hero-backend.jpg"
          alt="Développement backend"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-4xl px-6 space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Thomas Bérubé, Développeur web backend
            </h1>

            <p className="text-lg md:text-xl text-neutral-300 max-w-2xl">
              Je crée des systèmes fiables, performants et maintenables,
              spécialisés dans la logique serveur et la gestion de bases
              de données.
            </p>

            <div className="flex gap-4 pt-4">
              <Link
                href="/projet"
                className="rounded-md bg-emerald-500 px-6 py-3 text-sm font-semibold text-black hover:bg-emerald-400 transition"
              >
                Voir mes projets
              </Link>

              <Link
                href="/contact"
                className="rounded-md border border-neutral-600 px-6 py-3 text-sm font-medium text-neutral-200 hover:bg-neutral-800 transition"
              >
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRESENTATION */}
      <section className="mx-auto max-w-4xl px-6 py-20 space-y-6">
        <h2 className="text-2xl font-semibold">
          Moi
        </h2>

        <p className="text-neutral-300 leading-relaxed max-w-3xl">
          Étudiant en développement web, je me spécialise en backend et en
          conception de systèmes robustes. J’aime travailler avec des bases
          de données, concevoir des APIs claires et construire des
          applications fiables et maintenables.
        </p>
      </section>

    </main>
  );
};

export default Accueil;
