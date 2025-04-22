"use client";
import useUserInfo from "@/app/lib/storage context/userInfo";
import useBlogData from "@/app/lib/storage context/blogData";
import { useState } from "react";


export default function Page(){
  const {userRank} = useUserInfo();
  const {blogData, setBlogData} = useBlogData();
  const [newBlog, setNewBlog] = useState({id:NaN, title:"", body:"", reactions:{likes:0, dislikes:0} });

  function handleOnChange(event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    const {name, value} = event.target;
    setNewBlog({...newBlog, id:blogData.length + 1,[name]:value});

  }

  function handleSubmit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    setBlogData((B) => {
      const copyData = [...B];
      copyData.push(newBlog);
      return copyData;
    })
  }
  console.log(newBlog);
  
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-10" >
          <input className="w-[500px] text-2xl border-2 border-red-400" onChange={handleOnChange} type="text" name="title" placeholder="Title:" value={newBlog.title} />
          <textarea onChange={handleOnChange} className="w-[500px] h-96 text-2xl border-2 border-red-400" name="body" placeholder="Body:" value={newBlog.body} ></textarea>
          <button type="submit" className="text-3xl font-bold bg-amber-300 text-pink-600 p-2 rounded-2xl hover:bg-amber-200 cursor-pointer">Submit</button>
        </form>
      </div>
    </div>
  )
}