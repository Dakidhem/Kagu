import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
  GStockContainer,
  Wrapper,
  TableTh,
  GStockTable,
  ProductImg,
  TableTd,
  TableLink,
  TableButton,
  Form,
  ButtonR,
  Input,
  StyledTitle,
} from "./ArchiveProduitElements";
import { VscCheck, VscClose } from "react-icons/vsc";
import { MdDelete } from "react-icons/md";
import { BiSearch, BiArchiveOut } from "react-icons/bi";
const ArchiveProduit = () => {
  const [Products, setProducts] = useState([]);
  let Compteur = 0;
  const [input, setInput] = useState("");
  const [barOpened, setBarOpened] = useState(false);
  const formRef = useRef();
  const inputFocus = useRef();

  const onFormSubmit = (e) => {
    // When form submited, clear input, close the searchbar and do something with input
    e.preventDefault();
    setInput("");
    setBarOpened(true);
    // After form submit, do what you want with the input value
    console.log(`Form was submited with input: ${input}`);
  };
  useEffect(() => {
    axios
      .get("https://whispering-bastion-00988.herokuapp.com/api/produits")
      .then((Response) => {
        setProducts(Response.data.reverse());
        console.log(Products);
        console.log(typeof Products);
      })
      .catch((error) => {});
  }, [Products]);
  const HandleEtat = (nombre) => {
    if (nombre > 0) {
      return <VscCheck color="green" />;
    } else return <VscClose color="red" />;
  };
  const desarchiverHandler = (id) => {
    axios
      .put(
        `https://whispering-bastion-00988.herokuapp.com/api/produits/${id}`,
        { archived: false }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteHandler = (id) => {
    axios
      .delete(
        `https://whispering-bastion-00988.herokuapp.com/api/produits/${id}`
      )
      .then((response) => {
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
          <StyledTitle>Listes des produits archivés</StyledTitle>
          <Form
            barOpened={barOpened}
            onClick={() => {
              // When form clicked, set state of baropened to true and focus the input
              setBarOpened(true);
              inputFocus.current.focus();
            }}
            // on focus open search bar
            onFocus={() => {
              setBarOpened(true);
              inputFocus.current.focus();
            }}
            // on blur close search bar
            onBlur={() => {
              setBarOpened(false);
            }}
            // On submit, call the onFormSubmit function
            onSubmit={onFormSubmit}
            ref={formRef}
          >
            <ButtonR type="submit" barOpened={barOpened}>
              <BiSearch />
            </ButtonR>
            <Input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              ref={inputFocus}
              value={input}
              barOpened={barOpened}
              placeholder="Rechercher un produit par son nom..."
            />
          </Form>
          <GStockTable>
            <tr>
              <TableTh>Num Produits</TableTh>
              <TableTh>Nom</TableTh>
              <TableTh>Image</TableTh>
              <TableTh>Prix</TableTh>
              <TableTh>Quantité</TableTh>
              <TableTh>État</TableTh>
              <TableTh>Désarchiver</TableTh>
              <TableTh>Supprimer</TableTh>
            </tr>
            {Products.filter((product) => {
              if (input === "") {
                return product;
              } else if (
                product.nom.toLowerCase().includes(input.toLowerCase())
              ) {
                return product;
              }
            }).map((product, key) => {
              if (product.archived === true)
                return (
                  <tr id={product.id} key={key}>
                    <TableTd>{DisplayCompteur()}</TableTd>
                    <TableTd>{product.nom}</TableTd>
                    <TableTd>
                      <ProductImg src={product.imageurl} />
                    </TableTd>

                    <TableTd>{product.prix}</TableTd>

                    <TableTd>{product.quantite}</TableTd>
                    <TableTd>{HandleEtat(product.quantite)}</TableTd>
                    <TableTd>
                      <TableButton
                        onClick={() => {
                          if (
                            window.confirm(
                              "Voulez-vous vraiment désarchiver ce produit?"
                            )
                          ) {
                            desarchiverHandler(product.id);
                            setTimeout(() => {
                              alert("Produit désarchivé avec succès !");
                            }, 1500);
                          }
                        }}
                      >
                        <BiArchiveOut color="blue" size="24" />
                      </TableButton>
                    </TableTd>
                    <TableTd>
                      <TableButton
                        onClick={() => {
                          if (
                            window.confirm(
                              "Voulez-vous vraiment supprimer ce produit?"
                            )
                          ) {
                            deleteHandler(product.id);
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

export default ArchiveProduit;
