import React from 'react'

export default function Button({landing, children,color}:{landing:boolean,children:string,color:string}) {
 
  if(landing){
    return(
        <button className={`w-52 h-11 ${color} rounded-xl m-2`}>{children}</button>
    )
  }else{
    return(
      <button className="w-12 h-12 bg-orange-300 rounded-full flex justify-center items-center mr-10 ">      
      <div className=" text-black text-lg font-bold font-['Josefin Sans'] ">NN</div>
    </button>
    )
  }
    
  
}
