import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import ViewProjects from "./pages/ViewProjects";
import ViewArticles from "./pages/ViewArticles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.css";
import "./styles/App.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navigation />

        <Routes>

          <Route path = "/home" element = {<Home />}/>
      
          <Route path = "/articles" element = {<ViewArticles />}/>
              
          <Route path = "/projects" element = {<ViewProjects />}/>

        </Routes>

      </BrowserRouter>
        
    </div>
  );
}

export default App;
