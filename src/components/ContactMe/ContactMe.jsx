import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section className='contact-container'>
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{flex: 1}}>
                <ContactInfoCard 
                iconUrl="./assets/images/email_icon.png"
                text="vivek22_7@live.com"
                />
                <ContactInfoCard 
                iconUrl="./assets/images/git_hub.png"
                text="https://github.com/vivek22-7"
                />
            </div>
            <div style={{flex: 1}}>
              <ContactForm/>
            </div>
        </div>
    </section>
  )
}

export default ContactMe
