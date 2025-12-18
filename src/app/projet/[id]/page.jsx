import React from "react";
import PageProjet from "@/app/_components/PageProjet";
import { db } from "../../../db/index.js";
import { projets } from "../../../db/schemas/schema.js";
import { eq } from "drizzle-orm";
const page = async ({ params }) => {
  const project = await db
    .select()
    .from(projets)
    .where(eq(projets.id, params.id))
    .get();

  if (!project) {
    return <div>Projet introuvable</div>;
  }

  return <PageProjet project={project} />;
};

export default page;
