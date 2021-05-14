import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  GStockContainer,
  Wrapper,
  TableTh,
  GStockTable,
  ProductImg,
  TableTd,
  TableLink,
  TableButton,
} from "./GstockElements.js";
import { VscCheck, VscClose } from "react-icons/vsc";
import { MdDelete, MdModeEdit } from "react-icons/md";
const Gstock = () => {
  const [Products, setProducts] = useState([]);
  const [Compteur, setCompteur] = useState(0);
  const [Confirm, setConfirm] = useState(false);

  useEffect(() => {
    axios
      .get("https://productsapi1.herokuapp.com/api/produits")
      .then((Response) => {
        setProducts(Response.data);
        console.log(Products);
      })
      .catch((error) => {});
  }, [Products]);
  const HandleEtat = (nombre) => {
    if (nombre > 0) {
      return <VscCheck color="green" />;
    } else return <VscClose color="red" />;
  };
  const DeleteHandler = (id) => {
    axios
      .delete(`https://productsapi1.herokuapp.com/api/produits/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch();
  };
  return (
    <div>
      <Wrapper>
        <GStockContainer>
          <GStockTable>
            <tr>
              <TableTh>Num Produits</TableTh>
              <TableTh>Nom</TableTh>
              <TableTh>Image</TableTh>
              <TableTh>Prix</TableTh>
              <TableTh>Quantité</TableTh>
              <TableTh>État</TableTh>
              <TableTh>Modifier</TableTh>
              <TableTh>Supprimer</TableTh>
            </tr>
            {Products.map((product) => {
              return (
                <tr id={product.id}>
                  <TableTd>{Compteur}</TableTd>
                  <TableTd>{product.nom}</TableTd>
                  <TableTd>
                    <ProductImg src={product.imageurl} />
                  </TableTd>

                  <TableTd>{product.prix}</TableTd>

                  <TableTd>{product.quantite}</TableTd>
                  <TableTd>{HandleEtat(product.quantite)}</TableTd>
                  <TableTd>
                    <TableLink
                      to={{
                        pathname: `/AdminDashboard/GestionProduit/ModifierProduit/${product.id}`,
                        id: product.id,
                      }}
                    >
                      <MdModeEdit color="green" size="24" />
                    </TableLink>
                  </TableTd>
                  <TableTd>
                    <TableButton
                      onClick={() => {
                        if (
                          window.confirm(
                            "Voulez-vous vraiment supprimer ce produit?"
                          )
                        ) {
                          DeleteHandler(product.id);
                          setTimeout(() => {
                            alert("Produit supprimé avec succès !");
                          }, 1500);
                        }
                      }}
                    >
                      <MdDelete color="red" size="24" />
                    </TableButton>
                  </TableTd>
                </tr>
              );
            })}
          </GStockTable>
        </GStockContainer>
      </Wrapper>
    </div>
  );
};

export default Gstock;
