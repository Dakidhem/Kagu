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
  BtnAjouterP,
  Form,
  ButtonR,
  Input,
  StyledTitle,
} from "./ListeAdminsElements.js";
import { VscCheck, VscClose } from "react-icons/vsc";
import { BiSearch, BiUserMinus } from "react-icons/bi";
import { RiAddCircleLine } from "react-icons/ri";
const ListeAdmins = () => {
  const [Admins, setAdmins] = useState([]);
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
      .get("https://fathomless-coast-11439.herokuapp.com/api/getAllAdmin")
      .then((Response) => {
        setAdmins(Response.data);
        console.log(Admins);
        console.log(typeof Admins);
      })
      .catch((error) => {});
  }, [Admins]);

  const DeleteHandler = (id) => {
    axios
      .delete(`https://fathomless-coast-11439.herokuapp.com/api/deleteAdmin`, {
        data: { adminId: id },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch();
  };
  const DisplayCompteur = () => {
    Compteur++;
    return Compteur;
  };
  return (
    <div>
      <Wrapper>
        <GStockContainer>
          <StyledTitle>La Liste des administrateurs</StyledTitle>
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
              placeholder="Rechercher administrateur par son nom..."
            />
          </Form>
          <GStockTable>
            <tr>
              <TableTh>Num Admin</TableTh>
              <TableTh>Nom</TableTh>
              <TableTh>Prénom</TableTh>
              <TableTh>Email</TableTh>
              <TableTh>NumTel</TableTh>
              <TableTh>Retirer Admin</TableTh>
            </tr>
            {Admins.filter((admin) => {
              if (input === "") {
                return admin;
              } else if (
                admin.nom.toLowerCase().includes(input.toLowerCase())
              ) {
                return admin;
              }
            }).map((admin, key) => {
              return (
                <tr id={admin._id} key={key}>
                  <TableTd>{DisplayCompteur()}</TableTd>
                  <TableTd>{admin.nom}</TableTd>
                  <TableTd>{admin.prenom}</TableTd>

                  <TableTd>{admin.email}</TableTd>

                  <TableTd>{admin.numtel}</TableTd>

                  <TableTd>
                    <TableButton
                      onClick={() => {
                        if (
                          window.confirm(
                            "Voulez-vous vraiment retirer cette Administrateur?"
                          )
                        ) {
                          DeleteHandler(admin._id);
                          setTimeout(() => {
                            alert("Administrateur retiré avec succès !");
                          }, 1500);
                        }
                      }}
                    >
                      <BiUserMinus color="red" size="24" />
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

export default ListeAdmins;
