import React from 'react'
import { FaHamburger } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/slices/searchSlice';
import { setViewMore } from '../redux/slices/features/viewMore';

export default function Navbar() {

  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
    dispatch(setViewMore(false));

  }
  const dispatch = useDispatch();
  return (
    <div className="navbar w-full px-4 py-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      
      <div className="top flex items-center justify-between w-full md:w-auto">
        <div className='logo flex flex-col'>
          <span className='text-[#ffebb3] text-3xl md:text-4xl lg:text-5xl font-black leading-6 md:leading-12'>FINDER</span>
          <span className='text-xs md:text-base opacity-70'>What to Cook?</span>
        </div>
        <div className="filter md:hidden">
          <button className='cursor-pointer'>
            <FaHamburger className='text-3xl' />
          </button>
        </div>
      </div>

      <div className="searchbar w-full md:w-auto flex justify-center md:justify-end">
        <input
          type="search"
          onChange={handleSearchChange}
          name="name"
          id="name"
          placeholder='Search for recipes...'
          className='border-[#ffffff85] border-1 rounded-xl outline-none px-3 w-full md:w-[400px] lg:w-[500px] h-12 md:h-10 text-center'
        />
      </div>

      <div className="filter hidden md:block">
        <button className='cursor-pointer'>
          <FaHamburger className='text-3xl'/>
        </button>
      </div>
    </div>
  )
}
