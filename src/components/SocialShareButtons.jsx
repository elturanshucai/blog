import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaTwitterSquare, FaRedditSquare, FaWhatsappSquare } from 'react-icons/fa'

export default function SocialShareButtons({ url, title }) {
    return (
        <div className='w-full flex justify-between'>
            <Link target='_blank' rel='noreferrer' to="https://www.facebook.com">
                <FaFacebookSquare className='text-[#3b5998] w-12 h-auto'/>
            </Link>
            <Link target='_blank' rel='noreferrer' to="https://www.twitter.com">
                <FaTwitterSquare className='text-[#00acee] w-12 h-auto'/>
            </Link>
            <Link target='_blank' rel='noreferrer' to="https://www.reddit.com">
                <FaRedditSquare className='text-[#ff4500] w-12 h-auto'/>
            </Link>
            <Link target='_blank' rel='noreferrer' to="https://www.whatsapp.com">
                <FaWhatsappSquare className='text-[#25d366] w-12 h-auto'/>
            </Link>
        </div>
    )
}
