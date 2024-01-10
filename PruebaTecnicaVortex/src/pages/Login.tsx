import React from "react";
import Button from "../components/button";
import LoginIcon from "../assets/LoginIcon.jpg";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="w-screen h-screen  bg-sky-500">
      <div className="flex items-center gap-80">
      <img src={LoginIcon} alt="login-icon" className="h-screen" />
        <div className="w-80 h-96 bg-white rounded-2xl shadow border border-black flex flex-col items-center gap-14">          
            <span className="text-sky-900 text-xl font-bold font-['Josefin Sans']">
              Bienvenido a Paper Helper             
            </span>  
        <div>
          <div className="flex flex-col w-72 gap-8">
          <span className="text-black text-xs font-bold font-['Josefin Sans']">Email:</span>
          <input type="text" className="border-b-2 border-black" />
          </div>
          <div className="flex flex-col w-72 gap-8">
          <span className="text-black text-xs font-bold font-['Josefin Sans']">Password:</span>
          <input type="text" className="border-b-2 border-black" />
          </div>
        </div>
        <Link to={'/newbies'}><Button landing={true}  color={"bg-orange-300"}>Ingresa</Button></Link>
        </div>
      </div>
     
    </div>
  );
}
