"use client";
import { apiData } from "../lib/api";
import Link from "next/link";
import useUserInfo from "../lib/storage context/userInfo";
import { useEffect } from "react";
import useBlogData from "../lib/storage context/blogData";
import useApiCheck from "../lib/storage context/apiCheck";

export default  function Page(){
  const {apiCheck, setApiCheck} = useApiCheck();
  const {userRank} = useUserInfo();
  const {blogData, setBlogData} = useBlogData();
  console.log(blogData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if(!apiCheck){
          const response = await apiData();
          setBlogData((B) => response);
          setApiCheck((A) => true);
        }
          
      } catch (error) {
        console.log("Something is occured in api data please check!");
      }
    }
    fetchData();
  }, []);
  
  function handleUpdate(){

  }

  function handleDelete(i: number ){
    const blogIndex = blogData.findIndex((item) => item.id === i);
    console.log(blogIndex);
    setBlogData((B) => {
      const newData = [...B];
      newData.splice(blogIndex,1);
      return newData;
    });
  }

  return (
  <div className="min-h-screen relative">
    <div className="flex gap-5 flex-wrap w-9/12 h-max ml-4 p-5 border-2 border-blue-700  border-solid">
      {
        blogData?.length>0 && blogData?.map((item, index) => (
            
              <div className="w-[500px]  border-2 border-red-400 p-2 relative" key={index} >
                {
                  userRank 
                  ?
                  <div>
                    <div className="absolute top-0 right-10 font-black hover:bg-red-900 rounded-2xl text-xs">
                        <Link href={`blog/update/${item.id}` } key={index}>
                          U
                        </Link>
                    </div>
                    <div 
                      onClick={() => handleDelete(item.id)}
                      className="absolute top-0 right-2 font-black hover:bg-red-900 rounded-2xl text-xs cursor-pointer">
                        X
                    </div>
                  </div>
                  :
                  null
                }
                <Link href={`blog/${item.id}`} key={index}>
                <p className="text-2xl font-bold">{item.title}</p>
                <p className="text-xl">{item.body}</p>
                <div className="flex justify-center gap-5"> 
                  <span className="font-bold text-green-300">Likes:{item.reactions.likes}</span> && <span className="font-bold text-red-300">Dislikes:{item.reactions.dislikes}</span>
                </div>
                </Link>
              </div>          
            
        ))
      }
    </div>
    <div className="w-2/12 h-full bg-white absolute right-5 top-0">
 
    </div>
  </div>
  )
}