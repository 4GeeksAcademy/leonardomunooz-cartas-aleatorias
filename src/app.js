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
  let number = Math.floor(Math.random() * 5);
  let p = document.createElement("p");
  let cBottom = document.createElement("div");
  let iconBottom = document.createElement("i");

  console.log(body);
  body.style.backgroundColor = "green";
  body.style.display = "flex";
  body.style.height = "100%";
  body.style.justifyContent = "center";
  body.style.alignItems = "center";

  card.setAttribute("class", "card-content"); // utilizanado setAttribute
  card.append(flexCard);

  flexCard.classList.add("flexCard"); // utilizando classlist
  flexCard.append(cTop);
  flexCard.append(p);
  flexCard.append(cBottom);

  cTop.append(iconTop);
  iconTop.setAttribute("class", "fas fa-heart");
  cBottom.append(iconBottom);
  p.setAttribute("class", "numero-carta");
  p.innerHTML = number;
  iconBottom.setAttribute("class", "fas fa-heart");
  cBottom.style.alignSelf = "flex-end";
};
