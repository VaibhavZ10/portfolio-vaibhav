import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Work from "../components/Work";
import NavBar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vaibhav Sindal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero />
      {<About />}
      {<Services />}
      {<Work />}
      {<Footer />}
    </div>
  );
}
