// src/app/_components/AboutMe.jsx
import React from "react";

const AboutMe = () => {
  return (
    <section className="mx-auto max-w-3xl space-y-10">

      {/* Intro */}
      <header>
        <h1 className="mb-4 text-3xl font-semibold">
          À propos
        </h1>

        <p className="text-neutral-300 leading-relaxed">
          Je suis Thomas Bérubé, développeur logiciel diplômé en Techniques
          d’Intégration Multimédia, spécialisé dans le développement backend et
          les architectures applicatives. Mon expertise couvre la conception
          d’API, la gestion de bases de données, l’authentification, la sécurité
          ainsi que le développement de fonctionnalités complexes pour des
          applications web modernes.
        </p>

        <p className="mt-4 text-neutral-300 leading-relaxed">
          En parallèle, je possède une expérience pratique en développement de
          jeux vidéo avec Unity et C#, notamment dans la conception de systèmes
          de gameplay, la génération procédurale, les interfaces utilisateur et
          la gestion de données.
        </p>

        <p className="mt-4 text-neutral-300 leading-relaxed">
          Mon parcours académique a été marqué par un stage dont la qualité a
          été reconnue comme exceptionnelle par mon superviseur académique, qui
          a indiqué considéré comme le meilleur stage qu’il ait supervisé en plus de 20 ans d’enseignement. 
          Cette expérience reflète mon
          engagement envers l’excellence technique, l’autonomie et la résolution
          efficace de problèmes.
        </p>

        <p className="mt-4 text-neutral-300 leading-relaxed">
          Je recherche constamment des défis qui me permettent de transformer
          des idées complexes en solutions fiables, performantes et durables.
        </p>
      </header>

      {/* Orientation */}
      <section>
        <h2 className="mb-2 text-xl font-medium text-emerald-400">
          Orientation professionnelle
        </h2>
        <p className="text-neutral-300 leading-relaxed">
          Le développement backend est le domaine dans lequel je suis le plus à
          l’aise et le plus efficace. J’apprécie particulièrement la conception
          de systèmes robustes, la gestion de données, la logique métier et la
          sécurité applicative. J’aime construire les fondations qui permettent
          aux applications d’être fiables, performantes et évolutives.
        </p>
      </section>

      {/* Façon de travailler */}
      <section>
        <h2 className="mb-2 text-xl font-medium text-emerald-400">
          Façon de travailler
        </h2>
        <p className="text-neutral-300 leading-relaxed">
          Je suis quelqu’un d’organisé, méthodique et autonome. J’accorde une
          grande importance à la qualité du code, à la documentation et à la
          maintenabilité des projets. J’aime analyser les problèmes en
          profondeur afin de concevoir des solutions durables plutôt que des
          correctifs temporaires.
        </p>

        <p className="mt-2 text-neutral-300 leading-relaxed">
          J’apprécie également le travail d’équipe et la collaboration avec des
          profils variés, tout en étant capable d’avancer efficacement de façon
          autonome sur des projets complexes.
        </p>
      </section>

      {/* Compétences */}
      <section>
        <h2 className="mb-3 text-xl font-medium text-emerald-400">
          Compétences clés
        </h2>

        <ul className="grid gap-2 text-neutral-300 sm:grid-cols-2 font-mono text-sm">
          <li>Node.js / Express.js</li>
          <li>PHP / JavaScript / TypeScript</li>
          <li>SQL / MySQL / SQLite</li>
          <li>API REST et logique serveur</li>
          <li>Authentification et sécurité</li>
          <li>Unity / C# (développement de jeux)</li>
          <li>Architecture logicielle</li>
          <li>Git / GitHub</li>
        </ul>
      </section>

      {/* Parcours */}
      <section>
        <h2 className="mb-2 text-xl font-medium text-emerald-400">
          Parcours et objectifs
        </h2>

        <p className="text-neutral-300 leading-relaxed">
          Mon parcours inclut le développement d’applications web, la création
          de jeux vidéo et la réalisation de projets techniques complets allant
          de la conception à la mise en production. J’ai également acquis une
          expérience professionnelle dans le service à la clientèle ainsi qu’au
          sein de la réserve militaire, ce qui m’a permis de développer une
          forte discipline, un sens des responsabilités et une excellente
          capacité d’adaptation.
        </p>

        <p className="mt-2 text-neutral-300 leading-relaxed">
          Mon objectif est de poursuivre ma carrière comme développeur backend
          ou full-stack au sein d’une équipe où je pourrai continuer à relever
          des défis techniques, approfondir mes compétences et contribuer à des
          projets ayant un impact concret.
        </p>
      </section>

      {/* Liens */}
      <footer className="border-t border-neutral-800 pt-6 text-sm text-neutral-400">
        <p>
          GitHub :{" "}
          <a
            href="https://github.com/BERT2033960"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline"
          >
            github.com/BERT2033960
          </a>
        </p>

        <p>📍 Saint-Jérôme, Québec</p>
        <p>📧 berube.thomas02@gmail.com</p>
      </footer>

    </section>
  );
};

export default AboutMe;

