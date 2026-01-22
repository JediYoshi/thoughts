// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { index, pgTableCreator } from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `thoughts_${name}`);

export const posts = createTable(
	"thoughts",
	(d) => ({
		id: d.integer().primaryKey().generatedByDefaultAsIdentity(),
		username: d.varchar({ length: 64 }),
		thoughtType: d.integer().notNull().default(0),
		thought: d.varchar({ length: 1024 }),
		createdAt: d.timestamp({ withTimezone: true }).$defaultFn(() => /* @__PURE__ */ new Date()).notNull(),
		updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
	}),
	(t) => ["thoughts"],
);
