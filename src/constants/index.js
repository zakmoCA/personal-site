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
      title: "Lorem ipsum dolor",
      company_name: "Lorem ipsum dolor",
      date: "xx/xx/xx - xx/xx/xx",
      points: [
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
      ],
  },
  {
      title: "Lorem ipsum dolor",
      company_name: "Lorem ipsum dolor",
      date: "xx/xx/xx - xx/xx/xx",
      points: [
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
      ],
  },
  {
      title: "Lorem ipsum dolor",
      company_name: "Lorem ipsum dolor",
      date: "xx/xx/xx - xx/xx/xx",
      points: [
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
      ],
  },
  {
      title: "Lorem ipsum dolor",
      company_name: "Lorem ipsum dolor",
      date: "xx/xx/xx - xx/xx/xx",
      points: [
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
          "Lorem ipsum dolor",
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
  },
  {
      theme: 'btn-back-red',
      name: 'codebuddy',
      iconUrl: underConstruction,
      description: 'In progress.',
      link: 'https://github.com/zakmoCA/codebuddy',
  },
  {
      theme: 'btn-back-red',
      name: 'Custom Interpreter',
      iconUrl: underConstruction,
      description: 'In progress.',
      link: 'https://github.com/zakmoCA/custom-language-and-intepreter',
  }
]