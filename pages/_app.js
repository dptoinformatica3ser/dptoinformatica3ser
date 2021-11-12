import '../styles/globals.css'
import '../styles/vendor/bootstrap-icons/bootstrap-icons.css'
import '../styles/vendor/animate.css/animate.min.css'
import '../styles/vendor/bootstrap/css/bootstrap.min.css'
import '../styles/vendor/boxicons/css/boxicons.min.css'
import '../styles/vendor/fontawesome-free/css/all.min.css'
import '../styles/vendor/glightbox/css/glightbox.min.css'
import '../styles/vendor/remixicon/remixicon.css'
import '../styles/vendor/swiper/swiper-bundle.min.css'
import dynamic from "next/dynamic"
const Glightbox = dynamic(
   () => import('glightbox'),
   { ssr: false }
 )
dynamic(
   () => import('../styles/js/main'),
   { ssr: false }
 )

function MyApp({ Component, pageProps }) {
   
   return (
      <>         
         <Component {...pageProps} />
      </>
   );
}
export default MyApp;