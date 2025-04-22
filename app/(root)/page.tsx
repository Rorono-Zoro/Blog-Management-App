"use client";
import Link from "next/link"
import useUserStore from "../lib/storageContext";


export default function Page(){

  const {isUserActive} = useUserStore();
  
  return (
    <div>
      <h1 className="text-6xl text-center mt-10">
        Welcome Blog
      </h1>

      <Link href={"/register"} >
        <div className="mt-20 m-auto text-center bg-blue-400 w-[200px] p-5 rounded-3xl text-2xl font-bold hover:bg-blue-100 hover:text-black">
          Register
        </div> 
      </Link>
      <Link href={"/login"} >
        <div className="mt-20 m-auto text-center bg-blue-400 w-[200px] p-5 rounded-3xl text-2xl font-bold hover:bg-blue-100 hover:text-black">
          Login
        </div> 
      </Link>
      <Link href={isUserActive ? "/blog" : "/login"} >
        <div className="mt-20 m-auto text-center bg-blue-400 w-[200px] p-5 rounded-3xl text-2xl font-bold hover:bg-blue-100 hover:text-black">
          Blogs
        </div> 
      </Link>
    </div>
  )
}