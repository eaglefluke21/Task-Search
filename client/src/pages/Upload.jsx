import React from 'react';
import InsertForm from '../components/InsertForm';
import { NavLink } from "react-router-dom";



const Upload = () => {

   

  return (
    <div className="flex flex-col min-h-screen bg-rose-300">

<div className="flex flex-col justify-center items-center p-8">

        <h1 className=" text-xl text-center font-anta text-black p-20  sm:text-3xl  ">

            Upload Data 

        </h1>

        <NavLink to="/" className="font-quick  text-2xl text-black underline" > Search </NavLink>
</div>

        <InsertForm />
       
       


</div>


  );
};

export default Upload;