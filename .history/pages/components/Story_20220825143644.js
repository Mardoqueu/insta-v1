import React from 'react'

export default function Story({img, username}) {
  return <div>
        <img className='h-14 rounded-full p-[1.5px]' src={img} alt={username}/>
        <p>{username}</p>
    </div>;  
}
