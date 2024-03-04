import { exchange, timer, underConstruction } from '../assets/images'

import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nodejs,
  react,
  tailwindcss,
  typescript
} from "../assets/icons"

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  }
]

export const experiences = [
  {
      title: "Technical Support Engineer",
      company_name: "Tanda",
      date: "July 2023 - November 2023",
      iconBg: "#fbc3bc",
      points: [
          "Collaborated closely with clients to comprehensively grasp and troubleshoot technical issues within the platform, ensuring a deep understanding of their concerns and a prompt resolution.",
          "Diagnosed, documented, and successfully resolved bugs within the production codebase, demonstrating a keen eye for detail and a systematic approach to problem-solving.",
          "Wrote clear, detailed tickets documenting bugs along with replication steps, along with detailed Pull-Request bodies detailing the same.",
          "Expertly communicated technical issues and status to a multidisciplinary team also including Sales, Support, and Account Managers.",
          "•	Played a key role in the flow of information between different support levels, maintaining clear and consistent communication with Level 1 Support, and escalating issues to developers when required. This ensured a streamlined and efficient process for addressing customer concerns and escalating critical bugs promptly.",
      ],
  },
  {
      title: "Respiratory Scientist",
      company_name: "Greenslopes Lung Function",
      date: "January 2020 - November 2022",
      iconBg: "#b7e4c7",
      points: [
        "Led and conducted comprehensive Pulmonary Function Tests, ensuring accurate testing, interpretation, and analysis.",
        "Ensured the highest standards of laboratory cleanliness, equipment maintenance, and infection control to uphold a safe, efficient, and well-functioning work environment.",
        "Generated in-depth scientific reports on Pulmonary Function Tests, synthesising complex data into accessible information for physicians to assist in patient diagnosis and treatment planning.",
        "Maintained strong collaborative relationships with the multidisciplinary team, including physicians, nurses, and other healthcare professionals to ensure high-quality patient care.",
        "Implemented effective troubleshooting strategies to address and resolve technical issues promptly, minimising downtime and maintaining optimal lab “Expertly communicated complex pulmonary function testing procedures and results to patients, simplifying scientific jargon into accessible language without compromising accuracy or respect."
      ],
  },
  {
      title: "Sleep Scientist",
      company_name: "Metro North Health",
      date: "August 2021 - July 2022",
      iconBg: "#a2d2ff",
      points: [
        "Performed accurate and timely Polysomnography, contributing to the diagnosis, study, and treatment of sleep disorders.",
        "Conducted meticulous analysis and reporting of Sleep Studies, delivering precise and comprehensive information to aid physicians in treatment planning.",
        "Performed diagnostic and Positive Airway Pressure treatment studies for Obstructive Sleep Apnea patients, significantly enhancing their quality of life and sleep health.",
        "Upheld stringent standards of patient care and confidentiality, adhering to all relevant health and safety guidelines.",
        "Collaborated closely with multidisciplinary teams to facilitate coordinated care, supporting a holistic approach to patient health and wellness.",
        "Excelled in explaining intricate sleep study procedures and findings to patients, creating an atmosphere of trust and understanding through accessible, patient-centred communication."
      ],
  }
]

export const projects = [
  {
      theme: 'btn-back-red',
      name: 'Portfolio site',
      iconUrl: underConstruction,
      description: 'My portfolio site built using React and Tailiwind CSS, and Three.js for 3D graphics rendering.',
      link: 'https://github.com/zakmoCA/zak',
  },
  {
      theme: 'btn-back-red',
      name: 'CML Pomodoro Timer',
      iconUrl: timer,
      description: 'A command-line pomodoro timer application to help boost productivity!',
      link: 'https://github.com/zakmoCA/Command-line-Pomodoro-Timer',
  },
  {
      theme: 'btn-back-red',
      name: 'Book Exchange API',
      iconUrl: exchange,
      description: "A RESTful API for CRUD operations in a 'Book Exchange' application.",
      link: 'https://github.com/zakmoCA/Book-Exchange-API',
  }
]