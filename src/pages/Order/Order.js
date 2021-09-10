import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import {
  StyledFormWrapper,
  StyledForm,
  StyledInput,
  StyledButton,
  Styledh1,
  StyledFormContainer,
} from "./OrderElements.js";
const initalState = {
  phoneNumber: "",
  postCode: "",
  deliveryAddress: "",
};

const options = [
  { value: "1-Adrar", label: "1-Adrar" },
  { value: "2-Chlef", label: "2-Chlef" },
  { value: "3-Laghout", label: "3-Laghout" },
  { value: "4-Oum El bouaghi", label: "4-Oum El bouaghi" },
  { value: "5-Batna", label: "5-Batna" },
  { value: "6-Béjaïa", label: "6-Béjaïa" },
  { value: "7-Biskra", label: "7-Biskra" },
  { value: "8-Béchar", label: "8-Béchar" },
  { value: "9-Blida", label: "9-Blida" },
  { value: "10-Bouira", label: "10-Bouira" },
  { value: "11-Tamanrasset", label: "11-Tamanrasset" },
  { value: "12-Tébessa", label: "12-Tébessa" },
  { value: "13-Tlemcen", label: "13-Tlemcen" },
  { value: "14-Tiaret", label: "14-Tiaret" },
  { value: "15-Tizi Ouzou", label: "15-Tizi Ouzou" },
  { value: "16-Alger", label: "16-Alger" },
  { value: "17-Djelfa", label: "17-Djelfa" },
  { value: "18-Jijel", label: "18-Jijel" },
  { value: "19-Sétif", label: "19-Sétif" },
  { value: "20-Saïda", label: "20-Saïda" },
  { value: "21-Skikda", label: "21-Skikda" },
  { value: "22-Sidi Bel Abbès", label: "22-Sidi Bel Abbès" },
  { value: "23-Annaba", label: "23-Annaba" },
  { value: "24-Guelma", label: "24-Guelma" },
  { value: "25-Constantine", label: "25-Constantine" },
  { value: "26-Médéa", label: "26-Médéa" },
  { value: "27-Mostaganem", label: "27-Mostaganem" },
  { value: "28-M'Sila", label: "28-M'Sila" },
  { value: "29-Mascara", label: "29-Mascara" },
  { value: "30-Ouargla", label: "30-Ouargla" },
  { value: "31-Oran", label: "31-Oran" },
  { value: "32-El Bayadh", label: "32-El Bayadh" },
  { value: "33-Illizi", label: "33-Illizi" },
  { value: "34-Bordj Bou Arreridj", label: "34-Bordj Bou Arreridj" },
  { value: "35-Boumerdès", label: "35-Boumerdès" },
  { value: "36-Tarf", label: "36-Tarf" },
  { value: "37-Tindouf", label: "37-Tindouf" },
  { value: "38-Tissemsilt", label: "38-Tissemsilt" },
  { value: "39-El Oued", label: "39-El Oued" },
  { value: "40-Khenchela", label: "40-Khenchela" },
  { value: "41-Souk Ahras", label: "41-Souk Ahras" },
  { value: "42-Tipaza", label: "42-Tipaza" },
  { value: "43-Mila", label: "43-Mila" },
  { value: "44-Aïn Defla", label: "44-Aïn Defla" },
  { value: "45-Naâma", label: "45-Naâma" },
  { value: "46-Aïn Témouchent", label: "46-Aïn Témouchent" },
  { value: "47-Ghardaïa", label: "47-Ghardaïa" },
  { value: "48-Relizane", label: "48-Relizane" },
  { value: "49-Timimoun", label: "49-Timimoun" },
  { value: "50-Bordj Badji Mokhtar", label: "50-Bordj Badji Mokhtar" },
  { value: "51-Ouled Djellal", label: "51-Ouled Djellal" },
  { value: "52-Béni Abbès", label: "52-Béni Abbès" },
  { value: "53-In Salah", label: "53-In Salah" },
  { value: "54-In Guezzam", label: "54-In Guezzam" },
  { value: "55-Touggourt", label: "55-Touggourt" },
  { value: "56-Djanet", label: "56-Djanet" },
  { value: "57-El M'Ghair", label: "57-El M'Ghair" },
  { value: "58-El Meniaa", label: "58-El Meniaa" },
];
const Order = (props) => {
  const [state, setState] = useState(initalState);
  const [Panier, SetPanier] = useState([]);
  const [Montant, setMontant] = useState(0);
  const [selectedWilaya, setSelectedWilaya] = useState(null);
  const [selectedDeliveryMethode, setSelectedDeliveryMethode] = useState(null);
  let history = useHistory();
  useEffect(() => {
    const CurrentPanier = props.location.items;
    setMontant(props.location.grandTotal);
    console.log(CurrentPanier);
    if (CurrentPanier) {
      CurrentPanier.map((item) => {
        SetPanier((prev) => [
          ...prev,
          {
            productId: item.id,
            name: item.nom,
            price: item.prix,
            qty: item.qtycmd,
          },
        ]);
      });
    }
  }, []);
  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;
    setState((prev) => ({ ...prev, [inputName]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const nom = localStorage.getItem("nom");
    const email = localStorage.getItem("email");
    if (selectedDeliveryMethode === null) {
      alert("Veuillez choisir une méthode de paiment !");
    } else if (selectedWilaya === null) {
      alert("Veuillez choisir la wilaya de livraison !");
    } else if (state.postCode === "") {
      alert("Vous devez rentrez votre code postal !");
    } else if (state.phoneNumber === "") {
      alert("Vous devez rentrez votre numéro de téléphone !");
    } else if (state.deliveryAddress === "") {
      alert("Vous devez rentrez l'adresse de livraison");
    } else {
      console.log(state.deliveryAddress, state.phoneNumber, state);
      axios
        .post(`https://managecartandorders.herokuapp.com/api/order/create`, {
          user: { name: nom, email: email },
          billingAddress: {
            name: nom,
            email: email,
            postCode: state.postCode,
            wilaya: selectedWilaya.value,
            deliveryAddress: state.deliveryAddress,
            country: "Algeria",
          },
          items: Panier,
          shippingMethod: "free",
          paymentMethod: "cash_on_delivery",
          phoneNumber: state.phoneNumber,
          grandTotal: Montant,
        })
        .then((response) => {
          console.log(response);
          axios
            .post(
              `https://managecartandorders.herokuapp.com/api/cart/remove?email=${email}`,
              { email: email }
            )
            .then((reponse) => {
              console.log(reponse);
            })
            .catch((err) => {
              console.log(err);
              console.log("hello");
            });
          setTimeout(() => {
            history.push("/CommandeSucces");
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div>
      <StyledFormWrapper>
        <StyledFormContainer>
          <StyledForm onSubmit={handleSubmit}>
            <Styledh1>Entrez vos cordonnés</Styledh1>
            <br />
            <Select
              className="select"
              defaultValue={selectedDeliveryMethode}
              onChange={setSelectedDeliveryMethode}
              options={[
                { value: "Cash On Delivery", label: "Cash On Delivery" },
              ]}
              placeholder="Méthode de paiements..."
            />
            <br />
            <Select
              className="select"
              defaultValue={selectedWilaya}
              onChange={setSelectedWilaya}
              options={options}
              placeholder="Wilaya..."
            />
            <label htmlFor="postCode"></label>
            <StyledInput
              type="text"
              name="postCode"
              value={state.postCode}
              onChange={handleInput}
              placeholder="Code postal..."
            />
            <label htmlFor="deliveryAddress"></label>
            <StyledInput
              type="text"
              name="deliveryAddress"
              value={state.deliveryAddress}
              onChange={handleInput}
              placeholder="Adresse de livraison..."
            />
            <label htmlFor="phoneNumber"></label>
            <StyledInput
              type="text"
              name="phoneNumber"
              value={state.phoneNumber}
              onChange={handleInput}
              placeholder="Numéro de téléphone..."
            />
            <StyledButton type="submit">Passer la commande</StyledButton>
          </StyledForm>
        </StyledFormContainer>
      </StyledFormWrapper>
    </div>
  );
};

export default Order;
