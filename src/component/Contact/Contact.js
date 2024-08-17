import './Contact.css'
import Contact2 from '../Contact2/Contact2'
export default function Contact(){
    return(
        <>
           <div className="container-fluid About-contact">
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
      <Contact2/>
        </>
    )
}