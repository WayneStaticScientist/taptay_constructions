import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
        <Script data-cfasync="false" src="cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></Script>
        <Script src="assets/js/jquery-3.7.1.min.js"></Script>
        <Script src="assets/js/modernizr.min.js"></Script>
        <Script src="assets/js/bootstrap.bundle.min.js"></Script>
        <Script src="assets/js/imagesloaded.pkgd.min.js"></Script>
        <Script src="assets/js/jquery.magnific-popup.min.js"></Script>
        <Script src="assets/js/isotope.pkgd.min.js"></Script>
        <Script src="assets/js/jquery.appear.min.js"></Script>
        <Script src="assets/js/jquery.easing.min.js"></Script>
        <Script src="assets/js/owl.carousel.min.js"></Script>
        <Script src="assets/js/counter-up.js"></Script>
        <Script src="assets/js/jquery.nice-select.min.js"></Script>
        <Script src="assets/js/wow.min.js"></Script>
        <Script src="assets/js/main.js"></Script>
      </body>
    </Html>
  );
}
