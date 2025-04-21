import React from 'react'
import './footer.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-left">
               <div className="footer-heading">
               <h1>Shubham</h1>
                <img src={theme_pattern} alt="" />
               </div>
               <p>i'm full stack devloper</p>
            </div>
           
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <div className="footer-bottom-left"> 2025 shubham. All right</div>
            <div className="footer-bottom-right">
                <p>Term & Services</p>
                <p>privacy Policies</p>
                <p>Contact With Me</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
