import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import ABOUT from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Testimonials from "./components/testmonials/Testimonials";

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
      </main>
    </>
  );
}

export default App;
