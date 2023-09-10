import React from 'react'
import "./login.css"
import { FaUser } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';

function login() {
  return (
    <div class="container">
      <div class="form-box">
        <h1>Sign Up</h1>
        <form>
          <div class="input-groups">
            <div class="input-field">
                <div className='icons'><FaUser/></div>
                <input type="text" placeholder="Name" />
            </div>
            <div class="input-field">
            <div className='icons'><FaEnvelope/></div>
                <input type="email" placeholder="Email" />
            </div>
            <div class="input-field">
            <div className='icons'><FaLock/></div>
                <input type="password" placeholder="Password" />
            </div>
          </div>
          <div class="btn-field">
            <button type="button">Sign up</button>
            <button type="button" class="disable ">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default login
