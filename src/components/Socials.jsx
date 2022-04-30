import React from 'react'
import footerImg from '../assets/footer.png'
import { FaInstagramSquare,FaFacebook,FaTwitter } from 'react-icons/fa'

const Socials = () => {
  return (
	<div className='relative w-full max-h-[450px]'>
		<img src={footerImg} alt="/" className='max-w-full max-h-[450px] mx-auto'/>
		<div className='absolute w-full h-full top-0 bg-white/30 grid justify-center pt-4 md:pt-8 pb-16 gap-4'>
			
			<div className='grid justify-center '>
				<h2 className='md:text-2xl font-bold'>we're social</h2>
			</div>

			<div className='grid grid-cols-3'>
				<FaInstagramSquare className='w-8 h-8 md:w-14 md:h-14 mx-6 hover:cursor-pointer'/>
				<FaFacebook className='w-8 h-8 md:w-14 md:h-14 mx-6 cursor-pointer'/>
				<FaTwitter className='w-8 h-8 md:w-14 md:h-14 mx-6 cursor-pointer'/>
			</div>

			<div className='grid justify-center'>
				<h2 className='md:text-3xl font-bold text-orange-500'>join our mailing list</h2>
			</div>

			<div>
				<input type="email" placeholder='email' className='p-1 md:px-2 md:py-1 mr-3 outline-none'/>
				<button className='bg-yellow-400 text-black uppercase p-1 md:px-4 md:py-1 ml-3'>subscribe</button>
			</div>
		</div>
	</div>
  )
}

export default Socials