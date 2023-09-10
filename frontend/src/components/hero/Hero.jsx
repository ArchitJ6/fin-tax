import React from "react";
import "./Hero.css";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import bg from "../../assets/tax.gif"

function Hero() {
  return (
    <section className="home" id="home">
        <div className="row min-vh-100 align-items-center text-md-left">
            <img className="col-md-6 pr-md-5 bgImg" src={bg} alt="" />
          <div className="col-md-6 pl-md-5 content">
            <h2>Get <span>Financial </span>Advice<span> Anytime</span>, Anywhere.</h2>
            <h3>Chat with our AI finacial chatbot to get <br />instant finacial information and assistance.</h3>
            <a href="/chat"><button className="button">Chat Now</button></a>
          </div>
        </div>
    </section>
  );
}

export default Hero;
