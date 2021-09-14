import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
  GStockContainer,
  Wrapper,
  TableTh,
  GStockTable,
  TableTd,
  TableLink,
  TableButton,
  StyledTitle,
  StyledAcceder,
  PasEncore,
  Accepte,
} from "./GOrderElements.js";

import { MdDelete } from "react-icons/md";

const GOrder = () => {
  const [Commandes, setCommandes] = useState([]);
  let Compteur = 0;
  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get("https://managecartandorders.herokuapp.com/api/order/orders")
      .then((Response) => {
        setCommandes(Response.data);
        console.log(Commandes);
        console.log(typeof Commandes);
      })
      .catch((error) => {});
  }, [Commandes]);
  const HandleEtat = (boolean) => {
    if (boolean === true) {
      return <Accepte>Accepté</Accepte>;
    } else return <PasEncore>Pas encore</PasEncore>;
  };
  const DeleteHandler = (id) => {
    axios
      .delete(`https://managecartandorders.herokuapp.com/api/order/${id}`)
      .then((response) => {
        setTimeout(() => {
          alert("Commande supprimé avec succès !");
        }, 1500);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const DisplayCompteur = () => {
    Compteur++;
    return Compteur;
  };
  return (
    <div>
      <Wrapper>
        <GStockContainer>
          <StyledTitle>Gestion des commandes</StyledTitle>

          <GStockTable>
            <tr>
              <TableTh>Num Commande</TableTh>
              <TableTh>Nom du client</TableTh>
              <TableTh>Prix Totale</TableTh>
              <TableTh>Num Tel</TableTh>
              <TableTh>Methode de paiements</TableTh>
              <TableTh>État</TableTh>
              <TableTh>Détails Commande</TableTh>
              <TableTh>Supprimer commande</TableTh>
            </tr>
            {Commandes.filter((commande) => {
              if (input === "") {
                return commande;
              } else if (
                commande.nom.toLowerCase().includes(input.toLowerCase())
              ) {
                return commande;
              }
            }).map((commande, key) => {
              return (
                <tr id={commande.id} key={key}>
                  <TableTd>{DisplayCompteur()}</TableTd>
                  <TableTd>{commande.user.name}</TableTd>

                  <TableTd>{commande.grandTotal}$</TableTd>

                  <TableTd>{commande.phoneNumber}</TableTd>
                  <TableTd>{commande.paymentMethod}</TableTd>
                  <TableTd>{HandleEtat(commande.accepted)}</TableTd>
                  <TableTd>
                    <TableLink
                      to={{
                        pathname: `/GestionCommande/Commande/${commande._id}`,
                        id: commande._id,
                      }}
                    >
                      <StyledAcceder>Accéder à la commande</StyledAcceder>
                    </TableLink>
                  </TableTd>
                  <TableTd>
                    <TableButton
                      onClick={() => {
                        if (
                          window.confirm(
                            "Voulez-vous vraiment supprimer cette commande?"
                          )
                        ) {
                          DeleteHandler(commande._id);
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

export default GOrder;
