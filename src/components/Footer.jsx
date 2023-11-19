import React from 'react'
import { Link } from "react-router-dom"
import images from "../constants/images"
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram, AiFillHeart } from "react-icons/ai"
import { FaFacebook } from "react-icons/fa"
import { BsTelegram } from "react-icons/bs"

export default function Footer() {
  return (
    <section className='bg-dark-hard'>
      <footer className='container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10'>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">Product</h3>
          <ul className='text-[#959EAD] text-sm mt-5 space-y-4 flex flex-col md:text-base'>
            <Link to='/'>Landingpage</Link>
            <Link to='/'>Features</Link>
            <Link to='/'>Documentation</Link>
            <Link to='/'>Referral Program</Link>
            <Link to='/'>Pricing</Link>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">Services</h3>
          <ul className='text-[#959EAD] text-sm mt-5 space-y-4 flex flex-col md:text-base'>
            <Link to='/'>Documentation</Link>
            <Link to='/'>Design</Link>
            <Link to='/'>Themes</Link>
            <Link to='/'>Illustrations</Link>
            <Link to='/'>UI Kit</Link>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">Company</h3>
          <ul className='text-[#959EAD] text-sm mt-5 space-y-4 flex flex-col md:text-base'>
            <Link to='/'>About</Link>
            <Link to='/'>Terms</Link>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Careers</Link>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">More</h3>
          <ul className='text-[#959EAD] text-sm mt-5 space-y-4 flex flex-col md:text-base'>
            <Link to='/'>Documentation</Link>
            <Link to='/'>License</Link>
            <Link to='/'>Changelog</Link>
          </ul>
        </div>
        <div className='col-span-10 md:order-first md:col-span-4 lg:col-span-2'>
          <img src={images.Logo} alt="logo" className='brightness-0 invert max-h-52 w-full md:mx-0' />
          <p className='text-sm text-dark-light text-center mt-4 mx-auto md:text-left md:text-base'>Build a modern and creative website with elturan</p>
          <ul className='flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start'>
            <li>
              <Link to="/">
                <AiOutlineTwitter className='w-6 h-auto' />
              </Link>
            </li>
            <li>
              <Link to='/'>
                <AiFillYoutube className='w-6 h-auto' />
              </Link>
            </li>
            <li>
              <Link to='/'>
                <AiFillInstagram className='w-6 h-auto' />
              </Link>
            </li>
            <li>
              <Link to='/'>
                <FaFacebook className='w-6 h-auto' />
              </Link>
            </li>
            <li>
              <Link to='/'>
                <BsTelegram className='w-6 h-auto' />
              </Link>
            </li>
          </ul>
        </div>
        <div className='hidden md:flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10'>
          <div className='bg-primary text-white p-3 rounded-full'>
            <AiFillHeart className='w-7 h-auto' />
          </div>
          <p className='font-bold italic text-dark-light'>Copyrigth &copy; 2023. Crafted with love.</p>
        </div>
      </footer>
    </section>
  )
}
