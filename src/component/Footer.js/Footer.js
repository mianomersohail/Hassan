import "./Footer.css";
import List2 from "./List2";
import List from "./List";
export default function Footer() {
  return (
    <>
      <div className="container-fluid ">
        <div className="row Footer">
          <div className="col-lg-12">
            <div className="Footer-img">
              <img src="https://kfkit.rometheme.pro/videen/wp-content/uploads/sites/20/2022/03/Logo-1.png" />
            </div>
            <div className="Footer-li">
              <ul className="Footer-ul-first">
                <List className={"footerli"} to={"./Home"} text={"Home"} />
                <List className={"footerli"} to={"./About"} text={"About"} />
                <List
                  className={"footerli"}
                  to={"./Services"}
                  text={"Services"}
                />
                <List className={"footerli"} to={"./Blogs"} text={"Blogs"} />
                <List
                  className={"footerli"}
                  to={"./Contact-Us"}
                  text={"Contact-Us"}
                />
              </ul>
            </div>
            <div className="footer-p one-fotter-p">
              <p>
                Duis ac finibus enim, sit amet vulputate quam. Ut ac ante vel
                dolor pulvinar
              </p>
            </div>

            <div className="footer-p">
              <p>
                bibendum. Curabitur molestie, nisl quis porta laoreet, est ex
                pellentesque orci.
              </p>
            </div>
            <div className="footer-fonts">
              <ul className="footer-second-ul">
                <List2
                  className={"fa fa-facebook-f"}
                  style={{ fontSize: "24px", color: "black" }}
                />
                <List2
                  className={"fa fa-instagram"}
                  style={{ fontSize: "24px", color: "black" }}
                />
                <List2
                  className={"fa fa-twitter"}
                  style={{ fontSize: "24px", color: "black" }}
                />
                <List2
                  className={"fa fa-youtube-play"}
                  style={{ fontSize: "24px", color: "black" }}
                />
              </ul>
            </div>
          </div>
          <hr className="hr-footer"></hr>
          <div>
            <p className="footer-copy-right">
            Copyright 2022 © All Right Reserved Design by Rometheme</p>
          </div>
        </div>
      </div>
    </>
  );
}
