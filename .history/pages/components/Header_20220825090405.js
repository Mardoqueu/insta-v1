import React from 'react'
import Image from 'next/image';

export default function Header() {
  return (
    <div>
        {/*Left*/}
        <div className="">
            <div className="">
            <Image
                src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
                layout='fill'
                className="object-contain"
              />
            </div>
        </div>

        {/*Middle*/}


        {/*Right*/}

    </div>
  )
}