import authservice from './firebase/auth'
import { Link } from 'react-router-dom'

function App() {

  return (
    <main className='w-screen min-h-screen flex justify-center px-6 lg:px-20 py-10 lg:py-16 text-center bg-gradient-to-r from-zinc-900 to-black'>
      
      <div className="flex items-center w-[90%]">

      <div className="landingPage w-[100%] rounded-xl px-4 py-8">
        <h1 className='lg:text-9xl text-white/60 text-7xl md:text-9xl font-bold px-4 m-1'>Link Up</h1>
        <p className='px-4 m-1 text-white/45 font-bold mt-5 text-2xl lg:text-3xl'>Real time chat with your friends along with features like autoreply and more...</p>
        <div className='flex lg:justify-around justify-center'>
          <img className='lg:w-[20%] lg:h-[45%] w-[60%] mt-6 ' src="/chat.png" alt="" />

        </div>
        <div className='flex justify-center'>
          <Link to={'/login'}>
            <button className='bg-blue-500 lg:text-xl px-3 py-2 my-4 rounded-lg text-white/80 font-bold'>Login To chat</button>
          </Link>

        </div>
      </div>

      </div>

    </main>
  )
}

export default App
