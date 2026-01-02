import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'

export default function App() {
  return (
    <div class= "relative font-basic">
      <div className="h-full flex items-center justify-center gap-[30%] mt-[1%]">
        <img src="/search.svg" alt="search" className = "w-[70px] ml-[2%]" />
        <img src="/logo.svg" alt="logo" className = "w-[400px]" />
        <div className = "flex gap-[18%] w-full text-dark">
          <button className= "font-basic text-2xl ">Log in</button>
          <button className= "border-none font-basic bg-primary w-[100px] h-[35px] rounded-[10px] text-2xl">Sign in</button>
        </div>   
      </div>
      <div className="flex items-center justify-center gap-[10%] mt-[3%] text-primary  text-3xl font-semibold">
        <a href="#home">HOME</a>
        <a href="#gallery">GALLERY</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </div>
      <div className="flex w-full h-[630px] bg-primary/20 mt-[3%]">
        <div className="flex ml-[5%]">
          <img src="/sojoud.svg" alt="" class="relative w-[270px] z-[100] mb-[59%]" />
          <img src="/flower1.svg" alt="" class="absolute w-[270px] mt-[11%] ml-[10%]" />
        </div>
        <div className= "flex flex-col items-center justify-center ml-[30%]">
          <h1 className="text-primary text-7xl">Welcome To Kelti Art</h1>
          <h3 className="text-secondary text-5xl mt-[4%]">Unique creations for unique souls</h3>
          <button className="w-[200px] h-[60px] bg-primary text-button text-3xl font-bold rounded-full mt-[8%] drop-shadow-blue">Discover</button>
        </div>
      </div>
        <h1 className="text-primary text-7xl text-bold text-center mt-[5%]">Bring unique creativity into <br /> your everyday life</h1>
      <div className="flex mt-[5%] items-center justify-center gap-[15%]">
        <div class="flex flex-col ml-[5%] items-center justify-center">
          <p class="text-5xl text-secondary text-center">Every piece is <br /> with patience,<br />
           passion, and a love <br /> for small details.</p>
          <button class="mt-[10%] bg-primary w-[250px] h-[60px] text-button text-3xl rounded-[30px] drop-shadow-blue">Command Now</button>
        </div>
        <div class= "flex flex-col w-[40%] h-[780px] bg-primary/20 rounded-[8%] mr-[3%] items-center justify-center ">
          <div className="flex gap-[1%]">
          <div className="w-[400px] h-[550px] rounded-l-[20px] overflow-hidden">
            <img src="/flower2.svg" alt="" className="w-full h-full object-cover" />
          </div>
          <div class="flex flex-col">
            <div className="w-[205px] rounded-tr-[20px] overflow-hidden ">
              <img src="/flower3.svg" alt="" class="w-full object-cover" />
            </div>
            <div className="w-[205px] rounded-br-[20px] overflow-hidden mt-[3%]">
              <img src="/flower4.svg" alt="" class="w-full object-cover" />
            </div>
          </div>
          </div>
          <span className="mt-[3%] text-4xl text-center text-secondary" >What’s given with love is never lost <br /> your memories last forever</span>
        </div>
      </div>
      <h1 className="text-primary text-7xl text-bold text-center mt-[8%]">Discover a best of the best of Kelti Art</h1>
       <div className="flex mt-[5%] items-center justify-center gap-[15%]">
        <div class= "flex flex-col w-[40%] h-[700px] bg-primary/20 rounded-[8%] ml-[3%] items-center justify-center ">
          <div className="flex gap-[2%]">
            <div className="flex flex-col gap-[10%] mt-[20%]">
              <span className="text-4xl text-secondary text-center">Where Gypsum</span>
              <div className="w-[300px] rounded-bl-[20px] overflow-hidden mt-[5%]">
                <img src="/gyps1.svg" alt="" className="w-full h-full object-cover" />
              </div>
            </div>
            <div class="flex flex-col ">
              <div className="w-[300px] rounded-tr-[20px] overflow-hidden ">
                <img src="/gyps2.svg" alt="" class="w-full object-cover" />
              </div>
              <span class="text-4xl text-secondary mt-[15%] text-center">Becomes Art</span>
            </div>
          </div>
         
        </div>
        <div class="flex flex-col  items-center justify-center">
          <p class="text-5xl text-secondary text-center">Each creation tells a story <br /> “yours or mine” <br /> and is designed to <br /> bring beauty, warmth,<br /> and inspiration <br /> into everyday life</p>
          <button class="mt-[10%] bg-primary w-[250px] h-[60px] text-button text-3xl rounded-[30px] drop-shadow-blue">Join Kelti Art</button>
        </div>
      </div>
      <h1 className="text-primary text-7xl text-bold text-center mt-[8%]">Sign up to get the latest news <br /> and drops from Kelti Art</h1>
      <div className="flex flex-col ml-[35%] w-[600px] h-[700px] bg-primary/20 rounded-[10%] mt-[5%] items-center">
        <p className="text-5xl text-primary mt-[8%]">Welcome To Kelti Art</p>
        <form action="">
          <div className=" flex flex-col">
            <label htmlFor="email" className="text-primary text-2xl mt-[15%]">Email</label>
            <input className="w-[500px] h-[50px] bg-beige rounded-[20px] mt-[2%] " type="text" placeholder='Enter email' name="email" required />
            <label htmlFor="psw" className="text-primary text-2xl mt-[8%]">Password</label>
            <input className="w-[500px] h-[50px] bg-beige rounded-[20px] mt-[2%] " type="password" placeholder='Enter password' name="psw" required />
            <label htmlFor="confPsw" className="text-primary text-2xl mt-[8%]">Confirm Password</label>
            <input className="w-[500px] h-[50px] bg-beige rounded-[20px] mt-[2%] " type="password" placeholder='Confirm password' name="confpasw" required />
            <button type="button" className="mt-[8%] ml-[33%] w-[150px] h-[45px] bg-primary text-button text-2xl rounded-full">Sign up</button>
            <p className="text-secondary text-2xl text-center mt-[5%]">Already member? <a href="" className="text-primary">login</a></p>
          </div>
        </form>
      </div>
      <div className="flex w-full h-[100px] bg-primary/20 mt-[10%] items-center justify-center gap-[4%]">
        <i className="fa-brands fa-instagram text-primary text-6xl"></i>
        <i className="fa-brands fa-whatsapp text-primary text-6xl"></i>
        <i className="fa-brands fa-tiktok text-primary text-6xl"></i>
      </div>
    </div>

  )
}

