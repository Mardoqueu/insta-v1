import React from 'react'

export default function Story({img, username}) {
  return <div>
        <img className='h-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transition-transform duration-200' src={img} alt={username}/>
        <p>{username}</p>
    </div>;  
}