import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container' id='hero-container-id'>
        <div className='hero-content'>
            <h2>Building Digital Experiences that Inspire</h2>
            {/* <p>
                Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning 
                Web Solutions 
            </p> */}
            <p>
            Hello, I’m Vivek Goswami, a Full Stack Developer.<br/><br/>

            I’m passionate about turning ideas into functional, user-friendly applications.
            With a solid foundation in both front-end and back-end technologies,<br/> 
            I thrive on creating seamless digital experiences.<br/> 
            Whether it’s crafting elegant UIs or optimizing database queries,<br/> 
            I enjoy solving complex problems.

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
        </div>
    </section>
  )
}

export default Hero
