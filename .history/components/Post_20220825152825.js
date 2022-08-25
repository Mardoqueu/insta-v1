import React from 'react'

export default function Post({img, userImg, caption, username, id}) {
  return (
    <div>        
        {/* Post Header*/}
        <div className="">
          <img className=""  src={userImg} alt={username} />
        <p>{username}</p>
      </div>
    </div>
  )
}
