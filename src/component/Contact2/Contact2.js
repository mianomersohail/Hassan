import "./Contact2.css";
export default function Contact2() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345090946!2d144.95373531531662!3d-37.816279279751554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1602742856741!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="contact-box">
                <div>
                    <span><img className="contact-img" src="https://majidstudios.com/wp-content/uploads/2023/09/phone-call-300x300.png"/></span><span>Phone Number</span>
                </div>
                
            </div>
          </div>
          <div className="col-lg-">
            <div>
                <div>

                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
