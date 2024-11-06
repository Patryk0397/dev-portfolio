export interface Role {
  title: string;
  description: string[];
}

export interface Company {
  name: string;
  logo: string;
  startDate: string;
  endDate: string;
  roles: Role[];
  skills: string[];
}

export const companies: Company[] = [
  {
    name: "Entwined",
    logo: "path/to/companyA-logo.png",
    startDate: "2023-03-20",
    endDate: "Present",
    roles: [
      {
        title: "Software Engineer",
        description: [
          "Designed scalable APIs within a microservices architecture, focusing on performance and flexibility.",
          "Managed data effectively with MongoDB, supporting CMS and device monitoring platforms.",
          "Built intuitive front-end applications in VueJS, enhancing usability and CMS functionality.",
          "Oversaw deployment and management of APIs and applications on Google Cloud Platform.",
          "Architected cost-effective software solutions with an emphasis on optimising performance.",
          "Collaborated with the UX team to create high-quality, user-friendly interfaces."
        ]
      },
    ],
    skills: ["JavaScript", "TypeScript", "NodeJS", "GraphQL", "NestJS", "Vue", "TailwindCSS", "MongoDB", "GCP", "Firebase" ]
  },
  {
    name: "DPD",
    logo: "path/to/companyB-logo.png",
    startDate: "2021-03-29",
    endDate: "2023-02-07",
    roles: [
      {
        title: "Software Developer",
        description: [
          "Managed the full lifecycle of a major client integration project, optimising route management performance.",
          "Developed internal depot management tools to improve operational efficiency.",
          "Proactively identified and resolved performance issues using Sentry to ensure smooth operations.",
          "Deployed and maintained APIs, databases, and cloud functions on Google Cloud Platform.",
          "Worked closely with designers and QA to streamline project workflows and uphold high design standards.",
          "Provided mentorship to junior team members, fostering a collaborative and supportive environment."
        ]
      }
    ],
    skills: [ "JavaScript", "ReactJS", "NodeJS", "Bootstrap", "MaterialUI", "GCP", "SQL", "Firebase" ]
  },
  {
    name: "Trakm8",
    logo: "path/to/companyC-logo.png",
    startDate: "2018-05-14",
    endDate: "2021-03-25",
    roles: [
      {
        title: "Software Engineer",
        description: [
          "Proficient in HTML, CSS, and UI design, delivering engaging, high-standard web solutions.",
          "Built quality-driven applications in TypeScript and Angular, with a focus on functionality and robust testing using Jest.",
          "Managed MySQL databases with Sequelize, ensuring efficient data storage, relationships, and access.",
          "Contributed to project design and quality assurance, enhancing solution quality through collaborative improvements.",
          "Built and maintained scalable APIs in NodeJS, focusing on functionality and reliability.",
          "Mentored new team members, facilitating seamless integration into the codebase and workflow."
        ]
      },
    ],
    skills: ["JavaScript", "TypeScript", "Angular", "NodeJS", "SQL" ]
  }
];
