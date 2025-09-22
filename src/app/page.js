import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Ourmission from "../components/Ourmission";
import Ourperspective from "../components/Ourperspective";
import Footer from "../components/Footer";
import FAQ from "../components/Faq";
import Technologies from "../components/Technologies";
import Stats from "../components/Stats";
import Keepsus from "../components/Whatkeep";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Ourmission />
      <Ourperspective />
      <Keepsus />
      <Stats />
      <Technologies />
      <FAQ />
      <Footer />
    </div>
  );
}
