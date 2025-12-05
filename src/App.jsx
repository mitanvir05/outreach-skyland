import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import OutreachFeatures from "./components/OutreachFeatures";
import OutreachHero from "./components/OutreachHero";
import OutreachWorkflow from "./components/OutreachWorkflow";

function App() {
  return (
    <div>
      <Navbar />
      <OutreachHero />
      <OutreachFeatures />
      <OutreachWorkflow />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
