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
        clipId: "fec81361-56f5-4d2f-a877-46f8a0377239",
        socialpostId: "1d563973-2052-496b-a923-973ea0e61124",
        emailId: "98941726-85b3-4ba1-9f71-e7ded862665d",
      },
      {
        label: "Youtube",
        type: "youtube",
        clipId: "3d44738b-3843-472f-8316-35a4605eb96e",
        socialpostId: "blog-003",
        emailId: "email-003",
      },
    ],
  },
  {
    id: "workflow-002",
    data: [
      {
        label: "LinkedIn",
        type: "linkedin",
        clipId: "fec81361-56f5-4d2f-a877-46f8a0377239",
        socialpostId: "1d563973-2052-496b-a923-973ea0e61124",
        emailId: "98941726-85b3-4ba1-9f71-e7ded862665d",
      },
      {
        label: "Youtube",
        type: "youtube",
        clipId: "3d44738b-3843-472f-8316-35a4605eb96e",
        socialpostId: "blog-003",
        emailId: "email-003",
      },
    ],
  },
  {
    id: "workflow-003",
    data: [
      {
        label: "LinkedIn",
        type: "linkedin",
        clipId: "fec81361-56f5-4d2f-a877-46f8a0377239",
        socialpostId: "1d563973-2052-496b-a923-973ea0e61124",
        emailId: "98941726-85b3-4ba1-9f71-e7ded862665d",
      },
      {
        label: "Youtube",
        type: "youtube",
        clipId: "3d44738b-3843-472f-8316-35a4605eb96e",
        socialpostId: "blog-003",
        emailId: "email-003",
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
