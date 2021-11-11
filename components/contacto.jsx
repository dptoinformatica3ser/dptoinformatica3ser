export default function Contacto() {
  return (
    <section id="appointment" className="appointment section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Contacto</h2>
          <p>
            Cuéntanos algo sobre tu proyecto, ya sean pequeñas instalaciones de
            autoconsumo para particulares, comunidades o empresas , como grandes
            proyectos comerciales o estatales y nos ponemos en contacto en un
            plazo de tiempo corto.
          </p>
        </div>

        <form
          action="../contacto.php"
          id="contact-form"
          method="post"
          className="php-email-form"
        >
          <div className="row">
            <div className="col-md-4 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Su nombre"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Su Email"
                data-rule="email"
                data-msg="Introduce un email válido"
              />
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input
                type="tel"
                className="form-control"
                name="phone"
                id="phone"
                placeholder="Su Teléfono"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div className="validate"></div>
            </div>
          </div>

          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows="5"
              placeholder="Su Información"
            ></textarea>
            <div className="validate"></div>
          </div>

          <div className="mb-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">
              Su solicitud de cita ha sido enviada con éxito. ¡Gracias!
            </div>
          </div>
          
          {/* <button
              type="submit"
              className="g-recaptcha"
              data-sitekey="6LcnoRcdAAAAAG4m4lRex7Wb9qx85tCi2sZatDWo"
              data-callback="onSubmit"
              data-action="submit"
            >
              Enviar
            </button> */}
        </form>
      </div>
    </section>
  );
}
