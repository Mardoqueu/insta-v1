import postcss from 'postcss'
import React, { useState } from 'react'
import Post from './Post'
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        {/*snaptshot gives the information from database */}
        const unsubscribe = onSnapshot()
    })

  return (
    <div>
        {posts.map(post => (
            <Post
                key={post.id} 
                id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}
            />
        ))}
    </div>
  )
}
