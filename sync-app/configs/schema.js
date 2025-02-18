import { serial, pgTable, varchar, boolean } from "drizzle-orm/pg-core";

export const USER_TABLE = pgTable("users", {
  id: serial().primaryKey(),
  name: varchar({ length: 655 }).notNull(),

  email: varchar({ length: 655 }).notNull().unique(),
  isMember: boolean().default(false),
});
