import React, {useState} from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid'
import './slider.css'
import Slider from 'react-slick/lib/slider'
import { SliderData } from "./SliderData";


const Recommended = ({slides}) => {
	const [imageIndex, setImageIndex] = useState(0)
	const length = slides.length

	const prevSlide = () => {
		setImageIndex(imageIndex === 0 ? length - 1 : imageIndex - 1)
	}

	const nextSlide = () => {
		setImageIndex(imageIndex === length - 1 ? 0 : imageIndex + 1)
	}

	const NextArrow = ({ onclick }) => {
		return (
			<div className='arrow next' onClick={onclick}>
				<ArrowRightIcon 
					className='w-12 hover:bg-black/10 cursor-pointer 
					           rounded-[50%] absolute top-1/2 right-8' 
				/>
			</div>
		)
	}
	const PrevArrow = ({ onclick }) => {
		return (
			<div className='arrow prev' onClick={onclick}>
				<ArrowLeftIcon className='w-12 hover:bg-black/10 cursor-pointer
												  rounded-[50%] absolute top-1/2 left-8'/>
			</div>
		)
	}

	const settings = {
		dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
	}

  	return (
	   <div className='mx-8 md:mx-14 lg:mx-[400px] lg:mt-10 mt-3 mb-6'>
			<h2 className='text-3xl font-bold'>recommended items</h2>

			<Slider {...settings} className='relative flex justify-center items-center' >
				{SliderData.map((item, index) => (

					<div key={index}>
						<img src={item.image} alt="/" className='sm:w-4 sm:h-4 lg:w-52 lg:h-52'/>
					</div>

				))
				}
			</Slider>

	   </div>
)
}

export default Recommended