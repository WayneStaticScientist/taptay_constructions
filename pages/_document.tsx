import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head title="TapTay - Construction Company">
        <meta name="description" content="TapTay Construction Company - Building your dreams with precision and excellence." />
        <meta property="og:title" content="TapTay - Construction Company" />
        <meta property="og:description" content="TapTay Construction Company - Building your dreams with precision and excellence." />
        <meta property="og:image" content="/assets/img/logo/logo.png" />
        <meta property="og:url" content="https://taptay.co.zw" />
        <meta name="twitter:card" content="TapTay constructions" />
        <meta name="twitter:title" content="TapTay - Construction Company" />
        <meta name="twitter:description" content="TapTay Construction Company - Building your dreams with precision and excellence." />
        <meta name="twitter:image" content="/assets/img/logo/logo.png" />
        <link rel="icon" href="/assets/img/logo/logo.png" />
      </Head>
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
