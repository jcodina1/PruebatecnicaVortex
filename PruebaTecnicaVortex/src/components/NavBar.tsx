import React from 'react'
import Button from './button'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="w-screen h-20 bg-sky-500 flex items-center justify-between">
      <p className="m-2 text-white text-5xl font-bold font-['Tienne']">PH</p>
     <Button landing={false}  color={"bg-orange-300"}>Ingresa</Button>
    </div>
  )
}
