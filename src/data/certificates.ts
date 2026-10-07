export type Certificate = {
  title: string;
  organization: string;
  status: "Completed" | "In Progress" | "Planned";
  year?: string;
  credentialUrl?: string;
};

export const certificates: Certificate[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    status: "Planned",
  },
];