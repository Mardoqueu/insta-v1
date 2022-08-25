import React from 'react'

export default function Post({img, userImg, caption, username, id}) {
  return (
    <div>
        <img src={userImg} alt={username} />
        <h1>{username}</h1>
    </div>
  )
}
