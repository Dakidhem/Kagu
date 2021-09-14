import React, { useState } from "react";
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
import UserDashboard from "./pages/Profiles/UserDashboard/UserDashboard.js";
import AdminDashboard from "./pages/Profiles/AdminDashboard/AdminDashboard.js";
import SuperAdminDashboard from "./pages/Profiles/SuperAdminDashboard/SuperAdminDashboard.js";
import VerifyRole from "./pages/Profiles/VerifyRole.js";
import MonProfile from "./pages/Profiles/MonProfile/MonProfile.js";
import AjouterProduit from "./pages/AjouterProduit/AjouterProduit.js";
import GStock from "./pages/Gstock/Gstock.js";
import AjouterAdmin from "./pages/AjouterAdmin/AjouterAdmin.js";
import FicheProduit from "./pages/FicheProduit/FicheProduit.js";
import Order from "./pages/Order/Order.js";
import CommandeSucces from "./pages/CommandeSucces/CommandeSucces.js";
import ListeAdmins from "./pages/ListeAdmins/ListeAdmins.js";
import GOrder from "./pages/GOrder/GOrder.js";
import Commande from "./pages/Commande/Commande.js";
import ArchiveProduit from "./pages/ArchiveProduit/ArchiveProduit.js";
import ContactUs from "./pages/ContactUs/ContactUs.js";
//------------------Pages_Fin------------------
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ModifierProduit from "./pages/ModifierProduit/ModifierProduit.js";
import Panier from "./pages/Panier/Panier.js";
import Parametre from "./pages/Parametre/Parametre.js";

function App() {
  let state = "";
  if (sessionStorage.getItem("state")) {
    state = sessionStorage.getItem("state");
  } else state = localStorage.getItem("state");
  let role = "";
  if (sessionStorage.getItem("roles")) {
    role = sessionStorage.getItem("roles");
  } else role = localStorage.getItem("roles");
  const [authorized, setAuthorized] = useState(state ? true : false);
  const [Role, setRole] = useState(role);

  return (
    <Router>
      <GlobalStyle />
      <WelcomeHero>
        <Navbar setAuthorized={setAuthorized} />
        <Switch>
          <Route path="/" exact component={Acceuil}></Route>
          <Route path="/SignUp" exact component={SignUp}></Route>
          <Route
            path="/LogIn"
            exact
            component={() => (
              <LogIn setAuthorized={setAuthorized} setRole={setRole} />
            )}
          ></Route>
          <Route
            path="/VerifyRole"
            exact
            component={() => <VerifyRole authorized={authorized} Role={Role} />}
          ></Route>
          <Route
            path="/UserDashboard"
            exact
            component={() => <UserDashboard authorized={authorized} />}
          ></Route>
          <Route
            path="/UserDashboard/MonProfile"
            exact
            component={MonProfile}
          ></Route>
          <Route
            path="/AdminDashboard/GestionProduit/AjouterProduit"
            exact
            component={() => <AjouterProduit authorized={authorized} />}
          ></Route>
          <Route
            path="/AdminDashboard/GestionProduit/ModifierProduit/:id"
            exact
            component={() => <ModifierProduit authorized={authorized} />}
          ></Route>
          <Route
            path="/AdminDashboard"
            exact
            component={() => <AdminDashboard authorized={authorized} />}
          ></Route>
          <Route
            path="/SuperAdminDashboard"
            exact
            component={() => <SuperAdminDashboard authorized={authorized} />}
          ></Route>
          <Route path="/Catalogue" exact component={Catalogue}></Route>
          <Route
            path="/AdminDashboard/MonProfile"
            exact
            component={MonProfile}
          ></Route>
          <Route
            path="/AdminDashboard/GestionProduit"
            exact
            component={GStock}
          ></Route>
          <Route
            path="/AdminDashboard/GestionCommande"
            exact
            component={GOrder}
          ></Route>
          <Route
            path="/GestionProduit/AjouterProduit"
            exact
            component={AjouterProduit}
          ></Route>
          <Route
            path="/SuperAdminDashboard/MonProfile"
            exact
            component={MonProfile}
          ></Route>
          <Route
            path="/SuperAdminDashboard/AjouterAdmin"
            exact
            component={AjouterAdmin}
          ></Route>
          <Route
            path="/SuperAdminDashboard/GestionProduit"
            exact
            component={GStock}
          ></Route>
          <Route
            path="/GestionProduit/ArchiveProduit"
            exact
            component={ArchiveProduit}
          ></Route>
          <Route
            path="/SuperAdminDashboard/ListeAdmins"
            exact
            component={ListeAdmins}
          ></Route>
          <Route
            path="/SuperAdminDashboard/GestionCommande"
            exact
            component={GOrder}
          ></Route>
          <Route
            path="/GestionCommande/Commande/:id"
            exact
            component={Commande}
          ></Route>
          <Route path="/Panier" exact component={Panier}></Route>
          <Route
            name="ficheproduit"
            exact
            path="/Catalogue/:id"
            component={FicheProduit}
          />
          <Route path="/Commander" exact component={Order} />
          <Route path="/CommandeSucces" exact component={CommandeSucces} />
          <Route path="/Contactez-nous" exact component={ContactUs} />
          <Route
            path="/Parametre"
            exact
            component={() => (
              <Parametre
                setAuthorized={setAuthorized}
                authorized={authorized}
              />
            )}
          />
        </Switch>
      </WelcomeHero>
    </Router>
  );
}

export default App;
