import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from '../MobileNav/MobileNav'
import logo from '../../assets/Images/slack.png';
import menuIcon from '../../assets/Images/menu2.png'; // Path to your menu icon
import closeIcon from '../../assets/Images/close.png'; // Path to your close icon

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const toggleMenu = () => {
		setOpenMenu(!openMenu);
	}
  return (
	<>
		<MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
		<nav className='nav-wrapper'>
			<div className="nav-content">
				  <img className='logo' src={logo} alt="" style={{ width: '80px', height: 'auto' }} />

				<ul>
					<li>
						<a className='menu-item' >Home</a>
					</li>
					  <li>
						  <a className='menu-item'>Skills</a>
					  </li>
					  <li>
						  <a className='menu-item'>Work Experience</a>
					  </li>
					  <li>
						  <a className='menu-item' >Contact Me</a>
					  </li>
					  <button className='contact-btn' onClick={() =>{}}>Hire Me</button>
				</ul>

				 
				<button className="menu-btn" onClick={toggleMenu}>
					  <img
						  src={openMenu ? closeIcon : menuIcon}
						  alt={openMenu ? 'Close Menu' : 'Open Menu'}
						  style={{ width: '30px', height: '30px' }} // Adjust size as needed
					  />
				</button>
			</div>
		</nav>
	  </>
  )
}

export default Navbar