import React from "react";
import NavBarLanding from "../components/NavBarLanding";
import Prices from "../components/Prices";

interface PricesInfo {
    price: number | null;
    tipo: string;
    beneficios: string[];
  }
const Landing = () => {
    const prices:PricesInfo[]=[{
        price:0,
        beneficios:["Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet"],
        tipo:"Free"        
    },{
        price:20,
        beneficios:["Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet"],
        tipo:"Basic"        
    },{
        price:50,
        beneficios:["Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet"],
        tipo:"Pro"        
    }
    
]
    return (
    <div className="flex flex-col">
    <NavBarLanding />
    <div className="w-full">
       <div className="flex justify-between p-24 ">
       {prices.map((p)=><Prices price={p.price}beneficios={p.beneficios} tipo={p.tipo} />)}
       </div>
        
    </div>
    </div>
  );
};
export default Landing;
