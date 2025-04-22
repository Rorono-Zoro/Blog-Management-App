import {post, api_post} from "../lib/data";


export async function apiData():Promise<Array<post>>{
  const response = await fetch(`https://dummyjson.com/posts?limit=10`);
  const data: api_post = await response.json();
  const blogData: Array<post> =  data.posts;
  return blogData;
}

