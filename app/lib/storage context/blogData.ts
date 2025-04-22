import {create} from "zustand";
import { post } from "../data";

interface blogDataState {
  blogData: Array<post>,
  setBlogData: (newBlogData: (newBlog: Array<post>) => Array<post>) => void,
}


const useBlogData = create<blogDataState>((set) => ({
  blogData: [],
  setBlogData:(newBlogData) => set((state) => ({
    blogData:
      newBlogData(state.blogData)
  })) 
}))


export default useBlogData;



