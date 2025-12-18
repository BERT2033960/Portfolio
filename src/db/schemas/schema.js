import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const projets = sqliteTable("projets", {
  id: text("id").primaryKey(),
  title: text("title"),
  imagelink: text("imagelink"),
  description: text("description"),
  minidescription: text("minidescription"),
  lien: text("lien"),
  technoutilises: text("technoutilises"),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});
