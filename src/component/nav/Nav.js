import "./Nav.css";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img
            className="navbar-brand"
            src="https://kfkit.rometheme.pro/videen/wp-content/uploads/sites/20/2022/03/Logo-1.png"
            alt="Logo"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#">
                  Portfolio +
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Single Portfolio
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Resume
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="#">
                  Pages +
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Pricing Plan
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      FAQs
                    </a>
                  </li>
                  <li class="dropdown-submenu">
                    <a class="dropdown-item" href="#">
                      Blogs +
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Blog 1
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Blog 2
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      404
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3001/login">
                  Log In
                </a>
              </li>
            </ul>
            <form className="d-flex btn-contact-main" role="search">
              <div className="btn-nav-contact" type="submit">
                CONTACT US
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Nav;
