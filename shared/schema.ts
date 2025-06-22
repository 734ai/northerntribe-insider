import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  isAdmin: boolean("is_admin").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const threatReports = pgTable("threat_reports", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  severity: text("severity").notNull(),
  tags: text("tags").array(),
  authorId: integer("author_id").references(() => users.id),
  views: integer("views").default(0),
  published: boolean("published").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const newsletterSubscriptions = pgTable("newsletter_subscriptions", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  email: true,
  password: true,
});

export const insertThreatReportSchema = createInsertSchema(threatReports).pick({
  title: true,
  content: true,
  severity: true,
  tags: true,
});

export const insertNewsletterSubscriptionSchema = createInsertSchema(newsletterSubscriptions).pick({
  email: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertThreatReport = z.infer<typeof insertThreatReportSchema>;
export type InsertNewsletterSubscription = z.infer<typeof insertNewsletterSubscriptionSchema>;

export type User = typeof users.$inferSelect;
export type ThreatReport = typeof threatReports.$inferSelect;
export type NewsletterSubscription = typeof newsletterSubscriptions.$inferSelect;
