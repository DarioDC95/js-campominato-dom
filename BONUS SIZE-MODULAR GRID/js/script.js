// Funzione per la creazione di quadrati
function createSquare(ind) {
    const squareDiv = document.createElement('div');
    squareDiv.className = 'square';
    squareDiv.innerText = ind;
    return squareDiv;
}

// Funzione per la creazione dell'array con numeri casuali
function arrayRandomNumber(min, max) {
    let array = [];
    let i = 0;
    while (i < 16) {
        let num = Math.floor(Math.random() * (max - min + 1) + 1);
        if (!array.includes(num)) {
            array.push(num);
            i++
        }
    }
    return array;
}

// funzione per la creazione della griglia con i quadrati
function creationGrid(containerGrid, boom, n_cel, squareArrayNotBoom) {

    // richiamo la funzione per creare il quadrato
    for (let i = 1; i <= n_cel; i++) {
        let divSquare = createSquare(i);

        // Aggiungo il addEventListener al quadrato
        divSquare.addEventListener('click', function(){

            // aggiungo la possibilità del quadrato bomba e li coloro tutti di rosso se premuto, in più blocco l'interazione con le celle
            if (boom.includes(parseInt(this.innerText))) {
                for (let i = 0; i < n_cel; i++) {
                    squareArray[i].classList.add('pointer-event-none');
                    if (boom.includes(parseInt(squareArray[i].innerText))) {
                        squareArray[i].classList.add('red');
                        squareArray[i].innerHTML = `<i class="fa-solid fa-bomb"></i>`;
                        squareArray[i].style.fontSize = '25px';
                    }
                }
                document.getElementById('card-result').innerText = `Mi dispiace, hai perso, il tuo punteggio è: ${squareArrayNotBoom.length}`;
            }

            else {
                // aggiungere il background azzurro e il fiore quando clicco sul quadrato NON bomba
                this.classList.add('lightblue');
                this.innerHTML = `<i class="fa-solid fa-fan"></i>`;
                this.style.fontSize = '25px'; 

                // creo un array di non bombe
                squareArrayNotBoom.push(this);
                console.log(squareArrayNotBoom)

                // aggiungo la condizione di vittoria e blocco l'interazione con le celle
                if (squareArrayNotBoom.length == (n_cel - boom.length)) {
                    for (let i = 0; i < n_cel; i++) {
                        squareArray[i].classList.add('pointer-event-none');
                    }
                    document.getElementById('card-result').innerText = `Congratulazioni, hai evitato tutte le bombe!`;
                }              
            }
        },{once: `true`})

        // incollo il quadrato nel suo container/griglia
        containerGrid.appendChild(divSquare);
    }
    
    // creo un array con tutte le classi square
    let squareArray = document.getElementsByClassName('square');
    console.log(squareArray);
}

// COSTRUIAMO IL NOSTRO GIOCO
// Definiamo il pulsante di play
let button_play = document.getElementById('play');
button_play.addEventListener('click', function(){
    
    // cancella l'eventuale tabella già creata
    let containerSquare = document.getElementById('container-div');
    containerSquare.innerHTML = "";
    document.getElementById('card-result').innerText = ``;

    // dichiaro alcune variabili fuori dallo switch
    let n_celle;
    let difficultySelected = document.getElementById('difficulty').value;

    // decido quanti quadrati fare in base alla difficoltà e do la dimensione alla griglia
    switch (difficultySelected) {
        case 'easy':
            n_celle = 100;
            containerSquare.classList.add('easy-size');
            containerSquare.classList.remove('normal-size', 'hard-size')
            break;
        
        case 'normal':
            n_celle = 81;
            containerSquare.classList.add('normal-size');
            containerSquare.classList.remove('easy-size', 'hard-size')
            break;

        case 'hard':
            n_celle = 49;
            containerSquare.classList.add('hard-size');
            containerSquare.classList.remove('easy-size', 'normal-size')
            break;
        
        default :
            n_celle = 100;
            containerSquare.classList.add('easy-size');
            containerSquare.classList.remove('normal-size', 'hard-size')
            break;
    }

    // creo un array di bombe
    let bombs = arrayRandomNumber(1, n_celle);
    console.log(bombs);

    // dichiaro l'array di non bombe
    let squareArrayNotBombs = [];

    // richiamo la funzione per la creazione della griglia
    creationGrid(containerSquare, bombs, n_celle, squareArrayNotBombs)
})
