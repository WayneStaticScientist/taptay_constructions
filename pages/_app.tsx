import "@/styles/globals.css";
import "@/styles/css/bootstrap.min.css";
import "@/styles/css/all-fontawesome.min.css";
import "@/styles/css/animate.min.css";
import "@/styles/css/magnific-popup.min.css";
// import "@/styles/css/owl.carousel.min.css";
import "@/styles/css/nice-select.min.css";
import "@/styles/css/style.css";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}
