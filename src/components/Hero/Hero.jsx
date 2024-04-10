import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>Building Digital Experiences that Inspire</h2>
            <p>
                Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning 
                Web Solutions 
            </p>
        </div>
        <div className='hero-img'>
            <div>
                <div className='tech-icon'>
                    <img src="./assets/images/logo192.png" alt="" />
                </div>
                <img className='main-image' src="./assets/images/img.jpg" alt="" />
            </div>
            <div>
                <div className='tech-icon'>
                    <img src="./assets/images/html.png" alt="" />
                </div>
            </div>
            <div>
                <div className='tech-icon'>
                    <img src="./assets/images/css-3.png" alt="" />
                </div>
            </div>
            <div>
                <div className='tech-icon'>
                    <img src="./assets/images/javascript.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
