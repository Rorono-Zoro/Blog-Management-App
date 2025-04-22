"use client";
import { useState } from "react";
import { insertUser } from "@/app/lib/action";

export default function Page(){
  const [user, setUser] = useState({user:"", email:""});

  function handleOnChange(event:React.ChangeEvent<HTMLInputElement>){
    const {name, value} = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  }
  function handleClick(){
    insertUser(user.user, user.email);    
    setUser({user:"", email:""});
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center border-2 border-green-400 p-5">
        <input className="text-2xl " name="user" value={user.user} type="text" placeholder="Enter your name" onChange={handleOnChange} />
        <input className="text-2xl" name="email" value={user.email} type="text" placeholder="Enter your email" onChange={handleOnChange} />
        <button onClick={handleClick} className="text-2xl bg-yellow-200 text-blue-800 p-2 rounded-2xl">Submit</button>
      </div>
    </div>
  )
}