import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
import GlobalStyle from "./GlobalStyles.js";
import SignIn from "./pages/Signin/Signin.js";
import LogIn from "./pages/Login/Login.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/SignIn" exact component={SignIn}></Route>
        <Route path="/LogIn" exact component={LogIn}></Route>
      </Switch>
    </Router>
  );
}

export default App;
