import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="px-[5%]">

      <Navbar />
        <div className="my-5"> <Outlet /></div>
        <Footer />
      </div>
    </>
  )
}

export default App
