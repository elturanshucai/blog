import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { images } from '../constants'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { MdKeyboardArrowDown } from "react-icons/md"

const navs = [
    { name: "Home", path: '/', type: "link" },
    { name: "Articles", path: '/', type: "link" },
    {
        name: "Pages", path: '/', type: "dropdown", items: [
            { name: "About us", path: "/about" }, { name: "Contact us", path: "/contact" }
        ]
    },
    { name: "Pricing", path: '/', type: "link" },
    { name: "Faq", path: '/', type: "link" }
]

const NavItem = ({ item }) => {
    return <>
        <li className='relative group'>
            {item.type === "link" ?
                <>
                    <Link to={item.path} className='px-3 py-2 group-hover:text-blue-500 transition-all duration-500'>{item.name}</Link>
                    <span className='text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 opacity-0 group-hover:right-[90%] group-hover:opacity-100'>/</span>
                </> :
                <>
                    <div className='px-3 py-2 group-hover:text-blue-500 transition-all duration-500 flex items-center gap-1'>
                        <span>{item.name}</span>
                        <MdKeyboardArrowDown />
                    </div>
                    <div className="hidden transition-all duration-500 pt-4 absolute bottom-0 left-0 translate-y-full group-hover:block w-max group-hover:left-20 group-hover:translate-y-1 lg:group-hover:left-0 lg:group-hover:translate-y-full">
                        <ul className='flex flex-col shadow-lg rounded-lg overflow-hidden md:bg-white'>
                            {item.items.map(link => (
                                <Link to={link.path} className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft'>{link.name}</Link>
                            ))}
                        </ul>
                    </div>
                </>}
        </li>
    </>
}

export default function Header() {
    const [navVisible, setNavVisible] = useState(false)
    const [top, setTop] = useState(true)
    const navVisibleHandler = () => {
        setNavVisible((curState) => {
            return !curState
        })
    }

    useEffect(() => {
        const scrollHandler = () => {
            window.scrollY > 10 ? setTop(false) : setTop(true)
        }
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [top])
    return (
        <section className={`sticky top-0 left-0 right-0 z-50 bg-white ${top ? "" : "shadow-md"}`}>
            <header className='container mx-auto px-5 flex justify-between py-4 items-center'>
                <div>
                    <img src={images.Logo} alt="logo" className='w-20 cursor-pointer' />
                </div>
                <div className='z-50 lg:hidden'>
                    {navVisible ? <AiOutlineClose onClick={navVisibleHandler} className='w-6 h-6' /> :
                        <AiOutlineMenu onClick={navVisibleHandler} className='w-6 h-6' />}
                </div>
                <div className={`${navVisible ? "right-0" : "-right-full"} flex flex-col lg:flex-row gap-x-9 items-center fixed top-0 bottom-0 lg:static justify-center lg:justify-end w-full lg:w-auto z-[49] bg-dark-hard lg:bg-transparent mt-[94px] lg:mt-0 transition-all duration-300`}>
                    <ul className='flex gap-x-5 font-semibold flex-col lg:flex-row text-white lg:text-dark-soft gap-y-5 items-center'>
                        {navs.map(nav => (
                            <NavItem key={nav.name} item={nav} />
                        ))}
                    </ul>
                    <button className='border-2 border-blue-500 px-6 py-3 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-colors duration-300 mt-5 lg:mt-0'>Sign in</button>
                </div>
            </header>
        </section>
    )
}
