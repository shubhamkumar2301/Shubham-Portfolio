import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpeg'

const Hero = () => {
  return (
    <div id='hero' className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span>i'm shubham,</span>  fullstack devloper</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptas vitae odit est, maxime deserunt accusamus quam soluta et error eligendi ut? Nesciunt, dolore! Nisi quo molestiae sit cum nemo.</p>
      <div className='hero-actoin'>
        <div className='hero-connect'> <a href="#contact">Connect with me</a></div>
        <div className='hero-resume'>My resume</div>
      </div>
    </div>
  )
}

export default Hero
