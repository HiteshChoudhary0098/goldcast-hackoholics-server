import express, { Request, Response, Application } from "express";
import cors from "cors";
import { Workflow } from "./types/workflow";

const app: Application = express();
const PORT = process.env.PORT || 33000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample workflow data
const sampleWorkflows: Workflow[] = [
  {
    id: "workflow-001",
    data: [
      {
        label: "LinkedIn",
        type: "linkedin",
        clips: ["fec81361-56f5-4d2f-a877-46f8a0377239"],
        blogpost: ["1d563973-2052-496b-a923-973ea0e61124"],
        socialpost: [],
        email: ["98941726-85b3-4ba1-9f71-e7ded862665d"],
      },
      {
        label: "Youtube",
        type: "youtube",
        clips: ["3d44738b-3843-472f-8316-35a4605eb96e"],
        blogpost: ["blog-003"],
        socialpost: ["social-004", "social-005"],
        email: ["email-003"],
      },
    ],
  },
  {
    id: "workflow-002",
    data: [
      {
        label: "Facebook",
        type: "facebook",
        clips: ["clip-006", "clip-007", "clip-008"],
        blogpost: ["blog-004", "blog-005", "blog-006"],
        socialpost: ["social-006", "social-007"],
        email: ["email-004", "email-005", "email-006"],
      },
      {
        label: "Instagram",
        type: "instagram",
        clips: ["clip-009", "clip-010"],
        blogpost: ["blog-007"],
        socialpost: ["social-008", "social-009", "social-010"],
        email: ["email-007"],
      },
    ],
  },
  {
    id: "workflow-003",
    data: [
      {
        label: "YouTube",
        type: "youtube",
        clips: ["clip-011", "clip-012", "clip-013", "clip-014"],
        blogpost: ["blog-008", "blog-009"],
        socialpost: ["social-011", "social-012"],
        email: ["email-008", "email-009", "email-010"],
      },
    ],
  },
];

// API Routes
app.get("/workflow/:broadcastId/", (req: Request, res: Response) => {
  try {
    res.status(200).json({
      success: true,
      data: sampleWorkflows,
      message: "Workflows retrieved successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

// Health check endpoint
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

// 404 handler
app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(
    `📡 API endpoint: http://localhost:${PORT}/workflow/:broadcastId/`
  );
  console.log(`🏥 Health check: http://localhost:${PORT}/health`);
});

export default app;
