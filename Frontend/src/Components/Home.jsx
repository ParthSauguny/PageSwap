import Navbar from "./navbar";
import Hero from "../Components/landing/Hero";
import Stats from "../Components/landing/Stats";
import HowItWorks from "../Components/landing/Howitworks";
import WhyChoose from "../Components/landing/WhyChoose";
import FeaturedBooks from "../Components/landing/FeauturedBooks";
import CTA from "../Components/landing/CTA";
import Footer from "./landing/Footer";

function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <Stats />
      <HowItWorks />
      <WhyChoose />
      <FeaturedBooks />
      <CTA />
      <Footer/>
    </>
  );
}

export default Home;