import Hero from "@/components/Hero";
// import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
// import Footer from '@/components/Footer';
// import Navbar from "@/components/Navbar";

import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Mutqi Amrillah</title>
        <meta name="description" content="Amril's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* <Navbar /> */}
        <Hero />
        {/* <About /> */}
        <Skills />
        <Projects />
        <Contact />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
