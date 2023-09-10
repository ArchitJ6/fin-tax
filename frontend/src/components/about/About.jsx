import React from 'react'
import './About.css'
import aboutImg from "../../assets/about.png"

function About() {
  return (
    <>
    <div className="about-heading" id='about'>
        <h1>About Us</h1>
        <p>
          This section includes information about the authors of this website.
        </p>
      </div>
      <div className="about-container">
        <section className="about">
          <div className="about-image">
            <img src={aboutImg} />
          </div>
          <div className="about-content">
            <h2>Hi there!</h2>
            <p>
              We are a group of four programmers/friends currently doing our bachelors
              from ADGITM(formerly NIEC) affiliated to GGSIPU.<br></br>

              <b>Team Members </b> - <br></br>

              Anish Hazra (@AnishHazra) - Frontend<br></br>
              Archit Jain (@ArchitJ6) - Full Stack<br></br>
              Ritika Budhiraja (@Ritika-Budhiraja) - Frontend<br></br>
              Krishna Aggarwal (@Krishna Aggarwal) - Backend/ML<br></br>


            </p>
          </div>
        </section>
      </div>
    </>
  )
}

export default About
