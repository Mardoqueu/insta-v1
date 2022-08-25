import React from 'react'
import { DotsHorizontalIcon } from "@heroicons/react/outline";

export default function Post({img, userImg, caption, username, id}) {
  return (
    <div>        
        {/* Post Header*/}
        <div className="flex items-center ">
          <img className="h-12 rounded-full object-cover border p-1 mr-3"  src={userImg} alt={username} />
        <p className="font-bold">{username}</p>
        <DotsHorizontalIcon className='h-5'/>
      </div>
    </div>
  )
}
