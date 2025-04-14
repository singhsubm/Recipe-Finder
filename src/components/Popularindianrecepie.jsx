import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/searchSlice';

export default function Popularindianrecepie() {
    const dispatch = useDispatch();

    const activeClickHandler = (searchitem)=>{
        dispatch(setSearch(searchitem));
    }
    const recepies = [
        'Baingan Bharta',
        'Bread omelette',
        'Dal fry',
        'Matar Paneer',
        'Chicken Handi',
        'Kidney Bean Curry',
        'Nutty Chicken Curry',
        'Recheado Masala Fish',
        'Tandoori chicken',
        '',
      ];
  return (
    <div className="popular flex flex-wrap items-center gap-2">
                {
                    recepies.map((recepie, index) => (
                        <h3 key={index} onClick={()=> activeClickHandler(recepie)} className={`border-1 cursor-pointer rounded-2xl px-4 border-[#ffebb3] text-white`}>
                                {recepie === ''? 'All' : recepie}
                        </h3>
                    ))
                }

              </div>
  )
}
