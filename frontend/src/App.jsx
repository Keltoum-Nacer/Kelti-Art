import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'

export default function App() {
  return (
    <div className="h-full flex items-center justify-center gap-[30%]">
      <img src="/search.svg" alt="search" className = "w-[80px]" />
      <img src="/logo.svg" alt="logo" className = "w-[400px]" />
      <div className = "flex gap-[50%] bg-dark w-full h-full">
        <button className= "border-none font-basic bg-transparent">Log in</button>
        <button className= "border-none font-basic bg-dark">Sign in</button>
      </div>   
    </div>
  )
}

