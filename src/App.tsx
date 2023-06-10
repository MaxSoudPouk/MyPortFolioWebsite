import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import ABOUT from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Testimonials from "./components/testmonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <ABOUT />
        <Skills />
        <Services />
        <Qualification />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
