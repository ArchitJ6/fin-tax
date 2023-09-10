import React from "react";
import "./Home.css";
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"

function Home() {
  return (
      <div className="features" id="features">
        <span className="featuresTitle">Features</span>
        <div className="row">
          <div className="text-col">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, atque!
            </p>
          </div>
          <div className="img-col">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="img-col">
            <img src={img2} alt="" />
          </div>
          <div className="text-col">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, magni.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="text-col">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio maiores ex sint qui eum repellendus.
            </p>
          </div>
          <div className="img-col">
            <img src={img3} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="img-col">
            <img src={img1} alt="" />
          </div>
          <div className="text-col">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, excepturi.
            </p>
          </div>
        </div>
      </div>
  );
}

export default Home;
