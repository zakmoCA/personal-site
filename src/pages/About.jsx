import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 
'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiences, skills } from '../constants'
import CTA from '../components/CTA'

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold
        drop-shadow">Zak</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Hello! I'm Zak, a full-stack developer with a background 
          in healthcare (Respiratory Science). My journey into programming began recently as a curiosity, 
          and it is quickly evolving into an intense compulsion that has driven me to pursue a career as a 
          developer. <br/> <br /> 
          
          To develop my skills, I enrolled in Coder Academy which was a great experience.
          As a Software Developer based in Brisbane, I specialise in writing responsive,
          robust full stack applications, and have experience in React/TypeScript, 
          Ruby on Rails, and Python. <br /> <br />
          
          Since my course I have gained experience as a Technical Support Engineer at a premier Brisbane
          SaaS company, Tanda, which I had to take leave of due to illness at the end of 2023 unfortunately.
          <br /> <br />

          I'm currently back in the job market as I am recovering to full strength, and am particularly 
          interested in Junior Full-Stack Developer positions. My working language/stack is JavaScript/TypeScript, and 
          React as a front-end library, with a Node.js runtime. However, I am fairly language agnostic as 
          I have focused on learning Programming/CS fundamentals above all else, and am a fast learner who 
          can quickly adapt to a tech-stack that I am unfamiliar with. <br /> <br />

          Outside of programming, I enjoy running, reading, writing, and creating content! Beyond family
          and spiritual obligations, I currently have two main goals for the coming decade:
          <br /> <br />
          <ol>
            <li>1. Become a cracking developer</li>
            <li>2. Run the <a 
              href="https://www.destinationtrailrun.com/moab" 
              target="_blank"
              className="underline"
              >
              Moab 240
            </a>, a 240-mile ultramarathon in the deserts and canyons of Moab, Utah! </li>

          </ol>
          
          
        </p>
      </div>
      <div className="py-10 flex flex-col ">
        <h3 className="subhead-text">My skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            .......
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: '#44a8b3',
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base"
                  style={{margin:0}}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li 
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  )
}

export default About