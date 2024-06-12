import authservice from './firebase/auth'
import { Link } from 'react-router-dom'

function App() {

  return (
    <main className='w-screen h-screen flex justify-center px-6 lg:px-20 py-10 lg:py-16 bg-gradient-to-r md from-zinc-900 to-blue-400'>
      
      <div className="flex items-center w-[90%]">

      <div className="landingPage w-[100%] rounded-xl bg-white/20 px-4 py-8">
        <h1 className='lg:text-9xl text-black/60 text-7xl md:text-9xl font-bold px-4 m-1'>Link Up</h1>
        <p className='px-4 m-1 text-white/60 font-bold mt-5 text-3xl lg:text-3xl'>Real time chat with your friends along with features like autoreply</p>
        <div className='flex lg:justify-around justify-center'>
          <img className='lg:w-[25%] lg:h-[45%] w-[70%] lg:ml-20 mt-8 ' src="/chat.png" alt="" />
          <ul className='hidden list-disc lg:block  w-[40%] mt-8 text-3xl my-auto py-8 text-white/60 font-bold'>
            <li className='my-2'>Auto reply</li>
            <li className='my-2'>Real time chat</li>
            <li className='my-2'>Text to voice integration</li>
          </ul>
        </div>
        <div className='flex justify-center my-8'>
          <Link to={'/login'}>
            <button className='bg-black/50 lg:text-xl px-3 py-1 text-white font-bold'>Login To chat</button>
          </Link>

        </div>
      </div>

      </div>

    </main>
  )
}

export default App
