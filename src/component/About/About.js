import { useEffect } from "react";
import "./About.css";
import Portfolio from '../Portfolio/Portfolio'
import Promotion from '../promotion/Promotion'
import Footer from '../Footer.js/Footer'
export default function About() {
  useEffect(() => {
    const filling70 = document.querySelector(".filling-70");
    const filling80 = document.querySelector(".filling-80");
    const filling90 = document.querySelector(".filling-90");
    // Add the appropriate class to trigger the filling effect
    filling70.classList.add("filled-70");
    filling80.classList.add("filled-80");
    filling90.classList.add("filled-90");
  }, []);
  return (
    <>
      <div className="container-fluid About-background">
        <div className="About-opacity">
          <div className="row">
            <div className="col-lg-12">{/* Other content */}</div>
          </div>
        </div>
      </div>
      <div>
        <div className="container About-two">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-flex">
                <h1 style={{ color: "white" }}>ABOUT</h1>
                <h1 style={{ color: "#FFE379" }}> HASSAN STUDIOS</h1>
              </div>
              <div>
                <h4 className="About-home">HOME/ABOUT</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid Owner">
        <div className="row">
          <div className="col-lg-6">
            <div>
              <img
                className="about-owner-img"
                src="https://media.licdn.com/dms/image/D4D03AQFIa076u4F0hw/profile-displayphoto-shrink_800_800/0/1720441939007?e=1729123200&v=beta&t=WSMTa8-9AthtHqL0YC1UolScydzmWP2CdRn0YyAcu7g"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <h1>HEY, I'M MAJID MAQSOOD</h1>
            </div>
            <div>
              <p style={{ color: "#FFE379" }}>CEO OF MAJID STUDIOS</p>
            </div>
            <div>
              <p>
                With over five years of experience and a portfolio boasting
                1500+ video editing projects, me and my team bring a wealth of
                expertise to the table.
              </p>
            </div>
            <div>
              <h1 style={{ marginTop: "4rem" }}>OUR EXPERTISE</h1>
            </div>
            <div className="about-filling-container">
              <div className="about-filling filling-70">
                <div className="fixed-text">ADOBE PREMIER PRO</div>
                <div className="about-filling-bar"></div>
                <div className="moving-text">70%</div>
              </div>
            </div>
            <div className="about-filling-container">
              <div className="about-filling filling-80">
                <div className="fixed-text">ADOBE AFTER EFFECTS</div>
                <div className="about-filling-bar"></div>
                <div className="moving-text">80%</div>
              </div>
            </div>
            <div className="about-filling-container">
              <div className="about-filling filling-90">
                <div className="fixed-text">ADOBE PHOTOSHOP</div>
                <div className="about-filling-bar"></div>
                <div className="moving-text">90%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Portfolio/>
      <Promotion/>
      <Footer/>
    </>
      );
}
