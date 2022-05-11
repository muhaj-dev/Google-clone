import React from 'react'
import { NavLink } from 'react-router-dom'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'

const links = [
    { url: '/search', text: 'All', image: icon1},
    { url: '/image', text: 'Images', image: icon2 },
    { url: '/news', text: 'News', image: icon3 },
    { url: '/videos', text: 'Videos', image: icon4 },
  ];
  
export const Links = () => {
  return (
    <div className='flex sm:justify-around justify-around items-center mt-4' >
        {links.map(({ url, text, image }) =>(
           <NavLink to={url} activeclassname='text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2' className='px-2 flex'>
                <div>
                    <img src={image} alt='searh' width='19px' height='19px' className='mr-2'/>
                </div>  
               {text}
           </NavLink> 
        ))}
    </div>
  )
}
