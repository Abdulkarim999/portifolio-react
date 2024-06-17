import React from 'react';
import "./App.css"
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';

const App = () => {
  return (
	<div>
		<Navbar />
		<div className="container">
			  <Hero />
		</div>
		<Skills />
		
	</div>
  )
}

export default App