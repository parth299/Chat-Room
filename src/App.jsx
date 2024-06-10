import authservice from './firebase/auth'

function App() {

  return (
    <main className='w-screen h-screen flex justify-center px-6 lg:px-20 py-10 lg:py-16 bg-blue-700'>
      
      <div className="landingPage w-[90%] rounded-xl bg-white/20 py-4 px-4">
        <h1 className='lg:text-9xl text-black/60 text-7xl font-bold px-4 m-1'>Link Up</h1>
        <p className='px-4 m-1 text-white/60 font-bold mt-5 text-xl lg:text-3xl'>Real time chat with your friends along with features like autoreply</p>
        <div className='flex lg:justify-around justify-center'>
          <img className='lg:w-[25%] lg:h-[45%] w-[70%] lg:ml-20 mt-8' src="../public/chat.png" alt="" />
          <ul className='hidden list-disc lg:block  w-[40%] mt-8 text-3xl my-auto py-8 text-white/60 font-bold'>
            <li className='my-2'>Auto reply</li>
            <li className='my-2'>Real time chat</li>
            <li className='my-2'>Text to voice integration</li>
          </ul>
        </div>
        <div className='flex justify-center my-8'>
          <button className='bg-black/50 lg:text-xl px-3 py-1 text-white font-bold'>Login To chat</button>
        </div>
      </div>

    </main>
  )
}

export default App
