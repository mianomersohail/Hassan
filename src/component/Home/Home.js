import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="container-fluid home-img-background">
        <div className="Home-Main">
          <div className="row">
            {/* Additional content can go here */}
          </div>
        </div>
      </div>
      <div className="container Main-img-two">
        <div className="row">
          <div className="col-lg-6">
            <div className="home-img-two-main">
              <img
                className="home-img-two"
                src="https://media.licdn.com/dms/image/D4D03AQFIa076u4F0hw/profile-displayphoto-shrink_800_800/0/1720441939007?e=1729123200&v=beta&t=WSMTa8-9AthtHqL0YC1UolScydzmWP2CdRn0YyAcu7g"
                alt="Profile"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="home-box">
              <div>
                <p style={{ color: '#FFE379' }}>WELCOME TO VIDEEN STUDIO</p>
              </div>
              <div>
                <h1 className="home-cool">LET'S MAKE YOUR VIDEO LOOK MORE COOL​</h1>
              </div>
              <div>
                <p className="home-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
              <div>
                <div className="home-btn">Get Started</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
