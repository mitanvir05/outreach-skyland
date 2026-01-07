import "./App.css";
import ComparisonTable from "./components/ComparisonTable";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import OutreachFeatures from "./components/OutreachFeatures";
import OutreachHero from "./components/OutreachHero";
import OutreachWorkflow from "./components/OutreachWorkflow";
import Testimonials from "./components/Testimonials";
import TrustedBy from "./components/TrustedBy";
import WhatsAppFloat from "./components/WhatsAppFloat";

function App() {
  return (
    <div>
      <Navbar />
      <OutreachHero />
      <WhatsAppFloat />
      <TrustedBy />
      <OutreachFeatures />
      <ComparisonTable />
      <OutreachWorkflow />
      <Testimonials />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
