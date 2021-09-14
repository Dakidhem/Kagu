import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ProduitWrapper,
  ProduitContainer,
  ImgProduit,
  InfoProduitContainer,
} from "./FicheProduitElements.js";
import "./FicheProduit_style.css";
function FicheProduit(props) {
  const [CurrentProduct, setCurrentProduct] = useState({});
  const [Qty, setQty] = useState(1);
  useEffect(() => {
    console.log(props.location.pathname);
    axios
      .get(
        `https://whispering-bastion-00988.herokuapp.com/api/produits/${props.location.pathname.substring(
          11
        )}`
      )
      .then((reponse) => {
        console.log(props.location.pathname);
        setCurrentProduct(reponse.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const incrementeQty = () => {
    setQty(Qty + 1);
  };
  const decrementeQty = () => {
    if (Qty !== 1) setQty(Qty - 1);
  };
  const QtyHandler = (e, qty) => {
    const value = e.currentTarget.value;
    setQty(value);
    if (value > qty) {
      alert(
        "La quantité voulue est supérieure à la quantité en stock veuillez changer de quantité!"
      );
    }
  };
  const addCart = () => {
    if (localStorage.getItem("email") === null) {
      alert("Vous devez être connecté pour ajouter des produits au panier !");
    } else {
      axios
        .post(`https://managecartandorders.herokuapp.com/api/cart/addCart`, {
          email: localStorage.getItem("email"),
          product_id: props.location.pathname.substring(11),
          qty: Qty,
        })
        .then((response) => {
          console.log(response.data);
          setTimeout(alert("Produit ajouté au panier avec succès"), 3000);
        })
        .catch((err) => {
          console.log("hello world !");
          console.log(err);
        });
    }
  };
  return (
    <ProduitWrapper>
      <ProduitContainer>
        <ImgProduit src={CurrentProduct.imageurl} />
        <InfoProduitContainer>
          <h1>{CurrentProduct.nom}</h1>
          <br />
          <h3>{CurrentProduct.prix}$</h3>
          <br />
          <p>{CurrentProduct.description}</p>
          <br />
          <h4>Quantité en stock : {CurrentProduct.quantite}</h4>
          <br />
          <div class="quantity buttons_added">
            <input
              type="button"
              value="-"
              class="minus"
              onClick={decrementeQty}
            />
            <input
              type="number"
              step="1"
              min="1"
              max={CurrentProduct.quantite}
              name="quantity"
              value={Qty}
              title="Qty"
              class="input-text qty text"
              size="4"
              pattern=""
              inputmode=""
              onChange={(e) => {
                QtyHandler(e, CurrentProduct.quantite);
              }}
            />
            <input
              type="button"
              value="+"
              class="plus"
              onClick={(e) => {
                incrementeQty(e);
              }}
            />
          </div>
          <br />
          <center>
            <button className="btn_addcart" onClick={addCart}>
              Ajouter au panier
            </button>
          </center>
        </InfoProduitContainer>
      </ProduitContainer>
    </ProduitWrapper>
  );
}

export default FicheProduit;
