import React, { useState,useContext } from 'react'
import './Search.css'
import { ContextApiProvider } from './ContextApi'
import {FaSearch} from 'react-icons/fa'


const Search = () => {
   let{make,setMake,handleSubmit} = useContext(ContextApiProvider)

    
  
    return (
    <div className='search'>
    <h1>Github Users</h1>
    <form onSubmit={handleSubmit} autoComplete="off">
    <input type="text" name="search" id="search" placeholder='Enter your Search here.....' value={make} onChange={(e) => setMake(e.target.value)} />
    <button>Search &nbsp;&nbsp;<FaSearch/></button>
      
      
      </form>
    </div>
  )
}

export default Search;


