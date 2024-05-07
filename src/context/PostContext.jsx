import { createContext, useEffect, useState } from "react";
import * as postAPI from '../apis/postApi'

export const PostContext = createContext()

export default function PostContextProvider ({children}) {
    const [posts,setPosts] = useState([])

    useEffect(()=> {
        getAllPosts()
    },[])

    const getAllPosts = async () => {
        try{
            const response = await postAPI.getAllPosts()
            setPosts(response.data)

        } catch (error) {
            console.log(error)
        }
    }
    return <PostContext.Provider
    value={{posts: posts}}>{children}</PostContext.Provider>
}