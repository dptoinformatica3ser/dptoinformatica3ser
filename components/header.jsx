import Head from 'next/head';

export default function Header() {
  return (
    <Head>
      <title>PROYECTO APIS</title>
      <meta name="description" content="Generated by create next app" />
      <meta charSet="utf-8"/>

      {/* Favicons */}
      <link rel="icon" href="/img/favicon.png" />
      <link href="/img/apple-touch-icon.png" rel="apple-touch-icon"></link>
      {/* Google FOnts */}
      <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet" />
      <script src="https://www.google.com/recaptcha/api.js"></script>
      {/* Vendor CSS Files */}
        
        {/* <script src="assets/"></script>
        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="assets/vendor/purecounter/purecounter.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script> */}
      {/* FONT  */}
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,800" rel="stylesheet"></link>
      {/* RECAPTCHA */}
      <script src="https://www.google.com/recaptcha/api.js"></script>
    </Head>
                  
    )
}
