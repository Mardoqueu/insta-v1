export default function MiniProfile() {
    return (
      <div className="flex items-center justify-between mt-14 ml-10">
        <img
          className="h-16 rounded-full border p-[2px]"
          src='https://media-exp1.licdn.com/dms/image/C4E03AQF1Icbg9ibKSQ/profile-displayphoto-shrink_800_800/0/1656524327808?e=1666828800&v=beta&t=qOGUdHrse_LvKkpyy9nUz7tCnRiXEGOzRBQ0KfwyR1o'          alt="user-image"
        />
        <div className="flex-1 ml-4">
          <h2 className="font-bold">codewithsahand</h2>
          <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
          <p>Copyright &copy; {new Date().getFullYear()} Mardoqueu Sousa</p>

        </div>
        <button className="font-semibold text-blue-400 text-sm">Sign out</button>
      </div>
    );
  }