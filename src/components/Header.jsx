import React from 'react'
import headerImg from '../assets/header.webp';

const Header = () => {
  return (
	 <div className='w-full cursor-pointer'>
		 <img src={headerImg} alt='/' className='w-full max-h-[500px]' />
	 </div>
  )
}

export default Header