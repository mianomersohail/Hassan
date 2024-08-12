import "./Portfolio.css";

export default function Portfolio() {
  return (
    <>
      <div className="container-fluid">
        <div className="row PORTFOLIO">
          <div className="col-lg-12 portfolio-seconday">
            <div>
              <p className="portfolio-p-one">PORTFOLIO</p>
            </div>
            <div>
              <h1 className="portfolio-mywork">MY WORK</h1>
            </div>
            <div>
              <p className="portfolio-other-p">
                Duis ac finibus enim, sit amet vulputate quam. Ut ac ante vel
                dolor pulvinar
              </p>
            </div>
            <div>
              <p className="portfolio-other-p">
                bibendum. Curabitur molestie, nisl quis porta laoreet, est ex
                pellentesque orci.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div>
              <img
                className="portfolio-img-one"
                src="https://t4.ftcdn.net/jpg/08/82/43/13/240_F_882431328_ZKnIeTp7N1zjblNOtDfCgQE5tMFkAzUV.jpg"
                alt="Portfolio 1"
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div>
              <img
                className="portfolio-img-one"
                src="https://as1.ftcdn.net/v2/jpg/01/13/32/62/1000_F_113326295_YxNhUSvS9gkqtelpo3nDWvoERtoyoz4C.jpg"
                alt="Portfolio 2"
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div>
              <img
                className="portfolio-img-one"
                src="https://t4.ftcdn.net/jpg/01/58/22/93/240_F_158229385_iUUozthkFxBKhjU559MtVv8Q1CaEjCEH.jpg"
                alt="Portfolio 3"
              />
            </div>
          </div>

          <div className="col-lg-12">
            <div className="portfolio-video-container">
              <iframe
                width="50%"
                height="500px"
                src="https://www.youtube.com/embed/7PIji8OubXU?si=mTWylifwurLZrxOI"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-lg-4">
            <div>
                <img className="portfolio-img-one portfolio-img-2" src="https://t4.ftcdn.net/jpg/01/58/22/93/240_F_158229385_iUUozthkFxBKhjU559MtVv8Q1CaEjCEH.jpg"/>
            </div>

          </div>
          <div className="col-lg-4">
            <div>
                <img className="portfolio-img-one portfolio-img-2" src="https://as1.ftcdn.net/v2/jpg/01/13/32/62/1000_F_113326295_YxNhUSvS9gkqtelpo3nDWvoERtoyoz4C.jpg"/>
            </div>

          </div>
          <div className="col-lg-4">
            <div>
                <img className="portfolio-img-one portfolio-img-2" src="https://t4.ftcdn.net/jpg/08/82/43/13/240_F_882431328_ZKnIeTp7N1zjblNOtDfCgQE5tMFkAzUV.jpg"/>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
