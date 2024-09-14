import React from 'react'

import { NavLink } from 'react-router-dom'

const links = [
    {url: "./search", text: "All"},
    {url: "./videos", text: "Videos"},
    {url: "./news", text: "News"}
]

export const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
        {links.map(({url, text}) => (
            <NavLink 
              to={url} 
              className={({ isActive }) => 
                `m-2 mb-0 ${isActive ? "text-gray-700 border-b-2 dark:text-gray-200 dark:border-slate-200 border-slate-700 pb-2" : ""}`
              }
            >
            {text}
            </NavLink>
        ))}
    </div>
  )
}
