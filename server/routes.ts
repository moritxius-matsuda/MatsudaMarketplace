import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().optional(),
  newsletter: z.boolean().default(true)
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactSchema.parse(req.body);
      
      // In a real app, you would store this in a database
      // or send an email. For now, we'll just log it.
      console.log("Contact form submission:", data);
      
      // Add a small delay to simulate network latency
      await new Promise(resolve => setTimeout(resolve, 500));
      
      res.status(200).json({ 
        success: true, 
        message: "Thank you for your message. We will get back to you soon." 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid form data. Please check your inputs and try again." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
