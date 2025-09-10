export interface WorkflowData {
  label: string;
  type:
    | "linkedin"
    | "twitter"
    | "facebook"
    | "instagram"
    | "youtube"
    | "tiktok";
  clips: string[];
  blogpost: string[];
  socialpost: string[];
  email: string[];
}

export interface Workflow {
  id: string;
  data: WorkflowData[];
}
