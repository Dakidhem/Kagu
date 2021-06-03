import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  PanierWrapper,
  PanierContainer,
  ProduitItem,
} from "./PanierElements.js";

const Panier = () => {
  const [CurrentPanier, setCurrentPanier] = useState([]);
  const [Idpanier, setIdPanier] = useState([]);
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const email = localStorage.getItem("email");
    setCurrentPanier([]);
    const getPanier = async () => {
      const reponse = await axios
        .get(
          `https://managecartandorders.herokuapp.com/api/cart/cart?email=za@gmail.com`
        )
        .then((result) => {
          return result.data.items;
        })
        .catch((err) => {
          console.log(err);
        });
      setCurrentPanier(reponse);
      console.log(reponse);
    };
    getPanier();
  }, []);
  useEffect(() => {
    setIdPanier([]);
    let Product_ID = [];
    CurrentPanier.map((produit) => {
      Product_ID.push(produit.product_id);
    });
    setIdPanier(Product_ID);
    console.log(Product_ID);
  }, [CurrentPanier]);
  useEffect(() => {
    setProducts([]);
    Idpanier.map((id) => {
      console.log(id);
      const idtoProduct = async () => {
        const reponse = await axios
          .get(
            `https://whispering-bastion-00988.herokuapp.com/api/produits/${id}`
          )
          .then((result) => {
            console.log();
            return result.data;
          })
          .catch((err) => {
            console.log(err.message);
          });
        setProducts((prevProducts) => [...prevProducts, reponse]);
      };
      idtoProduct();
    });
  }, [Idpanier]);
  return (
    <PanierWrapper>
      <PanierContainer>
        {Products.map((p, key) => {
          console.log(Products);
          return (
            <ProduitItem>
              <p>{p.nom}</p>
            </ProduitItem>
          );
        })}
      </PanierContainer>
    </PanierWrapper>
  );
};

export default Panier;
