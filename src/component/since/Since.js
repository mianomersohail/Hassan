import { useEffect } from "react";
import "./Since.css";

export default function Since() {
  useEffect(() => {
    const boxes = document.querySelectorAll(".pricing-box, .since-box");

    const handleScroll = () => {
      boxes.forEach((box) => {
        const rect = box.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          box.classList.add("scrolled");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="container-fluid main-since">
        <div className="row since">
          <div className="col-lg-6 since-box">
            <p className="since-2004">SINCE 2004</p>
            <h1 className="since-bold">HELLO, I'M HASSAN AKRAM</h1>
            <p className="since-p-one">
              Duis ac finibus enim, sit amet vulputate quam. Ut ac ante vel
              dolor pulvinar bibendum. Curabitur molestie, nisl quis porta
              laoreet.
            </p>
            <h5 className="since-h5-one">
              “Cras auctor sapien nunc, et imperdiet lorem aliquam vel.
              Vestibulum eu enim mi. Nam ut orci eget arcu rutrum molestie.
              Maecenas augue ligula, blandit et lorem”
            </h5>
            <h3 className="since-name">HASSAN AKRAM</h3>
            <h5 className="since-editor">Editor & Videography</h5>
          </div>
          <div className="col-lg-6">
            <div className="since-img">
              <img
                src="https://media.licdn.com/dms/image/D4D03AQFIa076u4F0hw/profile-displayphoto-shrink_800_800/0/1720441939007?e=1729123200&v=beta&t=WSMTa8-9AthtHqL0YC1UolScydzmWP2CdRn0YyAcu7g"
                alt="Hassan Akram"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
