import React from 'react'

export default function Prices({price,tipo,beneficios}:{price:number|null,tipo:string,beneficios:string[]}) {
  return (
    <div className='w-80 h-96 bg-white rounded-2xl shadow border border-black flex flex-col justify-center items-center gap-14'>
       <p className='text-5xl font-bold'>${price}</p> 
       <div className='w-44 h-24 bg-zinc-300 rounded-2xl shadow flex items-center justify-center '><p className='text-3xl font-bold'>{tipo}</p></div>
       <div>{beneficios.map((b)=><li>{b}</li>)}</div>
    </div>
  )
}
