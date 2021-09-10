import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  PanierWrapper,
  PanierContainer,
  ProduitItem,
  ImgPanier,
  ProduitContainer,
  LeftSide,
  RightSide,
  Nomp,
  LeftSideInfo,
  ProductsContainer,
  RemoveProduit,
  HrReact,
  Remove_Prix,
  PanierHeader,
  PanierContenu,
  NombreItem,
  Styledh4,
  Styledh3,
  OrderBtn,
  StyledPrix,
  RemovePanier,
  ModifierQty,
} from "./PanierElements.js";
import { MdDeleteSweep } from "react-icons/md";

const Panier = () => {
  const [CurrentPanier, setCurrentPanier] = useState([]);
  const [Products, setProducts] = useState([]);
  const [reload, setReload] = useState(true);
  const [CartItem, setCartItem] = useState(0);
  const [Montant, setMontant] = useState(0);
  let Montant_totale = 0;
  useEffect(() => {
    const email = localStorage.getItem("email");
    const getPanier = async () => {
      const reponse = await axios
        .get(
          `https://managecartandorders.herokuapp.com/api/cart/cart?email=${email}`
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
  }, [reload]);
  useEffect(() => {
    setProducts([]);
    if (CurrentPanier) {
      CurrentPanier.map((id) => {
        console.log(id.qty);
        const idtoProduct = async () => {
          const reponse = await axios
            .get(
              `https://whispering-bastion-00988.herokuapp.com/api/produits/${id.product_id}`
            )
            .then((result) => {
              console.log(result.data);
              return result.data;
            })
            .catch((err) => {
              console.log(err.message);
            });
          console.log();
          console.log();
          Montant_totale = Montant_totale + reponse.prix * id.qty;
          console.log(Montant_totale);
          setMontant(Montant_totale);
          if (!Products.includes(reponse)) {
            reponse.qtycmd = id.qty;
            setProducts((prevProducts) => [...prevProducts, reponse]);
          }
        };
        idtoProduct();
      });
      setCartItem(CurrentPanier.length);
    }
  }, [CurrentPanier]);
  const SupprimerProduit = (product_id) => {
    const email = localStorage.getItem("email");
    console.log(product_id);
    console.log(email);
    console.log(typeof product_id);
    axios
      .delete(
        `https://managecartandorders.herokuapp.com/api/cart/deleteProduit`,
        { data: { email: email, product_id: product_id } }
      )
      .then((reponse) => {
        setReload(!reload);
        setTimeout(alert("Produit supprimer avec succès"), 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const DeletePanier = () => {
    const email = localStorage.getItem("email");
    axios
      .post(
        `https://managecartandorders.herokuapp.com/api/cart/remove?email=${email}`,
        { email: email }
      )
      .then((reponse) => {
        setReload(!reload);
        console.log(reponse);
        setTimeout(alert("Panier vidé avec succès"), 3000);
        setCartItem(0);
        setMontant(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const ModifierQuantite = (product_id, qty) => {
    const email = localStorage.getItem("email");
    axios
      .post(`https://managecartandorders.herokuapp.com/api/cart/subtract`, {
        email: email,
        product_id: product_id,
        qty: 1,
      })
      .then((reponse) => {
        setReload(!reload);
        console.log(reponse);
        setTimeout(alert("Quantité réduite avec succès"), 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <PanierWrapper>
      <PanierContainer>
        <PanierHeader>
          <NombreItem>Panier ({CartItem} meubles)</NombreItem>
          <RemovePanier onClick={DeletePanier}>
            <MdDeleteSweep size="28" />
            Vider le panier
          </RemovePanier>
        </PanierHeader>
        <PanierContenu>
          <LeftSide>
            <ProductsContainer>
              {Products.map((p, key) => {
                return (
                  <div>
                    <ProduitItem>
                      <ProduitContainer>
                        <ImgPanier src={p.imageurl} />
                        <LeftSideInfo>
                          <Nomp>{p.nom}</Nomp>
                          <Styledh4>Quantité : {p.qtycmd}</Styledh4>
                          <Remove_Prix>
                            <RemoveProduit
                              onClick={() => {
                                SupprimerProduit(p.id);
                              }}
                            >
                              Supprimer le produit
                            </RemoveProduit>
                            <ModifierQty
                              onClick={() => {
                                ModifierQuantite(p.id, p.qtycmd);
                              }}
                            >
                              Réduire la quantité
                            </ModifierQty>
                            <StyledPrix>${p.prix * p.qtycmd}</StyledPrix>
                          </Remove_Prix>
                        </LeftSideInfo>
                      </ProduitContainer>
                    </ProduitItem>
                    <center>
                      <HrReact />
                    </center>
                  </div>
                );
              })}
            </ProductsContainer>
          </LeftSide>
          <RightSide>
            <Styledh3>Montant totale :</Styledh3>
            <br />
            <Styledh4>Montant temporaire : {Montant} $</Styledh4>
            <br />
            <Styledh4>Livraison : Gratuite</Styledh4>
            <br />
            <HrReact />
            <br />
            <Styledh4>Montant à payer : {Montant} $</Styledh4>
            <br />
            <OrderBtn
              to={{
                pathname: "/Commander",
                items: Products,
                grandTotal: Montant,
              }}
            >
              Passer commande
            </OrderBtn>
          </RightSide>
        </PanierContenu>
      </PanierContainer>
    </PanierWrapper>
  );
};

export default Panier;
