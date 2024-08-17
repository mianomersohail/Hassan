import { useEffect } from "react";
import "./Services.css";

export default function Services() {
  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".amazing-services");
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.classList.add("in-view");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Trigger the scroll event handler on component mount
    handleScroll();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row services">
          <div className="col-lg-3 service-box">
            <div className="service-box-1">
              <div className="service-box-flex">
                <span>
                  <img src="https://majidstudios.com/wp-content/uploads/2023/09/content-marketing-300x300.png" />
                </span>
                <span>
                  <h4>Company Profile</h4>
                </span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec.
              </p>
            </div>
            <div className="service-box-1 service-box-2">
              <div className="service-box-flex">
                <span>
                  <img src="https://majidstudios.com/wp-content/uploads/2023/09/video-camera-300x300.png" />
                </span>
                <span>
                  <h4>Branding Mode</h4>
                </span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec.
              </p>
            </div>
          </div>
          <div className="col-lg-3 service-box">
            <div className="service-box-1">
              <div className="service-box-flex">
                <span>
                  <img src="https://majidstudios.com/wp-content/uploads/2023/09/buyer-300x300.png" />
                </span>
                <span>
                  <h4>Wedding Session</h4>
                </span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec.
              </p>
            </div>
            <div className="service-box-1 service-box-2">
              <div className="service-box-flex">
                <span>
                  <img src="https://majidstudios.com/wp-content/uploads/2023/09/film-reel-300x300.png" />
                </span>
                <span>
                  <h4>Entertainer</h4>
                </span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec.
              </p>
            </div>
          </div>
          <div className="col-xl-5 offset-lg-1 amazing-services">
            <p className="amazing-services-firstp"> OUR SERVICES</p>
            <h1>WE CREATE AMAZING VIDEO</h1>
            <p>
              Maecenas eros dui, tempus sit amet quam ac, ultrices vehicula elit.
              Sed euismod vel tortor et luctus. In viverra finibus velit et
              ullamcorper. Vivamus eleifend velit ac lobortis fringilla. Fusce
              fermentum in ligula non convallis.{" "}
            </p>
            <p>
              Cras auctor tempus mattis. Proin convallis turpis sed aliquam
              dignissim. Vivamus eleifend velit ac lobortis fringilla.
            </p>
            <div className="service-btn-main">
            <div className="btn-nav-contact services-btn">VIEW SERVICES</div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
