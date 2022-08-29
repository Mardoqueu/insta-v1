import postcss from 'postcss'
import { useEffect, useState } from "react";import Post from './Post'
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        {/*snaptshot gives the information from database */}
        const unsubscribe = onSnapshot(
            query(collection(db, "posts"), orderBy("timestamp", "desc")),
            (snapshot) => {setPosts(snapshot.docs);}
        )
    })

  return (
    <div>
        {posts.map(post => (
            <Post
                key={post.id} 
                id={post.id}
                username={post.data().username}
                userImg={post.data().userImg}
                img={post.img}
                caption={post.caption}
            />
        ))}
    </div>
  )
}
