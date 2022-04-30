import './slider.css'
import Slider from 'react-slick/lib/slider'
import { SliderData } from "./SliderData";


const NewRec = () => {

	const settings = {
		dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
	}

  	return (
	   <div className='mx-8 md:mx-24 lg:mx-56 mt-3 mb-9'>
			<h2 className='text-3xl font-bold mb-2'>recommended items</h2>

			<Slider {...settings} >
				{SliderData.map((item, index) => (

					<div key={index}>
						<img src={item.image} alt="/" className='w-[90%] h-28 md:h-36 lg:h-48 xl:h-64 cursor-pointer justify-center items-center'/>
					</div>

				))
				}
			</Slider>

	   </div>
)
}

export default NewRec