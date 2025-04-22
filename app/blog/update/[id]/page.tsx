"use client";
import useBlogData from "@/app/lib/storage context/blogData";
import {use, useEffect, useState} from "react";

export default function Page({params: paramsPromise}: {params: Promise<{id: number}>}){

  const params = use(paramsPromise);
  const [newBlog,setNewBlog] = useState({id:0, title:"", body:"", reactions:{likes:0,dislikes:0}});
  const {blogData,setBlogData} = useBlogData();
  const blogIndex = blogData.findIndex((item) => item.id == params.id);
  console.log(blogIndex);

  useEffect(()=> {
    setNewBlog({...newBlog,title:blogData[blogIndex].title,body:blogData[blogIndex].body });
  },[]);

  function handleOnChange(event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    const {name, value} = event.target;
    setNewBlog({...newBlog,id:params.id, [name]:value });
  }
  function handleSubmit(){
    setBlogData((B) => {
      const copyData = [...B];
      copyData[blogIndex] = newBlog;
      console.log(copyData);
      return copyData
    })
  }
  

  return (
    <div className="p-10">
      update page
      <div>ID: {params.id}</div>
      <div className="flex flex-col gap-4 items-center">
        <div className="">
          <p className="text-3xl font-bold text-pink-400">Title: </p>
          <input className="w-[500px] text-2xl"name="title" type="text" onChange={handleOnChange} value={newBlog.title} />
        </div>
        <div>
          <p className="text-3xl font-bold text-pink-400">Topic: </p>
          <textarea onChange={handleOnChange} className="w-[500px] h-96 text-2xl" name="body" value={newBlog.body}></textarea>
        </div>
        <button onClick={handleSubmit} className="text-3xl font-bold bg-amber-300 text-pink-600 p-2 rounded-2xl hover:bg-amber-200 cursor-pointer">
          Update
        </button>
      </div>
    </div>
  )
}