"use client";
import { useState } from "react";
import { getLogin } from "@/app/lib/action";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useUserStore from "@/app/lib/storageContext";
import useUserInfo from "@/app/lib/storage context/userInfo";


export default function Page(){
  const [login, setLogin] = useState({email:"", password:""});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const {setIsUserActive} = useUserStore();
  const {userName, setUserName, userRank, setUserRank} = useUserInfo();

  function handleOnChange(event:React.ChangeEvent<HTMLInputElement>){
    const {name, value} = event.target;
    setLogin({
      ...login,
      [name]: value,
    });
    
  }
 async function handleClick(){ 
    const usersData = await getLogin();
    const user = usersData?.find((item) => (item.email === login.email && item.password === login.password));
    
    if(user) {
      if(user.email === "admin@"){
        setUserRank((R) => true);
      }else{
        setUserRank((R) => false);
      }
      setLoading((L) => !L);
      setIsUserActive((I) => !I);
      setUserName((U) => user.email.split("@"));
      router.push('/blog');
    }else {
      setError((E) => !E);
      router.push("/login");
    }
  }
  
  
  if(loading){
    return (
      <div className="text-center text-6xl font-bold text-red-700">
        Loading Please Wait
      </div>
      
    )
  }

  
  

  return (
    <div>
      <h1 className="text-center text-5xl font-bold my-10 text-red-600">Login</h1>
      <div className="flex flex-col justify-center items-center border-2 border-green-400 p-5">
        <input className="text-2xl " name="email" value={login.email} type="text" placeholder="Enter your email" onChange={handleOnChange} />
        <input className="text-2xl" name="password" value={login.password} type="text" placeholder="Enter your password" onChange={handleOnChange} />
        <button onClick={handleClick} className="text-2xl bg-yellow-200 text-blue-800 p-2 rounded-2xl cursor-pointer hover:font-bold">Submit

        </button>
        {
          error ?
        <div className="mt-10">
            <div className="text-center text-6xl font-bold text-red-700">
              You used wrong email or password!
            </div>
        </div>
        : null
        }
      </div>
    </div>
  )
}