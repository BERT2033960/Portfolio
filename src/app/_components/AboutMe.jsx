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
          Je suis Thomas Bérubé, développeur web orienté back-end, actuellement
          étudiant en Techniques d’Intégration Multimédia au cégep de
          Saint-Jérôme. Je suis passionné par la logique, les bases de données et
          les systèmes qui se trouvent derrière les interfaces.
        </p>
      </header>

      {/* Orientation */}
      <section>
        <h2 className="mb-2 text-xl font-medium text-emerald-400">
          Orientation professionnelle
        </h2>
        <p className="text-neutral-300 leading-relaxed">
          J’ai développé un fort intérêt pour le développement web back-end,
          particulièrement tout ce qui touche la gestion de données,
          l’architecture logique et la sécurité. Mon expérience dans le cours
          Web 4 a confirmé que c’est dans ce domaine que je suis le plus à
          l’aise et le plus efficace.
        </p>
      </section>

      {/* Facon de travailler */}
      <section>
        <h2 className="mb-2 text-xl font-medium text-emerald-400">
          Façon de travailler
        </h2>
        <p className="text-neutral-300 leading-relaxed">
          Je suis quelqu’un de très organisé, patient et concentré. Je travaille
          particulièrement bien dans des environnements structurés, avec des
          objectifs clairs. J’ai tendance à être autonome et méthodique, ce qui
          me permet d’avancer efficacement même sur des tâches longues ou
          complexes.
        </p>
        <p className="mt-2 text-neutral-300 leading-relaxed">
          Je suis conscient que la communication est un point que je cherche à
          améliorer, surtout lorsqu’il s’agit de vulgariser des concepts
          techniques. C’est un aspect sur lequel je travaille activement pour
          devenir un meilleur collaborateur.
        </p>
      </section>

      {/* Competences */}
      <section>
        <h2 className="mb-3 text-xl font-medium text-emerald-400">
          Compétences clés
        </h2>

        <ul className="grid gap-2 text-neutral-300 sm:grid-cols-2 font-mono text-sm">
          <li>PHP / Node.js / JavaScript</li>
          <li>SQL / MySQL / SQLite</li>
          <li>APIs et logique serveur</li>
          <li>Authentification et sécurité</li>
          <li>Unity / C# (logique de jeu)</li>
          <li>Organisation et gestion du temps</li>
        </ul>
      </section>

      {/* Parcours */}
      <section>
        <h2 className="mb-2 text-xl font-medium text-emerald-400">
          Parcours et objectifs
        </h2>
        <p className="text-neutral-300 leading-relaxed">
          Mon parcours inclut des projets web, des jeux et de la préproduction,
          ainsi que des expériences professionnelles variées, incluant le
          service à la clientèle et la réserve militaire. Ces expériences m’ont
          permis de développer une discipline de travail, une grande patience
          et un bon sens des responsabilités.
        </p>
        <p className="mt-2 text-neutral-300 leading-relaxed">
          À court et moyen terme, je vise un poste de développeur web back-end ou
          full-stack dans une petite ou moyenne agence, idéalement dans les
          Laurentides ou à Montréal. Mon objectif est de continuer à approfondir
          mes compétences techniques et de m’intégrer durablement dans une
          équipe.
        </p>
      </section>

      {/* Liens */}
      <footer className="border-t border-neutral-800 pt-6 text-sm text-neutral-400">
        <p>
          GitHub :{" "}
          <a
            href="https://github.com/BERT2033960"
            target="_blank"
            className="text-emerald-400 hover:underline"
          >
            github.com/BERT2033960
          </a>
        </p>
        <p>📍 Saint-Jérôme</p>
        <p>📧 berube.thomas02@gmail.com</p>
      </footer>

    </section>
  );
};

export default AboutMe;
