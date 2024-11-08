import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/global.css";
import "../assets/fonts/custom-devicon/style.css";
import 'aos/dist/aos.css'; // You can also use <link> for styles

function onLoadFont() {
  this.onload = null;
  this.rel = "stylesheet";
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Eduardo Sodre | Fullstack Developer</title>
        <meta
          name="description"
          content="Hi! I am Eduardo Sodre, a Fullstack Developer specialized in React and React Native."
        />
        <meta
          name="keywords"
          content="React, React Native, Fullstack, Frontend, Backend, Node.js, HTML, CSS, JavaScript"
        />

        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          as="style"
          onLoad={onLoadFont}
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
            rel="stylesheet"
            type="text/css"
          />
        </noscript>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
