export interface Project {
  id: number;
  title: string;
  category: string;
  problem: string;
  role: string;
  deliverables: string[];
  impact: string;
  tools: string[];
  tags: string[];
  github: string;
  demo: string;
  date: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Checkout Optimization",
    category: "Business Analysis",
    problem:
      "A retail e-commerce platform experienced a 70% cart abandonment rate during the checkout process, causing significant revenue loss and customer drop-off.",
    role: "Business Analyst",
    deliverables: [
      "BRD with 20 documented user stories in JIRA",
      "AS-IS and TO-BE process maps in Lucidchart",
      "Stakeholder interview summaries and requirements traceability matrix",
      "Acceptance criteria for each user story",
    ],
    impact:
      "Proposed optimized checkout flow reducing process steps from 12 to 5 (60% reduction), projected to decrease cart abandonment and improve conversion rate.",
    tools: ["Lucidchart", "JIRA", "Confluence", "Balsamiq"],
    tags: ["BPMN", "JIRA", "BRD", "User Stories"],
    github: "#",
    demo: "#",
    date: "2025",
  },
  {
    id: 2,
    title: "Customer Support Analytics Dashboard",
    category: "Data Analysis",
    problem:
      "The customer support team lacked visibility into ticket volumes, resolution times, and satisfaction trends, making it difficult to identify bottlenecks and measure performance.",
    role: "Business Analyst",
    deliverables: [
      "FRD with 15 functional requirements",
      "Wireframes and mockups created in Balsamiq",
      "KPI definitions and data mapping documentation",
      "Power BI dashboard requirements and data source specification",
    ],
    impact:
      "Delivered a complete requirements package enabling the development team to build a real-time Power BI dashboard, giving support leadership actionable visibility into team performance.",
    tools: ["Balsamiq", "Power BI", "JIRA", "Confluence", "SQL"],
    tags: ["FRD", "Power BI", "Wireframing", "KPI"],
    github: "#",
    demo: "#",
    date: "2025",
  },
  {
    id: 3,
    title: "Loan Application Digital Transformation",
    category: "Process Improvement",
    problem:
      "A bank's manual loan application process involved excessive paperwork, redundant approvals, and long processing times, leading to customer dissatisfaction and operational inefficiency.",
    role: "Business Analyst",
    deliverables: [
      "BRD documenting current-state and future-state requirements",
      "BPMN diagrams mapping the end-to-end loan application workflow",
      "UAT test cases covering critical business scenarios",
      "Requirements workshop facilitation notes and action items",
    ],
    impact:
      "Proposed digital transformation plan reducing manual approval time by 40%, streamlining the loan journey and improving both customer experience and operational throughput.",
    tools: ["Microsoft Visio", "JIRA", "Confluence", "Draw.io"],
    tags: ["BPMN", "UAT", "BRD", "Digital Transformation"],
    github: "#",
    demo: "#",
    date: "2024",
  },
  {
    id: 4,
    title: "Digital Banking Optimization",
    category: "Process Improvement",
    problem:
      "A digital banking platform suffered from fragmented user journeys, inconsistent service workflows, and slow manual approval steps that limited scalability and frustrated users.",
    role: "Business Analyst",
    deliverables: [
      "BRD capturing optimization requirements across banking modules",
      "BPMN diagrams for account opening, transfers, and approval workflows",
      "UAT test cases validating end-to-end digital banking scenarios",
      "Stakeholder workshop summaries and gap analysis report",
    ],
    impact:
      "Proposed platform optimization reducing manual approval time by 60%, creating a more seamless digital banking experience and enabling faster customer onboarding.",
    tools: ["Lucidchart", "JIRA", "Confluence", "Microsoft Visio"],
    tags: ["BPMN", "UAT", "BRD", "Optimization"],
    github: "#",
    demo: "#",
    date: "2024",
  },
];
