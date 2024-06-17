import { Copyright } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-20 pb-12 flex justify-center flex-col items-center'>
      <div className='w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
            <div>
                <h1 className='text-[25px] uppercse font-semibold text-black mb-4 '>Nasa Shop</h1>
                <p className='text-sm text-black opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum exercitationem quae eos.</p>
                <p className='text-black opacity-80 mt-6 text-base '>(+000) 1234 435 990 - info@example.com</p>
            </div>
            <div className='lg:mx-auto gap-2 flex flex-col'>
                <h1 className='footer__title'>information</h1>
                <p className='footer__link'>About Us</p>
                <p className='footer__link'>Privacy Policy</p>
                <p className='footer__link'>Return Privacy</p>
                <p className='footer__link'>Drop Shipping</p>


            </div>
            <div className='lg:mx-auto gap-2 flex flex-col'>
                <h1 className='footer__title'>Account</h1>
                <p className='footer__link'>Dashboard</p>
                <p className='footer__link'>My Orders</p>
                <p className='footer__link'>Account Details</p>
                <p className='footer__link'>Track Orders</p>


            </div>
            <div className='lg:mx-auto gap-2 flex flex-col'>
                <h1 className='footer__title'>Shop</h1>
                <p className='footer__link'>Affilate</p>
                <p className='footer__link'>Best Sellers</p>
                <p className='footer__link'>Latest Product</p>
                <p className='footer__link'>Sale Products</p>


            </div>
      </div>
      <div className='mt-8 lg:flex grid grid-cols-1 gap-6 sm:grid-cols-2 justify-between w-4/5 mx-auto'>
            <p className='text-sm text-black opacity-45 '>@ Copyright webdevwarriors 2024</p>
            <Copyright/>
      </div>
    </div>
  )
}

export default Footer
