import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelper";
import { relations } from "drizzle-orm";
import { UserTable } from "./user";
import { LessionTable } from "./Lession-Schema";

export const UserLessionCompleteTable = pgTable(
  "user_lession_complete",
  {
    lessionId: uuid()
      .notNull()
      .references(() => LessionTable.id, { onDelete: "cascade" }),
    userId: uuid()
      .notNull()
      .references(() => UserTable.id, { onDelete: "cascade" }),
    createdAt,
    updatedAt,
  },
  (t) => [primaryKey({ columns: [t.lessionId, t.userId] })]
);

export const UserLessionCompleteRelationships = relations(
  UserLessionCompleteTable,
  ({ one }) => ({
    course: one(LessionTable, {
      fields: [UserLessionCompleteTable.lessionId],
      references: [LessionTable.id],
    }),
    user: one(UserTable, {
      fields: [UserLessionCompleteTable.userId],
      references: [UserTable.id],
    }),
  })
);
