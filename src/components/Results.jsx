import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from './contexts/ResultContextProvider';
import { Loading } from './Loading';

export const Results = () => {
  const { results, isLoading, getResults, searchTerm} = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchTerm !== '') {
      if (location.pathname === '/videos') {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);


  if(isLoading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {results?.map(({link, title}, index) => (
            <div className='md:w-2/5 w-full' key={index}>
              <a href={link} target="_blank" rel='noreferrer'>
                <p className='text-sm'>
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      )
    case '/image':
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.map(({ image, link: { href, title } }, index) => (
            <a href={href} target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-5">
              <img src={image?.src} alt={title} loading="lazy" />
              <p className="sm:w-36 w-36 break-words text-sm mt-2">
                {title}
              </p>
            </a>
          ))}
        </div>
      );
    case '/news':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56 item-center'>
          {results?.map(({links, id, source, title}) => (
            <div className='md:w-2/5 w-full' key={id}>
              <a href={links?.[0].href} target="_blank" rel='noreferrer' className='hover:underline'>
                <p className='text-lg dark:text-blue-300 text-blue-700'>
                  {title}
                </p>
                <div className='flex gap-4'>
                  <a href={source?.href} target="_blank" rel='noreferrer'>
                    {source?.href}
                  </a>
                </div>
              </a>
            </div>
          ))}
        </div>
      )
    case '/videos':
      return (
        <div className='flex flex-wrep'>
          {results.map((video, index) => (
            <div key={index} className='p-2'>
              <ReactPlayer url={video.additional_links?.[0].href} control width='355px' height='200px' />
            </div>
          ))}
        </div>
      )
  
    default:
      return 'Error';
  }
}
