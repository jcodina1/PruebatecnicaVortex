import React from 'react'
import Stars from './Stars'

export default function Experts({name,stars}:{name:string|null,stars:number}) {
  return (
    <div className='w-4/5 h-20 bg-zinc-300 flex items-center justify-between p-10'>
      <div className='flex  items-center'>
      <div className="w-10 h-10 bg-orange-300 rounded-full flex justify-center items-center mr-10 ">      
      <div className=" text-black text-base font-bold font-['Josefin Sans'] ">{"NN"}</div>
    </div>
    <p>{name}</p>
      </div>
    <Stars cantidad={stars}/>
    </div>
  )
}
