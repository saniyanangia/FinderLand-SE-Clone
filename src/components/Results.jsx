import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { useResultContext } from '../contexts/ResultContextProvider'
import { Loading } from './Loading'

export const Results = () => {
  const { results, isLoading, getResults, searchTerm, error } = useResultContext();
  const location = useLocation(); //images, videos, news etc.

  useEffect(() => {
    if (searchTerm !== "") {
      getResults(`?query=${searchTerm}&limit=20`);
    }
  }, [searchTerm]);
  
  if(isLoading) return <Loading />;

  if (error) return <p className="text-red-500">{error}</p>;

  if (results.length === 0) return <p className="text-black">No results found.</p>;

  const newsResults = results.filter(({ url, title }) =>
    url.includes("news") || title.toLowerCase().includes("news")
  );

  const videoResults = results.filter(({ url }) =>
    url.includes("youtube") || url.includes("vimeo")
  );

  switch (location.pathname) {
    case "/search":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:px-56 items-center">
          {results?.map(({ position, url, title }) => (
            <div key={position} className="p-4 border border-slate-700 dark:border-slate-200 rounded-lg overflow-hidden">
              <a href={url} target="_blank" rel="noreferrer" className="block">
                <p className="text-sm truncate dark:text-gray-200">
                  {url.length > 30 ? `${url.substring(0, 30)}...` : url}
                </p>
                <p className = "text-lg hover:underline dark:text-blue-300 text-blue-600 truncate">
                  {title.length > 30 ? `${title.substring(0, 30)}...` : title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );

    case "/videos":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:px-56 items-center">
          {videoResults?.map(({ position, url, title }) => (
            <div key={position} className="p-4 border border-slate-700 dark:border-slate-200 rounded-lg overflow-hidden">
                  {url && <ReactPlayer url={url} controls width="320px" height="200px" />}
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-600 mt-2 truncate">
                   {title.length > 30 ? `${title.substring(0, 30)}...` : title}
                  </p>
            </div>
          ))}
        </div>
      );  
    
      case "/news":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:px-56 items-center">
            {newsResults?.map(({ url, title }) => (
              <div className="p-4 border border-slate-700 dark:border-slate-200 rounded-lg overflow-hidden">
                <a href={url} target="_blank" rel="noreferrer" className="block">
                  <p className="text-sm truncate dark:text-gray-200">
                    {url.length > 30 ? `${url.substring(0, 30)}...` : url}
                  </p>
                  <p className = "text-lg hover:underline dark:text-blue-300 text-blue-600 truncate">
                    {title.length > 30 ? `${title.substring(0, 30)}...` : title}
                  </p>
                </a>
              </div>
            ))}
          </div>
        ); 

    default:
      return <p className="text-red-500">ERROR: Invalid route.</p>;
  }
}
