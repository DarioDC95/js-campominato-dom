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

// Definiamo il pulsante di play
let button_play = document.getElementById('play');
button_play.addEventListener('click', function(){
    
    // cancella l'eventuale tabella già creata
    let containerSquare = document.getElementById('container-div');
    containerSquare.innerHTML = "";
    document.getElementById('card-result').innerText = ``;

    // dichiaro alcune variabili fuori dal for
    let divSquare;
    let n_celle;
    let difficultySelected = document.getElementById('difficulty').value;

    // decido quanti quadrati fare in base alla difficoltà
    switch (difficultySelected) {
        case 'easy':
            n_celle = 100;
            break;
        
        case 'normal':
            n_celle = 81;
            break;

        case 'hard':
            n_celle = 49;
            break;
        
        default :
            n_celle = 100;
            break;
    }

    // creo un arrey di bombe
    let bombs = arrayRandomNumber(1, n_celle);
    console.log(bombs);

    // dichiaro l'arrey di non bombe
    let squareArrayNotBombs = [];

    // richiamo la funzione e incollo i div nel contenitore
    for (let i = 1; i <= n_celle; i++) {
        divSquare = createSquare(i);

        // Aggiungo il addEventListener al quadrato
        divSquare.addEventListener('click', function(){

            // aggiungo la possibilità del quadrato bomba e li coloro tutti di rosso se premuto, in più blocco l'interazione con le celle
            if (bombs.includes(parseInt(this.innerText))) {
                for (let i = 0; i < n_celle; i++) {
                    squareArray[i].classList.add('pointer-event-none');
                    if (bombs.includes(parseInt(squareArray[i].innerText))) {
                        squareArray[i].classList.add('red');
                    }
                }
                document.getElementById('card-result').innerText = `Mi dispiace, hai perso, il tuo punteggio è: ${squareArrayNotBombs.length}`;
                console.log(squareArrayNotBombs);
            }

            else {
                // aggiungere il background azzurro quando clicco sul quadrato non bomba
                this.classList.add('lightblue');
                console.log(this.innerText);

                // aggiungo la condizione di vittoria e blocco l'interazione con le celle
                if (squareArrayNotBombs.length == (n_celle - 16)){
                    for (let i = 0; i < n_celle; i++) {
                        squareArray[i].classList.add('pointer-event-none');
                    }
                    
                    document.getElementById('card-result').innerText = `Congratulazioni, hai completato tutte le celle.`;
                }              
            }

            // creo un array di non bombe
            squareArrayNotBombs.push(divSquare.classList.contains('lightblue'));
        },{once: `true`})

        // aggiungere la classe con la dimensione giusta in base alla difficoltà
        switch (difficultySelected) {
            case 'easy':
                divSquare.classList.add('easy-size');
                break;
            
            case 'normal':
                divSquare.classList.add('normal-size');
                break;
    
            case 'hard':
                divSquare.classList.add('hard-size');
                break;

            default :
                divSquare.classList.add('easy-size');
                break;
        }

        // incollo il quadrato nel suo container
        containerSquare.appendChild(divSquare);
    }

    // creo un array con tutte le classi square
    let squareArray = document.getElementsByClassName('square');
    console.log(squareArray);

})
