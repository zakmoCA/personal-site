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
          in healthcare.<br/> <br /> 
          
          To develop my skills, I enrolled in Coder Academy which was a great experience.
          As a Software Developer based in Brisbane, I specialise in writing responsive,
          robust full stack applications, and have experience in React/TypeScript, 
          Ruby on Rails, and Python. <br /> <br /> <br />

         

          Outside of programming, I enjoy running, reading, writing, and creating content! 
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
            My background is in Healthcare, and I recently made the transition to Software! <br /><br />
            
            My most relevant and most recent role is as a Technical Support Engineer, which I was fortunate to begin while in my last semester of
            Coder Academy&apos;s Full-Stack Accelerated Web-Development course. <br /> <br />

            My time as a Technical Support Engineer at Tanda involved resolving customers technical issues by investigating and confirming
            whether the issues were code-base related. If so, I would triage the bugs based on priority,
            and tackle it if it was high priority and otherwise tackle another high priority ticket on our board.

            Beyond the additional customer facing time, the role involved querying logs, reading and understanding
            a large and complex codebase, identifying the source of bugs and shipping fixes, across the stack in
            a Ruby on Rails codebase. <br /><br />
            
            The role, and the exceptional team at Tanda provided me invaluable experience and learning as a 
            budding Developer. Unfortunately my time at Tanda was suddenly and unexpectedly cut short due to illness 
            and I am now keen to rejoin the workforce after taking some time off, as per the doctors orders, 
            regarding this bad bout of physical illness. Thankfully I am now fully recovered, and am excited
            to continue growing in my new career as a Software Developer!
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
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