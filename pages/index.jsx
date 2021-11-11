import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Politicaprivacidad from "../components/politicaprivacidad";
import Contacto from "../components/contacto";

export default function Home() {
  const handleCollapse = (id) => {
    const elemento = document.getElementById(id);
    const add = elemento.classList.toggle("d-none");
    const botonleer = elemento.previousElementSibling;

    if (!add) {
      botonleer.innerHTML = "Leer menos";
    } else {
      botonleer.innerHTML = "Leer más";
    }
  };

  return (
    <div>
      <Header />
      
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <h1 className="text-white">más innovación</h1>
          <h1 className="text-white">más desarrollo</h1>
          <h1 className="text-white">más investigación</h1>
          <a href="#about" className="btn-get-started scrollto">
            Cada día somos más
          </a>
        </div>
      </section>

      <main id="main">
        <div id="topbar" className="d-flex align-items-center fixed-top"></div>
        {/* QUIENES SOMOS */}
        <section id="why-us" className="why-us">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 d-flex align-items-stretch w-100">
                <div className="content">
                  <h3>¿Por qué nace?</h3>
                  <p>
                    El Instituto de Investigación, desarrollo e Innovación en
                    Eficiencia Energética tiene la finalidad de redefinir el
                    futuro y transitar hacia un modelo energético nunca antes
                    visto; sostenible, innovador y competitivo. Investigar la
                    evolución de los paneles solares y la recuperación de sus
                    materiales, ser pioneros en el mercado de reciclaje de
                    baterías, desarrollar un sistema tecnológico para vehículos
                    eléctricos nunca antes visto y promover una vivienda modular
                    totalmente ecológica, son los 4 pilares fundamentales a
                    partir de los cuales construiremos un futuro mejor,
                    cambiando el actual e insostenible modelo económico de
                    nuestra sociedad. Nuestro grupo empresarial, Solar Energy
                    Revolution y GMS inmobiliaria, hará llegar este cambio a
                    nuestra sociedad a través de la innovación (i) que, aunque
                    ya es un factor presente en nuestro día a día, no está lo
                    suficientemente implementado. La innovación se llevará a la
                    práctica por medio del desarrollo (D) y la investigación (I)
                    de un modelo circular completamente sustentable, el cual es,
                    sin lugar a dudas, la solución a la creciente demanda de
                    energías renovables y a la disminución de la huella de
                    carbono.
                  </p>
                  <div className="text-center"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section EQUIPO */}
        <section id="about" className="about">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                <a
                  href="https://www.youtube.com/watch?v=sw6YCUpvC6U"
                  className="glightbox play-btn mb-4"
                ></a>
              </div>

              <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                <h3>Nuestro Equipo.</h3>
                <p></p>

                <div className="icon-box">
                  <h4>Equipo</h4>
                  <p>
                    En el Instituto de Investigación, Desarrollo e Innovación en
                    Eficiencia Energética, contamos con un equipo
                    multidisciplinar para el desarrollo de nuestra actividad,
                    formado tanto por técnicos cualificados que aportan
                    experiencia a los diferentes proyectos, como por jóvenes
                    cualificados que contribuyen a fortalecer áreas en las que
                    se requiere mayor soporte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* i+d+i */}
        <section id="services" className="services">
          <div className="container">
            <div className="section-title">
              <h2>i + D + I</h2>
            </div>

            <div className="row">
              <div className="col">
                <div className="icon-box">
                  <div className="icon ">
                    <img src="/img/iconos/IconosBaterias.svg" />
                  </div>
                  <h4>Reciclaje y fabricación de paneles solares </h4>

                  <button
                    type="button"
                    className="collapsible"
                    onClick={() => handleCollapse("contenido-tecnologia")}
                  >
                    Leer Más
                  </button>

                  <div id="contenido-tecnologia" className="d-none">
                    <p>
                      La tecnología solar fotovoltaica tiene un papel
                      fundamental en la transición hacia un futuro 100%
                      renovable. Su amplia disponibilidad, su carácter modular,
                      y su bajo costo de operación y mantenimiento son algunas
                      de las características que hacen que esta tecnología sea
                      cada día más popular. Aun así, existen varios desafíos a
                      encarar para llegar a la tan ansiada transición
                      energética. La disponibilidad de materiales, una
                      precursora política de reciclado, y el desarrollo de más y
                      mejores opciones de acumulación, son algunos de los retos
                      a los que haremos frente para cambiar de un sistema
                      energético radicado en los combustibles fósiles, a uno
                      basado en las fuentes renovables.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="icon-box">
                  <div className="icon">
                    <img src="/img/iconos/IconosPaneles.svg"></img>
                  </div>
                  <h4>
                    <a href="">Reciclaje baterías de vehículos eléctricos </a>
                  </h4>
                  <button
                    type="button"
                    className="collapsible"
                    onClick={() => handleCollapse("contenido-reciclaje")}
                  >
                    Leer Más
                  </button>
                  <div id="contenido-reciclaje" className="d-none">
                    <p>
                      Actualmente, estamos viviendo un significativo incremento
                      de la fabricación de vehículos eléctricos, pues cada día
                      son más las personas se suman a la movilidad sostenible.
                      Sin embargo, y a consecuencia de esto último, se está
                      produciendo también un aumento del volumen de baterías, lo
                      que no es precisamente respetuoso con el medioambiente. De
                      ahí que surja la necesidad de desarrollar nuevas
                      alternativas para obtener nuevas formas de reciclaje de
                      las mismas y darles así, una segunda vida.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-100"></div>

              <div className="col">
                <div className="icon-box">
                  <div className="icon">
                    <img src={"/img/iconos/IconosVehiculos.svg"} />
                  </div>
                  <h4>
                    <a href="">Vehículos eléctricos</a>
                  </h4>
                  <button
                    type="button"
                    className="collapsible"
                    onClick={() => handleCollapse("contenido-kit")}
                  >
                    Leer Más
                  </button>
                  <div id="contenido-kit" className="d-none">
                    <p>
                      La movilidad eléctrica ha dejado de ser el futuro para
                      convertirse en el presente, por lo que es fundamental, el
                      desarrollo de un sistema de autosuficiencia energética
                      para vehículos eléctricos. Todo ello, con el objetivo de
                      poner punto y final a la necesidad de instalaciones de
                      infraestructuras de recarga y conseguir así, un desarrollo
                      tecnológico de vehículos eléctricos 100% sostenible.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="icon-box">
                  <div className="icon">
                    <img src={"/img/iconos/IconosViviendas.svg"} />
                  </div>
                  <h4>
                    <a href="">Fabricación viviendas modulares</a>
                  </h4>
                  <button
                    type="button"
                    className="collapsible"
                    onClick={() => handleCollapse("contenido-viviendas")}
                  >
                    Leer Más
                  </button>
                  <div id="contenido-viviendas" className="d-none">
                    <p>
                      Hoy por hoy, la construcción modular supone una gran
                      alternativa a la arquitectura tradicional. Las grandes
                      posibilidades y ventajas que presenta, han hecho que
                      consiga una gran aceptación en estos últimos años. Por lo
                      que el empleo de materiales respetuosos con el medio
                      ambiente y la aplicación de nuevas tecnologías son
                      indispensables en este tipo de edificación. De este modo,
                      se potenciarán las posibilidades en cuanto a diseño,
                      producción, logística y sostenibilidad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proyectos (Pendiente) */}
        <section id="doctors" className="doctors">
          <div className="container">
            <div className="section-title">
              <h2 >Proyectos</h2>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="member d-flex align-items-start">
                  {/* <div className="pic">
                  <img
                    src="img/Sonnenstromfabrik-logo.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div> */}
                  <div className="member-info">
                    <h4>Sonnenstromfabrik (CS Wismar GmbH)</h4>
                    <span>Fabricante Alemán de placas solares</span>
                    <p>
                      Es el líder en calidad de vanguardia para módulos solares
                      fabricados en Alemania. Tiempo de actividad: 90%. Entrega
                      a tiempo: 99,5%. Tasa de reclamación: 0,02%
                    </p>
                    <div className="social">
                      <a href="https://www.facebook.com/sonnenstromfabriknlbe/">
                        <i className="ri-facebook-fill"></i>
                      </a>
                      <a href="https://www.youtube.com/channel/UCZJluBungY3ncjCNTo69dTg">
                        <i className="ri-youtube-fill"></i>
                      </a>
                      <a href="https://www.linkedin.com/company/cs-wismar-gmbh/">
                        {" "}
                        <i className="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4 mt-lg-0">
                <div className="member d-flex align-items-start">
                  {/* <div className="pic">
                  <img
                    src="./Schweizer-logo.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div> */}
                  <div className="member-info">
                    <h4>Ernst Schweizer AG</h4>
                    <span>Construyendo cultura y sostenibilidad</span>
                    <p>
                      Ernst Schweizer AG, una empresa líder en construcción
                      metálica que ofrece una amplia gama de productos para la
                      industria de la construcción.
                    </p>
                    <div className="social">
                      <a href="https://www.facebook.com/ernstschweizer.ch/">
                        <i className="ri-facebook-fill"></i>
                      </a>
                      <a href="https://www.youtube.com/channel/UCoeFz7Fjw5DjoiyI9-nRzXQ">
                        <i className="ri-youtube-fill"></i>
                      </a>
                      <a href="https://www.linkedin.com/company/ernstschweizer">
                        {" "}
                        <i className="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4">
                <div className="member d-flex align-items-start">
                  {/* <div className="pic">
                  <img
                    src="./Wallbox-Logo.png"
                    className="img-fluid"
                    alt=""
                  />
                </div> */}
                  <div className="member-info">
                    <h4>Wallbox</h4>
                    <span>Cargadores de coches eléctricos</span>
                    <p>
                      Wallbox crea sistemas de carga inteligentes que combinan
                      tecnología de vanguardia con un diseño excepcional,
                      gestionando la comunicación entre el coche y el cargador
                      mediante aplicaciones fáciles de usar.
                    </p>
                    <div className="social">
                      <a href="https://twitter.com/wallboxchargers">
                        <i className="ri-twitter-fill"></i>
                      </a>
                      <a href="https://www.facebook.com/wallboxchargers/">
                        <i className="ri-facebook-fill"></i>
                      </a>
                      <a href="https://www.youtube.com/channel/UCOnpqckWPs4DdxMYXm1oZkg">
                        <i className="ri-youtube-fill"></i>
                      </a>
                      <a href="https://www.linkedin.com/company/wallbox-chargers/">
                        {" "}
                        <i className="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4">
                <div className="member d-flex align-items-start">
                  {/* <div className="pic">
                  <img
                    src="./EVBox-logo.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div> */}
                  <div className="member-info">
                    <h4>EVBOX</h4>
                    <span>
                      Soluciones empresariales de recarga de vehículos
                      eléctricos
                    </span>
                    <p>
                      EVBox permite a las empresas con visión de futuro
                      construir un futuro sostenible proporcionando soluciones
                      de recarga de vehículos eléctricos flexibles y escalables.
                    </p>
                    <div className="social">
                      <a href="https://twitter.com/evbox?lang=es">
                        <i className="ri-twitter-fill"></i>
                      </a>
                      <a href="https://www.facebook.com/evboxbv/">
                        <i className="ri-facebook-fill"></i>
                      </a>
                      <a href="https://www.youtube.com/channel/UCxch2CGz8QT9fGT7Sr70gRg">
                        <i className="ri-youtube-fill"></i>
                      </a>
                      <a href="https://www.linkedin.com/company/evbox/?originalSubdomain=es">
                        {" "}
                        <i className="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Indsutria */}
        <section id="industria" className="industria">
          <div className="container">
            <div className="section-title">
              <h2 className="titulo">Industria</h2>
              <span>
                      Nuestra industria nace a raíz de los
                      importantes/innumerables avances en el Instituto de
                      Investigación, Desarrollo e Innovación. La primera fábrica
                      del grupo empresarial en ejecutarse será la industria de
                      fabricación de paneles fotovoltaicos, seguida de la de
                      reciclaje de baterías, que al igual que el resto de naves
                      y siguiendo nuestro modelo sostenible, se alimenta en su
                      totalidad de energía fotovoltaica.
                    </span>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="member d-flex align-items-start">
                  {/* <div className="pic">
                  <img
                    src="img/Sonnenstromfabrik-logo.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div> */}

                  <div className="member-info">
                    <h4>Social</h4>
                    
                    <p>
                      Es el líder en calidad de vanguardia para módulos solares
                      fabricados en Alemania. Tiempo de actividad: 90%. Entrega
                      a tiempo: 99,5%. Tasa de reclamación: 0,02%
                    </p>

                    <div className="social">
                      <a href="https://www.facebook.com/sonnenstromfabriknlbe/">
                        <i className="ri-facebook-fill"></i>
                      </a>
                      <a href="https://www.youtube.com/channel/UCZJluBungY3ncjCNTo69dTg">
                        <i className="ri-youtube-fill"></i>
                      </a>
                      <a href="https://www.linkedin.com/company/cs-wismar-gmbh/">
                        {" "}
                        <i className="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4 mt-lg-0">
                <div className="member d-flex align-items-start">
                  {/* <div className="pic">
                  <img
                    src="./Schweizer-logo.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div> */}
                  <div className="member-info">
                    <h4>Econónomico</h4>
                    <span>Construyendo cultura y sostenibilidad</span>
                    <p>
                      Ernst Schweizer AG, una empresa líder en construcción
                      metálica que ofrece una amplia gama de productos para la
                      industria de la construcción.
                    </p>
                    <div className="social">
                      <a href="https://www.facebook.com/ernstschweizer.ch/">
                        <i className="ri-facebook-fill"></i>
                      </a>
                      <a href="https://www.youtube.com/channel/UCoeFz7Fjw5DjoiyI9-nRzXQ">
                        <i className="ri-youtube-fill"></i>
                      </a>
                      <a href="https://www.linkedin.com/company/ernstschweizer">
                        {" "}
                        <i className="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4">
                <div className="member d-flex align-items-start">
                  {/* <div className="pic">
                  <img
                    src="./Wallbox-Logo.png"
                    className="img-fluid"
                    alt=""
                  />
                </div> */}
                  <div className="member-info">
                    <h4>Técnico</h4>
                    <span>Cargadores de coches eléctricos</span>
                    <p>
                      Wallbox crea sistemas de carga inteligentes que combinan
                      tecnología de vanguardia con un diseño excepcional,
                      gestionando la comunicación entre el coche y el cargador
                      mediante aplicaciones fáciles de usar.
                    </p>
                    <div className="social">
                      <a href="https://twitter.com/wallboxchargers">
                        <i className="ri-twitter-fill"></i>
                      </a>
                      <a href="https://www.facebook.com/wallboxchargers/">
                        <i className="ri-facebook-fill"></i>
                      </a>
                      <a href="https://www.youtube.com/channel/UCOnpqckWPs4DdxMYXm1oZkg">
                        <i className="ri-youtube-fill"></i>
                      </a>
                      <a href="https://www.linkedin.com/company/wallbox-chargers/">
                        {" "}
                        <i className="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4">
                <div className="member d-flex align-items-start">
                  {/* <div className="pic">
                  <img
                    src="./EVBox-logo.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div> */}
                  <div className="member-info">
                    <h4>Energético</h4>
                    <span>
                      Soluciones empresariales de recarga de vehículos
                      eléctricos
                    </span>
                    <p>
                      EVBox permite a las empresas con visión de futuro
                      construir un futuro sostenible proporcionando soluciones
                      de recarga de vehículos eléctricos flexibles y escalables.
                    </p>
                    <div className="social">
                      <a href="https://twitter.com/evbox?lang=es">
                        <i className="ri-twitter-fill"></i>
                      </a>
                      <a href="https://www.facebook.com/evboxbv/">
                        <i className="ri-facebook-fill"></i>
                      </a>
                      <a href="https://www.youtube.com/channel/UCxch2CGz8QT9fGT7Sr70gRg">
                        <i className="ri-youtube-fill"></i>
                      </a>
                      <a href="https://www.linkedin.com/company/evbox/?originalSubdomain=es">
                        {" "}
                        <i className="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
              <div className="member-info">
                <h4>Político</h4>
                <span>
                  Soluciones empresariales de recarga de vehículos eléctricos
                </span>
                <p>
                  EVBox permite a las empresas con visión de futuro construir un
                  futuro sostenible proporcionando soluciones de recarga de
                  vehículos eléctricos flexibles y escalables.
                </p>
                <div className="social">
                  <a href="https://twitter.com/evbox?lang=es">
                    <i className="ri-twitter-fill"></i>
                  </a>
                  <a href="https://www.facebook.com/evboxbv/">
                    <i className="ri-facebook-fill"></i>
                  </a>
                  <a href="https://www.youtube.com/channel/UCxch2CGz8QT9fGT7Sr70gRg">
                    <i className="ri-youtube-fill"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/evbox/?originalSubdomain=es">
                    {" "}
                    <i className="ri-linkedin-box-fill"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <h2>Contacto</h2>
              <p>Nuestras delegaciones</p>
            </div>
          </div>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.795950161053!2d-15.419727484912835!3d28.00013861917064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4097e63a3a1def%3A0xa23a0aa71833dd30!2sCalle%20Antonio%20Rumeu%20de%20Armas%2C%201%2C%2035200%20Telde%2C%20Las%20Palmas!5e0!3m2!1ses-419!2ses!4v1619182185357!5m2!1ses-419!2ses"
              width="100%"
              height="350"
            ></iframe>
          </div>

          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-4">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Domicilio:</h4>
                    <p>
                      Calle Antonio Rumeu de Armas no.1, pl. 1, pta. N. 35200
                      Telde. Las Palmas. España
                    </p>
                  </div>

                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>info@ser.energy</p>
                  </div>

                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Teléfono Gratuito:</h4>
                    <p>+34 900 101 803</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 mt-5 mt-lg-0">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Su Nombre"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Su Email"
                        required
                      />
                    </div>

                    <div className="col-md-4 form-group mt-3 mt-md-0">
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        id="phone"
                        placeholder="Su Teléfono"
                        data-rule="minlen:4"
                        data-msg="Por favor, incluya el prefijo del país"
                      />
                      <div className="validate"></div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Un breve asunto"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Información (requerida)"
                      required
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      tu mensaje ha sido enviado. Gracias!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Enviar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Politicaprivacidad />
        <Footer />
      </main>
    </div>
  );
}
