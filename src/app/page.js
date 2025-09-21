import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Ourmission from "../components/Ourmission";
import Ourperspective from "../components/Ourperspective";
import Footer from "../components/Footer";
import FAQ from "../components/Faq";
import Technologies from "../components/Technologies";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Ourmission />
      <Ourperspective />
      <Ourmission />
      <Technologies />
      <FAQ />
      <Footer />
    </div>
  );
}
