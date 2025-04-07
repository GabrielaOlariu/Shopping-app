//Firebase field

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

import {
  getDatabase,
  ref,
  push,
  remove,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

const firebaseConfig = {
  databaseURL:
    "https://shopping-cart-4ebfa-default-rtdb.europe-west1.firebasedatabase.app/",
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const cartDB = ref(database, "gabrielaCart");

//DOM Field
const inputFieldEl = document.getElementById("input-field");
const buttonAddEl = document.getElementById("button-add");

buttonAddEl.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;
  console.log(inputValue);
  push(cartDB, inputValue);
  inputFieldEl.value = "";
});
