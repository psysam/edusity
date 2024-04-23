import React from 'react'
import './About.css'
import about from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=> setPlayState(true)} />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ratione?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, doloribus?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat?</p>
      </div>
    </div>
  )
}

export default About
