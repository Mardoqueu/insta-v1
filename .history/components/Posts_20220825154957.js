import postcss from 'postcss'
import React from 'react'
import Post from './Post'

export default function Posts() {
    const posts =[
        {
            id: "1",
            username: "mardoqueu.sousa",
            userImg: "https://media-exp1.licdn.com/dms/image/C4E03AQF1Icbg9ibKSQ/profile-displayphoto-shrink_800_800/0/1656524327808?e=1666828800&v=beta&t=qOGUdHrse_LvKkpyy9nUz7tCnRiXEGOzRBQ0KfwyR1o",
            img: "https://images.unsplash.com/photo-1552508744-1696d4464960?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
            caption: "That's true"
        },
        {
            id: "2",
            username: "milena.azevedo",
            userImg: "https://media-exp1.licdn.com/dms/image/C4E03AQGA7onOKdM8og/profile-displayphoto-shrink_800_800/0/1654796552948?e=1666828800&v=beta&t=gw-Lg7t8iHUokw6g2T7JE3dogdo9igc4ohCHVQaTlX0",
            img: "https://images.unsplash.com/photo-1564410267841-915d8e4d71ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
            caption: "Nice!"
        }
    ]
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
