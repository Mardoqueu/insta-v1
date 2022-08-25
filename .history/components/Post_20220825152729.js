import React from 'react'

export default function Post({img, userImg, caption, username, id}) {
  return (
    <div>        
        {/* Post Header*/}
        <div className="flex items-center p-5">
          <img className="h-12 rounded-full object-cover border p-1 mr-3"  src={userImg} alt={username} />
          <p className="font-bold flex-1">{username}</p>

      </div>
    </div>
  )
}
