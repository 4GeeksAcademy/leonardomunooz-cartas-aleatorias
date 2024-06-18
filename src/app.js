/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  let body = document.querySelector("body");
  let card = document.querySelector("#card");
  let flexCard = document.createElement("div");
  let cTop = document.createElement("div");
  let iconTop = document.createElement("i");

  let p = document.createElement("p");
  let cBottom = document.createElement("div");
  let iconBottom = document.createElement("i");

  console.log(body);

  // estilos del boby y centrado de la carta
  body.style.backgroundColor = "green";
  body.style.display = "flex";
  body.style.height = "100%";
  body.style.justifyContent = "center";
  body.style.alignItems = "center";

  //  agrega estilos de carta y la agrega al body
  card.setAttribute("class", "card-content"); // utilizanado setAttribute
  card.append(flexCard);

  //  agregando  elementos y posic
  flexCard.classList.add("flexCard"); // utilizando classlist
  flexCard.append(cTop);
  flexCard.append(p);
  flexCard.append(cBottom);

  let palos = ["♦", "♥", "♠", "♣"];
  let palosNumber = Math.floor(Math.random() * palos.length);
  let cartas = ["A", 2, "3", 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let numeroCarta = Math.floor(Math.random() * cartas.length);
  function getPalo(array, randomNumber) {
    let numeroRandom = undefined;
    for (let index = 0; index < array.length - 1; index++) {
      numeroRandom = array[randomNumber];
    }
    return numeroRandom;
  }
  let palo = getPalo(palos, palosNumber);
  let carta = getPalo(cartas, numeroCarta);

  console.log(carta);
  cTop.append(iconTop);
  iconTop.textContent = palo;
  iconTop.setAttribute("class", "fas");
  cBottom.append(iconBottom);
  cBottom.style.alignSelf = "flex-end";
  iconBottom.textContent = palo;
  iconBottom.setAttribute("class", "fas");
  p.setAttribute("class", "numero-carta");
  p.innerHTML = carta;
};
