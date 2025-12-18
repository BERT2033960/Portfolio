// src/app/_components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col gap-2 text-right">
      <a
        href="mailto:thomas.berube@email.com"
        className="hover:text-emerald-400 transition"
      >
        berube.thomas02@gmail.com
      </a>

      <a
        href="https://github.com/BERT2033960"
        target="_blank"
        className="hover:text-emerald-400 transition font-mono"
      >
        github
      </a>
    </div>
  );
};

export default Contact;
