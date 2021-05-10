import React, { useState, useEffect } from "react";
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
import Profile from "./pages/Profile/Profile.js";

//------------------Pages_Fin------------------
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const state = localStorage.getItem("state");
  const [authorized, setAuthorized] = useState(state ? true : false);

  return (
    <Router>
      <GlobalStyle />
      <WelcomeHero>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Acceuil}></Route>
          <Route path="/SignUp" exact component={SignUp}></Route>
          <Route
            path="/LogIn"
            exact
            component={() => <LogIn setAuthorized={setAuthorized} />}
          ></Route>
          <Route
            path="/Profile"
            exact
            component={() => <Profile authorized={authorized} />}
          ></Route>
          <Route path="/Catalogue" exact component={Catalogue}></Route>
        </Switch>
      </WelcomeHero>
    </Router>
  );
}

export default App;
