import React, { useEffect, useState} from 'react'
import { useDebounce } from 'use-debounce'
import { FaSearch } from 'react-icons/fa';

import { useResultContext } from '../contexts/ResultContextProvider'
import  { Links } from './Links'

export const Search = () => {
  const [text, setText] = useState("Apple");
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 500);

  useEffect(() => {
    if(debouncedValue) setSearchTerm(debouncedValue)
  }, [debouncedValue])

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
        <input
          value={text}
          type="text"
          className="sm:w-96 w-80 h-10 dark:bg-gray-100 border border-black rounded shadow-sm outline-none pl-12 p-6 text-black hover:shadow-lg" 
          placeholder="Search FinderLand"
          onChange={(e) => setText(e.target.value)}
        />
        {text && (
          <button type="button" 
          className="absolute top-6 right-4 transform -translate-y-1/2 text-xl text-gray-600" 
          onClick={() => setText("")} >
            Clear
          </button>
        )}
        <FaSearch className="absolute top-6 transform -translate-y-1/2 left-4 text-gray-600" />
        <Links />
    </div>
  )
}
