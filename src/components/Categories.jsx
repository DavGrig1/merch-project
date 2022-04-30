import React from 'react'
import exclusivesImg from '../assets/categories/exclusives.jpg';
import discountsImg from '../assets/categories/discounts.jpg';
import postersImg from '../assets/categories/posters.jpg';
import shirtsImg from '../assets/categories/shirts.jpg';
import figuresImg from '../assets/categories/figures.jpg';
import lowPricesImg from '../assets/categories/lowPrices.jpg';
import inStockImg from '../assets/categories/inStocks.jpg';
import popupImg from '../assets/categories/popups.jpg';

const Categories = () => {
  
	return (
		<div className='grid gap-3 mx-8 md:mx-24 lg:mx-56 my-3'>

			<div className='grid md:grid-cols-3 gap-x-3 gap-y-3'>
				<div className='relative cursor-pointer'>
					<img src={exclusivesImg} alt='/' className='w-full h-full'/>
                    <span className='absolute bottom-0 text-xl font-bold
                            uppercase px-5 py-2 text-white bg-black/50 w-full'>Exculsives</span>
				</div>
				<div className='relative cursor-pointer'>
					<img src={discountsImg} alt='/'  className='w-full h-full'/>
                    <span className='absolute bottom-0 text-xl font-bold
                            uppercase px-5 py-2 text-white bg-black/50 w-full'>Spring discounts</span>
				</div>
				<div className='relative cursor-pointer'>
				    <img src={postersImg} alt='/'  className='w-full h-full'/>
                    <span className='absolute bottom-0 text-xl font-bold
                            uppercase px-5 py-2 text-white bg-black/50 w-full'>New posters</span>
				</div>
			</div>

			<div className='grid md:grid-cols-2 gap-x-3 gap-y-3'>
				<div className='relative cursor-pointer'>
					<img src={shirtsImg} alt='/' className='w-full h-full'/>
                    <span className='absolute bottom-0 text-xl font-bold
                            uppercase px-5 py-2 text-white bg-black/50 w-full'>Exculsive t-shirts</span>
				</div>
				<div className='relative cursor-pointer'>
					<img src={figuresImg} alt='/'  className='w-full h-full'/>
                    <span className='absolute bottom-0 text-xl font-bold
                            uppercase px-5 py-2 text-white bg-black/50 w-full'>figures and more</span>
				</div>
			</div>

            <div className='grid md:grid-cols-3 gap-x-3 gap-y-3'>
				<div className='relative cursor-pointer'>
					<img src={inStockImg} alt='/' className='w-full h-full'/>
                    <span className='absolute bottom-0 text-xl font-bold
                            uppercase px-5 py-2 text-white bg-black/50 w-full'>Exculsives</span>
				</div>
				<div className='relative cursor-pointer'>
					<img src={popupImg} alt='/'  className='w-full h-full'/>
                    <span className='absolute bottom-0 text-xl font-bold
                            uppercase px-5 py-2 text-white bg-black/50 w-full'>Spring discounts</span>
				</div>
				<div className='relative cursor-pointer'>
				    <img src={lowPricesImg} alt='/'  className='w-full h-full'/>
                    <span className='absolute bottom-0 text-xl font-bold
                            uppercase px-5 py-2 text-white bg-black/50 w-full'>New posters</span>
				</div>
			</div>

		</div>
)
}

export default Categories