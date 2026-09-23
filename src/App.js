import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Qualification from "./components/Qualification";
import ScrollTop from "./components/ScrollTop";
import Services from "./components/Services";
import Skills from "./components/Skills";
import { ThemeProvider } from "./context/ThemeContext";
import Background3D from "./components/Background3D";
import CursorSparkles from "./components/CursorSparkles";

function App() {
  return (
    <ThemeProvider>
      <Background3D />
      <CursorSparkles />
      <div className="relative z-10 transition-colors duration-400 ease-in-out">
        <Header />
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Services />
          <Qualification />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
        <ScrollTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
