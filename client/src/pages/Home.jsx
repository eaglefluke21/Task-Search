import React from 'react';
import SearchBar from '../components/SearchBar';
import Results from '../components/Result';
import { useState } from 'react';
import { NavLink } from "react-router-dom";


const Home = () => {

    const [results, setResults] = useState([]);

  return (
    <div className="flex flex-col min-h-screen bg-rose-300">

        <div className="flex flex-col justify-center items-center p-8">
        <h1 className=" text-xl text-center font-anta text-black p-20 whitespace-nowrap sm:text-3xl   ">
         Welcome to  Car Search

        </h1>

        <NavLink to="/upload" className="font-quick  text-2xl text-black underline" > Upload </NavLink>

</div>
        <SearchBar setResults={setResults} />
        <Results results={results} />
       


</div>


  );
};

export default Home;