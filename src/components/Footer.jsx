import React, {useState} from 'react'

const Footer = () => {
	const [help, setHelp] = useState(false)
	const [about, setAbout] = useState(false)
	const [links, setLinks] = useState(false)

	const helpHandler = () => {
		setHelp(!help)
	}

	const aboutHandler = () => {
		setAbout(!about)
	}

	const linksHandler = () => {
		setLinks(!links)
	}


  return (
	<div className='w-full bg-black text-white grid md:grid-cols-3'>
		<div className='mb-2'>
			<h2 className='text-yellow-400 cursor-pointer md:cursor-default' onClick={helpHandler}>HELP & CUSTOMER SERVICE</h2>
			<div className={!help ? 'hidden md:block' : 'block'}>
				<p className='mb-4'>FAQ</p>
				<p className='mb-4'>Delayed Pre-Orders List</p>
				<p className='mb-4'>Shipping & Returns</p>
				<p className='mb-4'>Contact Us</p>
			</div>
		</div>
		
		<div className='my-2'>
			<h2 className='text-yellow-400 cursor-pointer md:cursor-default' onClick={aboutHandler}>ABOUT US</h2>
			<div className={!about ? 'hidden md:block' : 'block'}>
				<p className='mb-4'>Terms of Service</p>
				<p className='mb-4'>Privacy Policy</p>
				<p className='mb-4'>Do Not Sell My Personal Information</p>
				<p className='mb-4'>About Us</p>
				<p className='mb-4'>Cookie Consent Link</p>
				<p className='mb-4'>Copyright Policy</p>
			</div>
		</div>

		<div className='my-2'>
			<h2 className='text-yellow-400 cursor-pointer md:cursor-default' onClick={linksHandler}>HELPFUL LINKS</h2>
			<div className={!links ? 'hidden md:block' : 'block'}>
				<p className='mb-4'>Sign In</p>
				<p className='mb-4'>Become a Premium Member</p>
				<p className='mb-4'>Delayed Pre-Orders</p>
			</div>
		</div>
	</div>

  )
}

export default Footer