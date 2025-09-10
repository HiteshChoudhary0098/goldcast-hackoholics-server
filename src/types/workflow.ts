export interface WorkflowData {
  label: string;
  type:
    | "linkedin"
    | "twitter"
    | "facebook"
    | "instagram"
    | "youtube"
    | "tiktok";
  clipId: string;
  socialpostId: string;
  emailId: string;
}

export interface Workflow {
  id: string;
  data: WorkflowData[];
}
