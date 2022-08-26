import React from 'react'
import { DotsHorizontalIcon } from "@heroicons/react/outline";

export default function Post({img, userImg, caption, username, id}) {
  return (
    <div>        
        {/* Post Header*/}
        <div className="">
          <img className="h-12 rounded-full object-cover border p-1 mr-3"  src={userImg} alt={username} />
        <p>{username}</p>
        <DotsHorizontalIcon/>
      </div>
    </div>
  )
}