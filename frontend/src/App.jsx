import { useState } from 'react'
import './App.css'
import Navbar from "../src/components/navbar/Navbar"
import Hero from "../src/components/hero/Hero"
import Home from "../src/components/home/Home"
import About from "../src/components/about/About"
import Contact from "../src/components/contact/Contact"
import Footer from "../src/components/footer/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Home/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
