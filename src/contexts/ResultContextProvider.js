import React, { createContext, useContext, useState } from 'react'

const ResultContext = createContext();
const baseUrl = "https://google-search74.p.rapidapi.com";

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState(null)

    // /videos, /images, /search
    const getResults = async(type) => {
        setIsLoading(true);
        setError(null);
    
        try{
            console.log(`${process.env.REACT_APP_API_KEY}`);
            console.log(process.env.REACT_APP_API_KEY);
            const response = await fetch(`${baseUrl}${type}`, {
                method: "GET",
                hostname: "google-search74.p.rapidapi.com",
                port: null,
                headers: {
                    "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
                    "x-rapidapi-host": "google-search74.p.rapidapi.com"
                }
            });

            // const response = null;

            const data = await response.json();

            console.log(data);

            if (data.results && data.results.length > 0) {
                setResults(data.results); 
            }

        } catch (error) {
            console.error("Error fetching results:", error);
            setError("Server may have exceeded the monthly limit or an error occurred.");
        } finally {
            setIsLoading(false);
          }
    }

    return(
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading, error }}>
            { children }
        </ResultContext.Provider>
    );
}

export const useResultContext = () => useContext(ResultContext);