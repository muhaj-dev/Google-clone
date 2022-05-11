import React from 'react'
import { Links } from "./Links"
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: 'All' },
  { url: '/image', text: 'All' },
  { url: '/news', text: 'All' },
  { url: '/videos', text: 'All' },
];
export const Search = () => {
  return (
    <div>
      Search
      <Links />
    </div>
  )
}

