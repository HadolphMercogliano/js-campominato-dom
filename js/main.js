// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle
// - con difficoltà 2 => 81 caselle
// - con difficoltà 3 => 49 caselle

/******************************************************
 *                        CODE ON LOAD                *
 ******************************************************/
//creare un bottone
const gridEl = document.getElementById("grid");
// console.log(gridEl);

const playButtonEl = document.getElementById("play-button");
playButtonEl.addEventListener("click", function () {
  const difficultySelectorEl = document.getElementById("difficulty-sel");
  const difficultyChoise = parseInt(difficultySelectorEl.value);
  console.log(difficultyChoise);
  gridGenerator(gridEl, difficultyChoise);
});

// generare all' interno della griglia una seguenza di numeri da 1 a dimensione

// aggiungere una funzione al click sulla griglia che colora lo sfondo della casella di azzurro
// stampa in console un messaggio con il numero contenuto nella casella

/******************************************************
 *                      FUNCTION                      *
 ******************************************************/

// Creare una funzione che generi la griglia di gioco
// dati i parametri {griglia, dimensione})
/**
 * Generatore di elementi della griglia
 * @param {string} grid dove inserire le card
 * @param {int} dimension quante card creare
 */
function gridGenerator(grid, dimension) {
  grid.innerHTML = "";
  for (let i = 0; i < dimension; i++) {
    const cardEl = document.createElement("div");
    cardEl.classList.add("grid-element");
    cardEl.classList.add(`col-${dimension}`);

    cardEl.innerHTML = i + 1;
    grid.append(cardEl);
    // aggiungere una funzione al click sulla griglia che colora lo sfondo della casella di azzurro
    cardEl.addEventListener("click", function () {
      this.classList.toggle("active");
      console.log(this.innerHTML);
    });
  }
}
