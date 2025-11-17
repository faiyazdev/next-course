import { integer, pgEnum, pgTable, text } from "drizzle-orm/pg-core";
import { createdAt, updatedAt, id } from "../schemaHelper";
import { relations } from "drizzle-orm";
import { CourseProductTable } from "./courseProduct";

export const productStatuses = ["public", "private"] as const;
export type ProductStatus = (typeof productStatuses)[number];
export const productStatusEnum = pgEnum("product_status", productStatuses);

export const ProductTable = pgTable("products", {
  id,
  name: text().notNull(),
  description: text().notNull(),
  imagePath: text().notNull(),
  priceInDollars: integer().notNull(),
  status: productStatusEnum().default("private").notNull(),
  createdAt,
  updatedAt,
});

export const ProuductRelationships = relations(ProductTable, ({ many }) => ({
  courseProducts: many(CourseProductTable),
}));
