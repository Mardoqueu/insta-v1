import React from 'react'

export default function MiniProfile() {
  return (
    <div>
        <img className='h-16 rounded-full border p-[2px]' src='https://media-exp1.licdn.com/dms/image/C4E03AQF1Icbg9ibKSQ/profile-displayphoto-shrink_800_800/0/1656524327808?e=1666828800&v=beta&t=qOGUdHrse_LvKkpyy9nUz7tCnRiXEGOzRBQ0KfwyR1o' alt='user-img'/>
        <div className='flex-1 m1-4'>
            <h2 className='font-bold'>mardoqueu.sousa</h2>
            <h3>Copyright &copy; {new Date().getFullYear()} Mardoqueu Sousa</h3>
        </div>
        <button>Sign out</button>
    </div>
  )
}