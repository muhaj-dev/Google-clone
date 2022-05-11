import React from 'react'
import { NavLink } from 'react-router-dom'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'

const links = [
    { url: '/search', text: 'All', image: icon1},
    { url: '/image', text: 'News', image: icon2 },
    { url: '/news', text: 'Images' },
    { url: '/videos', text: 'Videos' },
  ];
  
export const Links = () => {
  return (
    <div className='flex sm:justify-around justify-between items-center mt-4'>
        {links.map(({ url, text, image }) =>(
           <NavLink to={url} activeclassname='text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2'>
                <div>
                    <img src={image} alt='searh' width='20px' height='20px' />
                </div>  
               {text}
           </NavLink> 
        ))}
    </div>
  )
}
