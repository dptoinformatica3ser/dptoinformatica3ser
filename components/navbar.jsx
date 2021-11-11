import Image from "next/image";
export default function Navbar() {
  return (
    <header id="header" className="fixed-top">
      <div className="pepe">
        <a className="logo me-auto" href="#">
          <img src="/img/logoweb.png" alt=""  />
        </a>
      </div>

      <div className="container d-flex align-items-center" id="navbar2" >
        {/* <!--  <h1 class="logo me-auto"><a href="https://yt3.ggpht.com/ytc/AAUvwnhC0B2Syh9mlkpMAXXRMQqYu2Sxstg2ccNm9YBy=s176-c-k-c0x00ffffff-no-rj-mo">ser.energy</a></h1>--> */}
        {/* Uncomment below if you prefer to use an image logo --> */}

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Quienes Somos
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                Equipo
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                i+D+I
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#doctors">
                Proyectos
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#industria">
                Industria
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Ubicación
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <a href="#appointment" className="appointment-btn scrollto">
          <span className="d-none d-md-inline"></span>Contacto
        </a>
      </div>
    </header>
  );
}
