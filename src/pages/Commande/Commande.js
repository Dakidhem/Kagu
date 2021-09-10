import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ProduitWrapper,
  ProduitContainer,
  ListeProduit,
  InfoProduitContainer,
  TableTh,
  GStockTable,
  TableTd,
} from "./CommandeElements.js";
import "./Commande_style.css";
function Commande(props) {
  const [currentCommande, setCurrentCommande] = useState({});
  const [jLivraison, setJLivraison] = useState(1);
  const [Lproduits, setLProduits] = useState([]);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [billingAddress, setBillingAddress] = useState([]);

  useEffect(() => {
    console.log(props.location.pathname.substring(26));
    axios
      .get(
        `https://managecartandorders.herokuapp.com/api/order/${props.location.pathname.substring(
          26
        )}`
      )
      .then((reponse) => {
        setCurrentCommande(reponse.data);
        setLProduits(reponse.data.items);
        setName(reponse.data.user.name);
        setEmail(reponse.data.user.email);
        setBillingAddress(reponse.data.billingAddress);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentCommande]);
  const incrementeJLivraison = () => {
    setJLivraison(jLivraison + 1);
  };
  const decrementeJLivraison = () => {
    if (jLivraison !== 1) setJLivraison(jLivraison - 1);
  };
  const QtyHandler = (e, qty) => {
    const value = e.currentTarget.value;
    setJLivraison(value);
    if (value > qty) {
      alert(
        "La quantité voulue est supérieure à la quantité en stock veuillez changer de quantité!"
      );
    }
  };
  const acceptOrder = () => {
    if (currentCommande.accepted === true) {
      alert("La commande a déjà était accepté");
    } else {
      axios
        .put(
          `https://managecartandorders.herokuapp.com/api/order/${props.location.pathname.substring(
            26
          )}`,
          {
            accepted: true,
            deliveryTime: jLivraison,
          }
        )
        .then((response) => {
          setTimeout(alert("Commande acceptée avec succès"), 3000);
        });
    }
  };

  return (
    <ProduitWrapper>
      <ProduitContainer>
        <ListeProduit>
          <GStockTable>
            <tr>
              <TableTh>Nom du Produit</TableTh>
              <TableTh>Prix</TableTh>
              <TableTh>Quantité</TableTh>
            </tr>
            {Lproduits.map((produit, key) => {
              return (
                <tr id={produit.id} key={key}>
                  <TableTd>{produit.name}</TableTd>
                  <TableTd>{produit.price}$</TableTd>
                  <TableTd>{produit.qty}</TableTd>
                </tr>
              );
            })}
          </GStockTable>
        </ListeProduit>
        <InfoProduitContainer>
          <h1>Détails de la commande</h1>
          <br />
          <h4>Nom du client : {name}</h4>
          <h4>Email du client : {email}</h4>
          <h4>Numéro de téléphone du client : {currentCommande.phoneNumber}</h4>
          <h4>Code postal : {billingAddress.postCode}</h4>

          <h4>
            Adresse de livraison : {billingAddress.country},{" "}
            {billingAddress.wilaya}, {billingAddress.deliveryAddress}
          </h4>
          <h4>Méthode de paiements : Cash on delivery</h4>
          <h4>Prix de la livraison : Gratuit </h4>
          <h4>Montant de la commande : {currentCommande.grandTotal}$</h4>
          <br />
          <p>{currentCommande.description}</p>
          <br />
          <h4>Jours de livraison : {currentCommande.quantite}</h4>
          <br />
          <div class="quantity buttons_added">
            <input
              type="button"
              value="-"
              class="minus"
              onClick={decrementeJLivraison}
            />
            <input
              type="number"
              step="1"
              min="1"
              max={currentCommande.quantite}
              name="quantity"
              value={jLivraison}
              title="jLivraison"
              class="input-text qty text"
              size="4"
              pattern=""
              inputmode=""
              onChange={(e) => {
                QtyHandler(e, currentCommande.quantite);
              }}
            />
            <input
              type="button"
              value="+"
              class="plus"
              onClick={(e) => {
                incrementeJLivraison(e);
              }}
            />
          </div>
          <br />
          <center>
            <button className="btn_addcart" onClick={acceptOrder}>
              Accepter La commande
            </button>
          </center>
        </InfoProduitContainer>
      </ProduitContainer>
    </ProduitWrapper>
  );
}

export default Commande;
