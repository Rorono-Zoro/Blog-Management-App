"use client";
import { useState } from "react";
import { insertLogin } from "@/app/lib/action";

export default function Page(){
  const [login, setLogin] = useState({email:"", password:""});

  function handleOnChange(event:React.ChangeEvent<HTMLInputElement>){
    const {name, value} = event.target;
    setLogin({
      ...login,
      [name]: value,
    });
    console.log(login);
  }
  function handleClick(){
    insertLogin(login.email, login.password);    
    setLogin({ email:"", password:""});
    
  }

  return (
    <div>
      <h1 className="text-center text-5xl font-bold my-10 text-red-600">Register</h1>
      <div className="flex flex-col justify-center items-center border-2 border-green-400 p-5">
        <input className="text-2xl " name="email" value={login.email} type="text" placeholder="Enter your email" onChange={handleOnChange} />
        <input className="text-2xl" name="password" value={login.password} type="text" placeholder="Enter your password" onChange={handleOnChange} />
        <button onClick={handleClick} className="text-2xl bg-yellow-200 text-blue-800 p-2 rounded-2xl cursor-pointer hover:font-bold">Submit</button>
      </div>
    </div>
  )
}