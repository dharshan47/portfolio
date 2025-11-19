export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: "1",
    institution: "SASTRA Deemed to be University",
    degree: "Bachelor of Commerce",
    field: "Commerce",
    startYear: "2022",
    endYear: "2025",
    description:
      "Gained knowledge in core business areas including Accounting, Finance, and Marketing, and graduated with a CGPA of 9.36.",
  },
  {
    id: "2",
    institution: "Town Higher Secondary School",
    degree: "Higher Secondary Certificate ",
    field: "Commerce",
    startYear: "2021",
    endYear: "2022",
    description:
      "Studied core Commerce subjects including Business Mathematics, Economics, and Accountancy, and secured 91% overall.",
  },
];
