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
import UserPage from './components/UserPage'
import SignUp from './components/userpage/signup'


function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route exact path={'/'} element={ <><Navbar/><Hero/><Home/><About/><Contact/><Footer/></> } />
                <Route exact path={'/login'} element={ <><Login/></> } />
                <Route exact path={'/signup'} element={ <><SignUp/></> } />
                <Route exact path={'/dashboard'} element={ <><Navbar /><UserPage/> <Footer/></> } />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
