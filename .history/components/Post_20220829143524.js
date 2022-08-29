import React, { useEffect, useState } from "react";import {  
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,   
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import Moment from 'react-moment';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";import { db } from "../firebase";
import {HeartIcon as HeartIconFilled} from "@heroicons/react/solid";
import { async } from "@firebase/util";

export default function Post({img, userImg, caption, username, id}) {
  {/*//useSession to get this session*/}
  const {data: session}  = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  {/*state to set likes */}
  const [likes, setLikes] = useState([]);
  {/*state to has like */}
  const [hasLiked, setHasLiked] = useState(false);
  {/*//useEffect to fetch the data for comments*/}
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts", id, "comments"), orderBy("timestamp", "desc")), (snapshot) => {setComments(snapshot.docs)}
    )
    {/*//Finally, get the information using snapshot*/}
      

  }, [db, id]);

  {/* got the likes using snapshot and collection*/}
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", id, "likes"),
      (snapshot) => setLikes(snapshot.docs)
    );
  }, [db]);

  {/*check if there's a like with the username I.D or not  */}
  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user.uid) !== -1
    );
  }, [likes]);
    
  {/*state to set likepost */}
  async function likePost() {
    {/*If there is a like, it delete the like */}
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      {/*If there is no like, it sets  the like with the user name*/}
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }
  }


  {/*//asynchronous function to get the information from input, pass it to the collection with these formats  */}
  async function sendComment(event) {
    event.preventDefault();
    const commentToSend = comment;
    setComment("");
    {/*await to get the information to the database */}
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  }

  return (
    <div className='bg-white my-7 border rounded-t-md'>        
        {/* Post Header*/}
        <div className="flex items-center p-5">
          <img className="h-12 rounded-full object-cover border p-1 mr-3"  src={userImg} alt={username} />
        <p className="font-bold flex-1">{username}</p>
        <DotsHorizontalIcon className='h-5'/>
      </div>
       {/* Post Image*/}
       <img className="object-cover w-full" src={img} alt=''/>

       {/* Post Buttons*/}
       {/* used this operator session to hidden the posts buttons*/}
    
      {session && (
              <div className='flex justify-between px-4 pt-4'>
              <div className="flex space-x-4">
              {/*If there is a like, it set a HeartIconFilled, otherwise it set the empty heart icon*/}
              {hasLiked ? (
              <HeartIconFilled
                onClick={likePost}
                className="text-red-400 btn"
              />
            ) : (
              <HeartIcon onClick={likePost} className="btn" />
            )}
                  
                  <ChatIcon className='btn'/>            
              </div>
                <BookmarkIcon className='btn'/>          
            </div>
      )}

       {/* Post Comments*/}  
        <p className='p-5 truncate'>
        {/* show the number of likes */}  
        {likes.length > 0 && (
          <p className="font-bold mb-1">{likes.length} likes</p>
        )}
          <span className='font-bold mr-2'>{username}</span>
          {caption}
        </p>
        {comments.length > 0 && (
            <div className="mx-10 max-h-24 overflow-y-scroll scrollbar">
              {comments.map(comment =>(
                  <div className="flex items-center space-x-2 mb-2">
                    <img className="h-7 rounded-full object-cover" src={comment.data().userImage} alt="user-image"></img>
                    <p className="font-semibold">{comment.data().username}</p>
                    <p className="flex-1 truncate">{comment.data().comment}</p>
                    <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>                  </div>
              ))}
            </div>
        )}


       {/* Post input box */}    
       
       {/* used this operator session to hidden the post input box */} 
       {session && (
              <form className='flex items-center p-4'>
              <EmojiHappyIcon className='h-7'/>  
              <input 
              value={comment}
              onChange={(event)=> setComment(event.target.value)}
              className='border-none flex-1 focus:ring-0' 
              type="text" 
              placeholder="Enter your comment..."/>

              <button 
              type="submit" 
              onClick={sendComment} 
              disabled={!comment.trim()} 
              className='text-blue-400 font-bold disabled:text-blue-200'>Post</button>              
            </form>      
       )}

    </div>
  )
}
