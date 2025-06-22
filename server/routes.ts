import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { insertNewsletterSubscriptionSchema } from "@shared/schema";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Newsletter subscription endpoint
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const data = insertNewsletterSubscriptionSchema.parse(req.body);
      
      // Check if email already exists
      const existing = await storage.getNewsletterSubscriptionByEmail(data.email);
      if (existing) {
        return res.status(400).json({ message: "Email already subscribed" });
      }
      
      const subscription = await storage.createNewsletterSubscription(data);
      res.json({ message: "Successfully subscribed to newsletter", subscription });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid email format",
          errors: error.errors 
        });
      }
      
      console.error("Newsletter subscription error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get threat reports endpoint
  app.get("/api/threat-reports", async (req, res) => {
    try {
      const reports = await storage.getThreatReports();
      res.json(reports);
    } catch (error) {
      console.error("Error fetching threat reports:", error);
      res.status(500).json({ message: "Failed to fetch threat reports" });
    }
  });

  // Get single threat report
  app.get("/api/threat-reports/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const report = await storage.getThreatReportById(id);
      
      if (!report) {
        return res.status(404).json({ message: "Threat report not found" });
      }
      
      // Increment view count
      await storage.incrementThreatReportViews(id);
      
      res.json(report);
    } catch (error) {
      console.error("Error fetching threat report:", error);
      res.status(500).json({ message: "Failed to fetch threat report" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
