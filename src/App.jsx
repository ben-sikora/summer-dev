import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-100% h-[100vh] bg-purple'>
      <Nav />
    </div>
  )
}

export default App
