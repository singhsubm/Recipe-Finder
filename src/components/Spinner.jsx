import React from 'react'
import '../components/Spinner.css'

export default function Spinner() {
  return (
    <div className="spinner absolute top-[50%] left-[50%] transform-[translate(-50%, -50%)]">
        <div className='loader'></div>
    </div>
  )
}
