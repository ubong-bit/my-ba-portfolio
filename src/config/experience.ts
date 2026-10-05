export interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  current: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "10Alytics",
    role: "Business Analyst Consultant",
    period: "2026 - Present",
    location: "Ontario, Canada",
    description:
      "Delivering business analysis consulting services across multiple client projects, focusing on requirements engineering, process optimization, and Agile delivery.",
    responsibilities: [
      "Requirements gathering and elicitation through stakeholder interviews and workshops",
      "BPMN 2.0 process modeling for AS-IS and TO-BE state documentation",
      "Stakeholder workshops facilitation and communication management",
      "BRD and FRD documentation with traceable user stories and acceptance criteria",
      "Agile ceremonies participation: Daily Standup, Sprint Planning, Backlog Grooming",
      "JIRA and Confluence administration for project tracking and documentation",
    ],
    current: true,
  },
  {
    id: 2,
    company: "Previous Role",
    role: "Business & Data Analyst",
    period: "2023 - 2025",
    location: "Ontario, Canada",
    description:
      "Applied transferable analytical and communication skills to support business operations, reporting, and cross-functional collaboration.",
    responsibilities: [
      "Stakeholder communication across business and technical teams",
      "Data analysis and reporting using Excel and SQL to support decision-making",
      "Problem solving and root cause analysis for operational challenges",
      "Documentation of processes, meeting notes, and project artifacts",
      "Cross-functional collaboration to deliver project milestones on time",
    ],
    current: false,
  },
];
