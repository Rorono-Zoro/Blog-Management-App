export  type post =  
  {
    id: number,
    title: string,
    body: string,
    reactions: {likes: number, dislikes: number}
  }

export type api_post = {
  posts: Array<post>
}







