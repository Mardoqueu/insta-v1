import postcss from 'postcss'
import React from 'react'
import Post from './Post'

export default function Posts() {

  return (
    <div>
        {posts.map(post => (
            <Post
                key={post.id} 
                id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}
            />
        ))}
    </div>
  )
}
