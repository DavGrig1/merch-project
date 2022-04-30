import logo from './../assets/logo.jpg'
import { MenuIcon, ShoppingCartIcon, } from '@heroicons/react/outline'

const Navbar = () => {

  return (
	   <div className='flex justify-between relative bg-black text-white h-12'>
		   <div className='flex px-1'>
				<MenuIcon className='w-12 px-2 cursor-pointer'/>
			</div>

		   <div className='flex min-w-[249px]'>
				<img src={logo} alt='/' />
			</div>

			<div className='flex bg-yellow-600'>
				<ShoppingCartIcon className='w-12 px-2 text-black hover:text-white cursor-pointer'/>
			</div>
	  </div>
  )
}

export default Navbar