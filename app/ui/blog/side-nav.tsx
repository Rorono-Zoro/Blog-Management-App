"use client";
import Link from "next/link";
import useUserStore from "@/app/lib/storageContext";
import useUserInfo from "@/app/lib/storage context/userInfo";


export default function SideNav(){
  const {isUserActive, setIsUserActive} = useUserStore();
  const {userName, userRank} = useUserInfo();

  function handleClick(){
    setIsUserActive((I) => !I);
  }
  console.log(userRank);

  return (
    <div className="flex justify-around py-5 bg-red-200">
      <div className="text-3xl font-bold cursor-pointer hover:text-purple-400">
        <Link href={"/"}>
        <h2>Nav-Bar</h2>
        </Link>
      </div>
      <div className="flex justify-between w-150">
        <p className="text-3xl font-bold cursor-pointer hover:text-purple-400"><Link href="/blog">Home</Link></p>
        <p className="text-3xl font-bold cursor-pointer hover:text-purple-400"><Link href="/blog/contact">Contact</Link></p>    
        <p className="text-3xl font-bold cursor-pointer hover:text-purple-400">            
            {
              userRank ?
              <Link href="/blog/about">Add New Blog</Link>
              :null
            }
        </p>
          
        
      
      </div>
        {
          isUserActive ?
          <Link href={"/"}>
            <button 
            onClick={handleClick}
            className="w-28 bg-purple-600 text-2xl font-bold p-5 rounded-2xl cursor-pointer hover:bg-purple-400  hover:text-black">
              Sign Out
            </button>
          </Link>
          : null
        }

      <div className="text-3xl font-bold cursor-pointer hover:text-purple-400">
        {userName}
      </div>
    </div>
  )
}