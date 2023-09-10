import React from "react";
import "./login.css";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.xsrfCookieName = "csrftoken"; // Replace with your CSRF cookie name
axios.defaults.xsrfHeaderName = "X-CSRFToken";

function SignUp() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate("/dashboard");
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>Sign Up</h1>
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
                <FaEnvelope />
              </div>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <div className="icons">
                <FaLock />
              </div>
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-field">
              <div className="icons">
                <FaUser />
              </div>
              <input type="text" placeholder="Age" />
            </div>
          </div>
          <div className="btn-field">
            <button
              type="button"
              className="disable "
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button type="submit" className="disable ">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
