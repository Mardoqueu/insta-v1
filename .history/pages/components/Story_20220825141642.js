import React from 'react'

export default function Story({img, username}) {
    return <div>
        <img src={img} alt={username} />
        <p>{username}</p>
    </div>;
  }