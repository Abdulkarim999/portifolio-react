import React from 'react'
import "./Hero.css"
import logo1 from '../../assets/Images/js.png';
import logo2 from '../../assets/Images/python.png';
import logo3 from '../../assets/Images/html-5.png';
import logo4 from '../../assets/Images/css-3.png';

const Hero = () => {
  return (
	<section className='hero-container'>
		<div className="hero-content">
		<h2>Building Digital Experience That Inspire</h2>
		<p>
			Passinate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions
		</p> 
		  </div>

		  <div className="hero-img">
			<div>
				<div className="tech-icon">
					<img src={logo1} alt="" />
				</div>
				<img src={logo2} alt="" />
			</div>

			<div>
				<div className="tech-icon">
					<img src={logo3} alt="" />
				</div>
				  <div className="tech-icon">
					  <img src={logo4} alt="" />
				  </div>
				  <div className="tech-icon">
					  <img src={logo2} alt="" />
				  </div>
			</div>
		  </div>
	</section>
  )
}

export default Hero