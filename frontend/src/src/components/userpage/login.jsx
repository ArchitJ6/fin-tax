import React from "react";
import "./login.css";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.xsrfCookieName = 'csrftoken'; // Replace with your CSRF cookie name
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

function login() {
  const navigate= useNavigate();
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("username", e.target[0].value);
  //   formData.append("password", e.target[2].value);

  //   try {
  //     // Make an HTTP POST request to your Django backend
  //     // const response = await axios.post(
  //     //   "https://cors-anywhere.herokuapp.com/corsdemo/http://localhost:8000/",
  //     //   formData
  //     // );
  //     const response = await axios.post(
  //       "http://localhost:8000/api-auth/login/",
  //       formData
  //     );

  //     if (response.status === 200) {
  //       // Successful login
  //       // You can redirect the user to another page or perform any other actions here
  //       alert("Login successful!");
  //     } else {
  //       // Handle login error
  //       alert("Login failed. Please check your credentials.");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("An error occurred while logging in.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate("/dashboard");
  }

  return (
    <div className="container">
      <div className="form-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-groups">
            <div className="input-field">
              <div className="icons">
                <FaUser />
              </div>
              <input type="text" placeholder="Name" />
            </div>
            
            <div className="input-field">
              <div className="icons">
                <FaLock />
              </div>
              <input type="password" placeholder="Password" />
            </div>
          </div>
          <div className="btn-field">
            <button type="submit">
              Login
            </button>
            <button type="button" className="disable " onClick={()=> navigate("/signup")}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default login;
