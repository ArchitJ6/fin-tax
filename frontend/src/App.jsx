import { useState } from 'react'
import './App.css'
import Navbar from "../src/components/navbar/Navbar"
import Hero from "../src/components/hero/Hero"
import Home from "../src/components/home/Home"
import About from "../src/components/about/About"
import Contact from "../src/components/contact/Contact"
import Footer from "../src/components/footer/Footer"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './components/userpage/login'


function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route exact path={'/'} element={ <><Navbar/><Hero/><Home/><About/><Contact/><Footer/></> } />
                <Route exact path={'/login'} element={ <><Login/></> } />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
