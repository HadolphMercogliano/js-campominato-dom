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

    //se si clicca su una bomba il background della cella diventa rosso e la partita termina
    //altrimenti la cella si colora di azzurro.
    cardEl.addEventListener("click", function () {
      if (controlloBomba) {
        cardEl.classList.add("bomb");
        console.log(this.innerHTML);
      } else {
        this.classList.toggle("active");
        console.log(this.innerHTML);
      }
    });
  }
}

/******************************************************
 *                        PARTE 2                     *
 ******************************************************/
// genera 16 numeri randomici e posizionali in un array dove non possono trovarsi numeri uguali.

// controll nell' event listener se nella card c'è una bomba

// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti

//Al termine della partita il software deve comunicare il punteggio(quante caselle esatte abbiamo cliccato prima di trovare una bomba)

const arrayBombe = [];
/**
 * Controllo se il numero è presente nell' array
 * @param {string} array dove cercare il valore
 * @param {int} valore numero da controllare
 * @returns {boolean} vero o falso
 */
function controlloBomba(array, valore) {}
