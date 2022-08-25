import React, { useState } from 'react';
import minifaker from 'minifaker';
import { useEffect, useState } from "react";
import "minifaker/locales/en";


export default function Stories() {
    const [storyUsers, setSoryUers] = useState([])
    useEffect(()=> {
        const storyUsers = minifaker.array(20, (i) =>({
            username: minifaker.username({locale: 'en'}).toLocaleLowerCase(),
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
            id: i,
        }));
        setSoryUers(storyUsers);
        console.log(storyUsers);
    }, []);
    return (
        <div>
            {storyUsers.map((user) => (
                <Story key={user.id} username={user.username} img={user.img}/>
            ))}
        </div>
  );
}
