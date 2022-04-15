import Navigation3 from "./components/Navigation3";
import Navigation4 from "components/Navigation4";
import Home from "./pages/Home";
import ViewProjects from "./pages/ViewProjects";
import ViewArticles from "./pages/ViewArticles";

//page imports
import Web2Projects from "pages/Web2Projects";
import Web3Projects from "pages/Web3Projects";
import DSProjects from "pages/DSProjects";
import SDArticles from "pages/SDArticles";
import BusinessArticles from "pages/BusinessArticles";
import InvestmentArticles from "pages/InvestmentArticles";

//inner-page imports
import Web2ProjectDetails from "pages/Web2ProjectDetails";
import Web3ProjectDetails from "pages/Web3ProjectDetails";
import DSProjectDetails from "pages/DSProjectDetails";
import SDArticleDetails from "pages/SDArticleDetails";
import BusinessArticleDetails from "pages/BusinessArticleDetails";
import InvestmentArticleDetails from "pages/InvestmentArticleDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.css";
import "./styles/App.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className = "header-area">
        </div>

        <div className = "body-area">
        <Routes>

          

          <Route path = "/" element = {<Home />}/>
      
          <Route path = "/articles" element = {<ViewArticles />}/>
              
          <Route path = "/projects" element = {<ViewProjects />}/>

          <Route path = "/projects/web2" element = {<Web2Projects />}/>
          <Route path = "/projects/web2/:id" element = {<Web2ProjectDetails />}/>
          <Route path = "/projects/web3" element = {<Web3Projects />}/>
          <Route path = "/projects/web3/:id" element = {<Web3ProjectDetails />}/>
          <Route path = "/projects/data-science" element = {<DSProjects />}/>
          <Route path = "/projects/data-science/:id" element = {<DSProjectDetails />}/>

          <Route path = "/articles/software-development" element = {<SDArticles />}/>
          <Route path = "/articles/software-development/:id" element = {<SDArticleDetails />}/>
          <Route path = "/articles/business" element = {<BusinessArticles />}/>
          <Route path = "/articles/business/:id" element = {<BusinessArticleDetails />}/>
          <Route path = "/articles/investments" element = {<InvestmentArticles />}/>
          <Route path = "/articles/investments/:id" element = {<InvestmentArticleDetails />}/>

        </Routes>
        </div>

      </BrowserRouter>
        
    </div>
  );
}

export default App;
