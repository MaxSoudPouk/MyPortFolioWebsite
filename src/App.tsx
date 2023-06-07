import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import ABOUT from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./qualification/Qualification";

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
      </main>
    </>
  );
}

export default App;
