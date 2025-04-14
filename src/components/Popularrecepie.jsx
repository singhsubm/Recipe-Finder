import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/searchSlice';

export default function Popularrecepie() {
    const dispatch = useDispatch();
    const recepies = ['Chicken Handi', 'Baingan Bharta','Dal fry','Matar Paneer','Sushi','Banana Pancakes','Big Mac','Hot Chocolate Fudge','New York cheesecake','Timbits','']
    const activeClickHandler = (searchitem)=> {
      dispatch(setSearch(searchitem))
    }
  return (
    <div className="popular flex flex-wrap items-center gap-2">
                {
                  recepies.map((recepie, index) => (
                    <h3 onClick={()=> activeClickHandler(recepie)} key={index} className='border-1 cursor-pointer border-[#ffebb3] rounded-xl px-4'>{recepie === ''? 'All' : recepie}</h3>
                  ))
                }

              </div>
  )
}
