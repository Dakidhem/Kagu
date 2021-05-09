import React from "react";
//-------------------Components------------------
import Navbar from "./components/Navbar/Navbar.js";
//------------------Components_Fin------------------
//------------------GlobalStyles------------------
import GlobalStyle, { WelcomeHero } from "./GlobalStyles.js";
import "./styles.css";
//------------------GlobalStyles_Fin------------------
//------------------Pages------------------
import Acceuil from "./pages/Acceuil/Acceuil.js";
import SignUp from "./pages/SignUp/SignUp.js";
import LogIn from "./pages/LogIn/LogIn.js";
import Catalogue from "./pages/Catalogue/Catalogue.js";

//------------------Pages_Fin------------------
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <WelcomeHero>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Acceuil}></Route>
          <Route path="/SignUp" exact component={SignUp}></Route>
          <Route path="/LogIn" exact component={LogIn}></Route>
          <Route path="/Catalogue" exact component={Catalogue}></Route>
        </Switch>
      </WelcomeHero>
    </Router>
  );
}

export default App;
