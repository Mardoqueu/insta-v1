import postcss from 'postcss'
import { useEffect, useState } from "react";import Post from './Post'
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

export default function Posts() {
    {/* created a state called posts and useEffect got get information from the data base useing snapshot  */}
    const [posts, setPosts] = useState([]);
    useEffect(() => {
    {/*snaptshot gives the information from database */}
      const unsubscribe = onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        // Got all the information as snapshot and is set to post by snapshot.docs        
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      );
      return unsubscribe;
    }, [db]);

  return (
    <div>
        {posts.map(post => (
            <Post
            //passed the adta using post that practices, and just added data apprentices to get that data
                key={post.id} 
                id={post.id}
                username={post.data().username}
                userImg={post.data().profileImg}
                img={post.data().image}
                caption={post.data().caption}
            />
        ))}
    </div>
  )
}
