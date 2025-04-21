import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, optio rerum. Accusantium eveniet inventore necessitatibus ipsam quaerat quod placeat qui minima non molestias. Odio harum, voluptatibus quisquam quas rerum illum!</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Java Script</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React js</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Node js</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Next js</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
       <div className="about-achivements">
       <div className="about-achivement">
            <h1>3+</h1>
            <p>projects completed</p>
        </div>

        <div className="about-achivement">
            <h1>1</h1>
            <p>gfg certeficate hackfest</p>
        </div>

        <div className="about-achivement">
            <h1>1</h1>
            <p>internship certeficate</p>
        </div>
        
       </div>
    </div>
  )
}

export default About
