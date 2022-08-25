import React from 'react'
import Image from 'next/image';
import { SearchIcon } from '@heroicons/react/24/solid';

export default function Header() {
  return (
        <div className="flex items-center justify-between max-w-6xl">
        {/*Left*/}
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
            <Image
                src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
                layout='fill'
                className="object-contain"
              />
            </div>
            <div className="cursor-pointer h-24 w-10 relative  lg:hidden">
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
                layout='fill'
                className="object-contain"
              />
            </div>
             {/*Middle*/}

            <div className=''>
                <div className=''>
                <SearchIcon className=""/>

                </div>
            </div>

             {/*Right*/}
            <h1>Right side</h1>
        </div>



 

  )
}
