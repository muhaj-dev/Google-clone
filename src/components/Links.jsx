import React from 'react'
import { NavLink } from 'react-router-dom'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'

const links = [
    { url: '/search', text: 'All', image: icon1, key: 1},
    { url: '/image', text: 'Images', image: icon2, key: 2 },
    { url: '/news', text: 'News', image: icon4, key: 3 },
    { url: '/videos', text: 'Videos', image: icon3, key: 4 },
  ];
  
export const Links = () => {
  return (
    <div className='flex sm:justify-around justify-between items-center mt-4' >
        {links.map(({ url, text, image, key }) =>(
           <NavLink to={url} key={key} activeclassname='text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2' className='m-2 mb-0 flex'>
                <div>
                    <img src={image} alt='search' width='19px' height='19px' className='mr-2'/>
                </div>  
               {text}
           </NavLink>
        ))}
    </div>
  )
}