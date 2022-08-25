import React from 'react'

export default function Post({img, userImg, caption, username, id}) {
  return (
    <div>        
        {/* Post Header*/}

        <div className=''>
            <img src='{userImg}' alt='' />
        </div>
    </div>
  )
}
