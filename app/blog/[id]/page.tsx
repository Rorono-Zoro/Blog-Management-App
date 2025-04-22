"use client";
import { apiData } from "@/app/lib/api"
import useBlogData from "@/app/lib/storage context/blogData";
import {use} from "react";
interface BlogPostPageProps{
  params: {id: string};
}



export default  function BlogPostPage({params: paramsPromise}: {params: Promise<{id: number}>}){
  // const blogData = await apiData();
  const {blogData} = useBlogData();
  const params = use(paramsPromise);
  const findBlog = blogData.find(item => item.id == params.id);
 
  return (
    <div>
      <div className="p-5">
        <p className="text-3xl font-bold text-red-400 text-center">{findBlog?.title}</p>
        <p className="text-2xl">{findBlog?.body}</p>
        <p className="flex justify-center text-2xl font-bold">{findBlog?.reactions.likes} && {findBlog?.reactions.dislikes}</p>
      </div>
    </div>
  )
}