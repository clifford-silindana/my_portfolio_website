import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
//import "bootstrap/dist/css/bootstrap.css";
import "./styles/App.css";


function App() {
  return (
    <div className="App">
        <Navigation />
        <Hero />
        <Projects />
        <Articles/>
        <Footer />
    </div>
  );
}

export default App;
