import React from 'react'
import { Link } from 'react-router-dom'

export default function ({ data }) {
    return (
        <div className='flex items-center py-4 overflow-x-auto whitespace-nowrap font-roboto md:text-sm'>
            {data.map((item, index) => (
                <div className='text-black opacity-50 text-xs' key={index}>
                    <Link to={item.link}>{item.name}</Link>
                    {index < data.length - 1 && <span className='px-3'>/</span>}
                </div>
            ))}
        </div>
    )
}
