import React from 'react'
import { Link } from 'react-router-dom'

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Zak</span> 👋
      <br/>
      A Software Developer from Brisbane.
    </h1>
  ),
  2: (
    <InfoBox 
      text="Worked with xxxxx and xxxxxxxxxxxx"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox 
      text="Projects were xxxxx and xxxxxxxxxxxx"
      link="/projects"
      btnText="My projects"
    />
  ),
  4: (
    <InfoBox 
      text="Looking for a dev? Get in touch with me!"
      link="/contact"
      btnText="Let's chat"
    />
  ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null
}

export default HomeInfo