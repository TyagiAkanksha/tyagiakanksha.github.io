export type Education = {
  degree: string;
  school: string;
  location: string;
  date: string;
  gpa?: string;
  coursework?: string[];
};

export const education: Education[] = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Arkansas",
    location: "Fayetteville, AR",
    date: "May 2026",
    gpa: "3.83 / 4.0",
    coursework: [
      "Image Processing",
      "Privacy Enhancing Technology",
      "Computer Security",
      "Graph and Combinatorial Algorithms",
      "Full Stack Deep Learning",
      "Machine Learning",
    ],
  },
  {
    degree: "Bachelor of Technology in Information Technology",
    school: "College of Engineering Roorkee (COER)",
    location: "Roorkee, India",
    date: "May 2017",
  },
];
