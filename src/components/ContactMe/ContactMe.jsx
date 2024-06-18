import React from 'react'
import "./ContactMe.css"
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
	<section className='contact-container'>
		<h5>Contact Me</h5>

		<div className="contact-content">
			<div style={{flex:1}}>
				<ContactInfoCard
					  iconUrl="https://cdn-icons-png.flaticon.com/128/807/807303.png"
				text="dullybenzema@gmail.com"
				/>
				  <ContactInfoCard
					  iconUrl="https://cdn-icons-png.flaticon.com/128/807/807303.png"
					  text="https://github.com/Makix-x"
				  />
			</div>
			 <div style={{ flex: 1 }}>
				<ContactForm />
			 </div>
		</div>
	</section>
  )
}

export default ContactMe