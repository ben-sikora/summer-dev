import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/Nav'
import Dropbox from './components/Dropbox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-100% h-[150vh] bg-purple'>
      <Nav />
      <Dropbox />
    </div>
  )
}

export default App
