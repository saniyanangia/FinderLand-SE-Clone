import React from 'react'
import { Link } from 'react-router-dom'
import { Search } from './Search'

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 dark:text-gray-300">
        <div className = "flex justify-between items-center space-x-5 w-screen">
            <Link to="/">
                <p className="text-2xl bg-slate-800 dark:bg-slate-400 border border-gray-700 font-bold text-stone-200 py-1 px-2 rounded dark:bg-grey-500 dark:text-gray-900">
                    FinderLand 
                </p>
            </Link>
            <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-l dark:bg-stone-100 dark:text-black bg-gray-900 text-gray-100 border border-black rounded px-2 py-1 hover:shadow-lg">
              {darkTheme ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
        <Search />
    </div>
  )
}
