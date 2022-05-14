import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { useResultContext } from "../components/contexts/ResultContextProvider";
import { Links } from './Links';

export const Search = () => {
  const { setSearchTerm } = useResultContext();
  const [text, setText] = useState('');
  const [debouncedValue] = useDebounce(text, 300);
  // const setText = setSearchTerm
  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue, setSearchTerm]);


  return (
    <div className="relative sm:ml-40 md:ml-72 sm:-mt-10 mt-3">
      <input
        value={text}
        type="text"
        className="sm:w-80 w-80 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="Search Google or type URL"
        onChange={(e) => setText(e.target.value)}
      />
      {!text && (
        <button type="button" className="absolute top-1.5 right-8 text-2xl text-gray-500 " onClick={() => setText('')}>
          x
        </button>
      )}
      <Links />
     
    </div>
  );
}


// <form className="ui form" onSubmit={this.add}>
// <div className="field">
//         <label>Name</label>
//         <input type="text" 
//         name="name" 
//         placeholder="Name"
//         value={this.state.name}
//         onChange={ (e) => this.setState({name: e.target.value})}/>
//     </div>
//     <div className="field">
//         <label>Email</label>
//         <input type="text" 
//         name="email" 
//         placeholder="Email"
//         value={this.state.email}
//         onChange={ (e) => this.setState({email: e.target.value})}
//         />
//     </div>
//     <button className="ui button blue">
//     <svg className="h-6 w-6 text-gray-400"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
// <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
// </svg>
//     </button>
// </form>