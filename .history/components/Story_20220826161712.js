import React from 'react'
import {PlusIcon} from "@heroicons/react/solid"

export default function Story({img, username, isUser}) {
    return <div>
        <img className='h-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out' src={img} alt={username}/>
        {isUser && <PlusIcon className='h-6'/>}
        <p className='text-xs w-14 truncate'>{username}</p>
    </div>;  
}
