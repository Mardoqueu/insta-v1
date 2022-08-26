import React, { useEffect, useState } from 'react'
import minifaker from 'minifaker';

export default function Suggestions() {
    const [suggestions, setSuggestions] = useState([])
    console.log(suggestions);
    useEffect(() => {
        const suggestions = minifaker.array(5, (i) => ({
          username: minifaker.username({ locale: "en" }).toLowerCase(),
          jobTitle: minifaker.jobTitle(),
          id: i,
        }));
        setSuggestions(suggestions);
      }, []);
  return (
    <div className='mt-4 ml-10'>
        <div className='flex justify-between mb-5 text-sm'>
            <h3 className='font-bold  text-gray-400'>Suggestions for you</h3>
            <button className='text-gray-600 font-semibold'>See All</button>
        </div>
        {suggestions.map(suggestion =>(
            <div className=''>
                <img className='h-10 rounded-full border p-[2px]' src={`https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`} alt=''/>
                <div className=''>
                    <>{suggestion.username}/h2>
                </div>
            </div>
        ))}
    </div>
  )
}
