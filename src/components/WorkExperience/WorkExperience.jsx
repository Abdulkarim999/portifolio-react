import React, { useRef } from 'react'
import "./WorkExperience.css"
import { WORK_EXPERIENCE } from '../../utils/data'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WorkExperience = () => {
	const sliderRef = useRef();
	const settings = {
		dots:false,
		infinite:true,
		speed:500,
		slidesToShow:2,
		slidesToScroll:1,
		arrows:false,
		responsive: [
			{
				breakpoint:769,
				setting: {
					slidesToShow:1,
					slidesToScroll:1,
				},
			},
		],
	};

	const slideRight = () => {
		sliderRef.current.slickNext();
	}

	const slideLeft = () => {
		sliderRef.current.slickPrev();
	}


  return (
	<section className='experience-container'>
		<h5>Work Experience</h5>

		<div className="experience-content">
			  <div className="arrow-right" onClick={slideRight}>
				  <img src="https://cdn-icons-png.flaticon.com/128/556/556690.png" alt="" style={{ width: '25px', height: 'auto' }} />
			</div>
			  <div className="arrow-left" onClick={slideLeft}>
				  <img src="https://cdn-icons-png.flaticon.com/128/1634/1634157.png" alt="" style={{ width: '20px', height: 'auto' }} />
			  </div>
			  <Slider ref={sliderRef} {...settings}>
			{WORK_EXPERIENCE.map((item) => (
				<ExperienceCard key={item.title} details={item} />
			))}
			</Slider>
		</div>
	</section>
  )
}

export default WorkExperience