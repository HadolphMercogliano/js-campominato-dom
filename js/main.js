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

let arrayBombe = [];
let GameOver = false;
let points = 0;

const gridEl = document.getElementById("grid");
// console.log(gridEl);

//creare un bottone
const playButtonEl = document.getElementById("play-button");
playButtonEl.addEventListener("click", function () {
  const difficultySelectorEl = document.getElementById("difficulty-sel");
  const difficultyChoise = parseInt(difficultySelectorEl.value);
  // console.log(difficultyChoise);
  gridGenerator(gridEl, difficultyChoise);
  bombGenerator(difficultyChoise);
  points = 0;
  GameOver = false;
  if (points >= difficultyChoise - 17) {
    GameOver = true;
  }
});

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
    let cardText = i + 1;
    cardEl.innerHTML = cardText;
    grid.append(cardEl);

    //se si clicca su una bomba il background della cella diventa rosso e la partita termina
    //altrimenti la cella si colora di azzurro.
    cardEl.addEventListener("click", function () {
      let currentCard = parseInt(this.innerHTML);
      if (controlloBomba(arrayBombe, currentCard)) {
        for (let i = 0; i < arrayBombe.length; i++) {
          let currentElement = arrayBombe[i];
          currentElement.classList.add("bomb");
        }
        GameOver = true;
        console.log(`hai perso il tuo punteggio è ${points}`);
        this.removeEventListener("click", cardEl);
      } else {
        if (GameOver == false && !this.classList.contains("active")) {
          this.classList.add("active");
          points += 1;
        }
      }
      console.log(currentCard);
      console.log(GameOver);
      console.log(points);
    });
  }
}

/**
 * Genero 16 numeri casuali(bombe) e li inserisco in un array
 * @param {string} array dove inserire le bombe
 */
function bombGenerator(dimension) {
  arrayBombe = [];
  while (arrayBombe.length < 16) {
    let randomNumber = Math.floor(Math.random() * dimension) + 1;
    if (!arrayBombe.includes(randomNumber)) {
      arrayBombe.push(randomNumber);
    }
  }
  console.log(arrayBombe);
}

/**
 * Controllo se il numero della card è presente nell' array(è una bomba)
 * @param {string} array dove cercare il valore
 * @param {int} valore numero da controllare
 * @returns {boolean} vero o falso
 */
function controlloBomba(array, valore) {
  if (array.includes(valore)) {
    return true;
  }
  return false;
}

/******************************************************
 *                        PARTE 2                     *
 ******************************************************/

// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti

//Al termine della partita il software deve comunicare il punteggio(quante caselle esatte abbiamo cliccato prima di trovare una bomba)
function removeListener() {}
