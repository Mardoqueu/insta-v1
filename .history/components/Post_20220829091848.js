import React, { useState } from "react";import {  
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon, } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function Post({img, userImg, caption, username, id}) {
  {/*//useSession to get this session*/}
  const {data: session}  = useSession();
  const [comment, setComment] = useState("");
  
  async function sendComment(event) {
    event.preventDefault();
    const commentToSend = comment;
    setComment("");
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
                  <HeartIcon className='btn'/>
                  <ChatIcon className='btn'/>            
              </div>
                <BookmarkIcon className='btn'/>          
            </div>
      )}

       {/* Post Comments*/}  
        <p className='p-5 truncate'><span className='font-bold mr-2'>{username}</span>{caption}</p>
      
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
