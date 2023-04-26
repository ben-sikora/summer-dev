import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/Nav'
import Dropbox from './components/Dropbox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[100%] h-[150vh] bg-purple grid grid-cols-1 grid-rows-1 overflow-clip'>
      <div className='row-start-1 row-end-2 col-start-1 col-end-2 z-20'>
        <Nav />
        <Dropbox />
      </div>
      <div className='row-start-1 row-end-2 col-start-1 col-end-2 w-[100%] h-[150vh] bg-gradient-radial from-[#C5C5C5] opacity-25 z-0'> </div>
      <div className='row-start-1 row-end-2 col-start-1 col-end-2 z-10 w-[80%] h-[800px] mx-auto bg-gradient-radial from-orange to-transparent to-70% mt-[110vh]'> </div>
    </div>
  )
}

export default App
