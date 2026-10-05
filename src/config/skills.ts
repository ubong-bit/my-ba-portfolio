export interface SkillGroup {
  title: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Business Analysis Techniques",
    icon: "ClipboardList",
    skills: [
      "Requirements Elicitation",
      "Stakeholder Analysis & Management",
      "BPMN 2.0 Process Mapping",
      "User Stories & Acceptance Criteria",
      "BRD/FRD Documentation",
      "UAT",
      "GAP Analysis",
      "SWOT Analysis",
      "Process Improvement",
      "Data Analysis",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "Wrench",
    skills: [
      "JIRA",
      "Confluence",
      "Lucidchart",
      "Balsamiq",
      "Microsoft Excel (Advanced)",
      "SQL",
      "Power BI",
      "Draw.io",
      "Microsoft Visio",
    ],
  },
  {
    title: "Methodologies",
    icon: "Compass",
    skills: [
      "Agile Scrum",
      "Waterfall",
      "SDLC",
      "Design Thinking",
      "Lean",
    ],
  },
];
