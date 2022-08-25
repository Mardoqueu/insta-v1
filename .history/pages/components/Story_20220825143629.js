import React from 'react'

export default function Story({img, username}) {
  return <div>
        <img className='h-14 rounded-full' src={img} alt={username}/>
        <p>{username}</p>
    </div>;  
}
