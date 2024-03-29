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

//PROVA: POSIZIONE QUADRATI NON BOMBA
function getPosNotBombs(boom, n_cel, square, not_boom) {

    let squareNum = Number(square.innerText);
    let squareRoot = Math.sqrt(n_cel);
    console.log(squareNum);
    console.log(squareRoot);
    console.log(not_boom);

    let positionsNotBombs = {

        top: false,
        topLeft: false,
        topRight: false,
        left: false,
        right: false,
        bottom: false,
        bottomLeft: false,
        bottomRight: false
    };
    let top = squareNum - squareRoot;
    let topLeft = squareNum - (squareRoot + 1);
    let topRight = squareNum - (squareRoot - 1);
    let left = squareNum - 1;
    let right = squareNum + 1;
    let bottomLeft = squareNum + (squareRoot - 1);
    let bottom = squareNum + squareRoot;
    let bottomRight = squareNum + (squareRoot + 1);

    if(squareNum % squareRoot == 0) {
        if(squareNum == squareRoot) {
            
            if(!boom.includes(left) && !not_boom.includes(left)) positionsNotBombs.left = true;
            if(!boom.includes(bottomLeft) && !not_boom.includes(bottomLeft)) positionsNotBombs.bottomLeft = true;
            if(!boom.includes(bottom) && !not_boom.includes(bottom)) positionsNotBombs.bottom = true;
        } else if(squareNum == n_cel) {
            
            if(!boom.includes(left) && !not_boom.includes(left)) positionsNotBombs.left = true;
            if(!boom.includes(topLeft) && !not_boom.includes(topLeft)) positionsNotBombs.topLeft = true;
            if(!boom.includes(top) && !not_boom.includes(top)) positionsNotBombs.top = true;
        } else {
            
            if(!boom.includes(top) && !not_boom.includes(top)) positionsNotBombs.top = true;
            if(!boom.includes(topLeft) && !not_boom.includes(topLeft)) positionsNotBombs.topLeft = true;
            if(!boom.includes(left) && !not_boom.includes(left)) positionsNotBombs.left = true;
            if(!boom.includes(bottomLeft) && !not_boom.includes(bottomLeft)) positionsNotBombs.bottomLeft = true;
            if(!boom.includes(bottom) && !not_boom.includes(bottom)) positionsNotBombs.bottom = true;
        }
    } else if((squareNum - 1) % squareRoot == 0) {
        if(squareNum - 1 == 0) {
            
            if(!boom.includes(right) && !not_boom.includes(right)) positionsNotBombs.right = true;
            if(!boom.includes(bottomRight) && !not_boom.includes(bottomRight)) positionsNotBombs.bottomRight = true;
            if(!boom.includes(bottom) && !not_boom.includes(bottom)) positionsNotBombs.bottom = true;
        } else if(squareNum + squareRoot > n_cel) {
            
            if(!boom.includes(right) && !not_boom.includes(right)) positionsNotBombs.right = true;
            if(!boom.includes(topRight) && !not_boom.includes(topRight)) positionsNotBombs.topRight = true;
            if(!boom.includes(top) && !not_boom.includes(top)) positionsNotBombs.top = true;
        } else {
            
            if(!boom.includes(top) && !not_boom.includes(top)) positionsNotBombs.top = true;
            if(!boom.includes(topRight) && !not_boom.includes(topRight)) positionsNotBombs.topRight = true;
            if(!boom.includes(right) && !not_boom.includes(right)) positionsNotBombs.right = true;
            if(!boom.includes(bottomRight) && !not_boom.includes(bottomRight)) positionsNotBombs.bottomRight = true;
            if(!boom.includes(bottom) && !not_boom.includes(bottom)) positionsNotBombs.bottom = true;
        }
    } else {
        if(squareNum - squareRoot < 0) {
            
            if(!boom.includes(right) && !not_boom.includes(right)) positionsNotBombs.right = true;
            if(!boom.includes(bottomRight) && !not_boom.includes(bottomRight)) positionsNotBombs.bottomRight = true;
            if(!boom.includes(left) && !not_boom.includes(left)) positionsNotBombs.left = true;
            if(!boom.includes(bottomLeft) && !not_boom.includes(bottomLeft)) positionsNotBombs.bottomLeft = true;
            if(!boom.includes(bottom) && !not_boom.includes(bottom)) positionsNotBombs.bottom = true;
        } else if(squareNum + squareRoot > n_cel) {
            
            if(!boom.includes(right) && !not_boom.includes(right)) positionsNotBombs.right = true;
            if(!boom.includes(topRight) && !not_boom.includes(topRight)) positionsNotBombs.topRight = true;
            if(!boom.includes(left) && !not_boom.includes(left)) positionsNotBombs.left = true;
            if(!boom.includes(topLeft) && !not_boom.includes(topLeft)) positionsNotBombs.topLeft = true;
            if(!boom.includes(top) && !not_boom.includes(top)) positionsNotBombs.top = true;
        } else {
            
            if(!boom.includes(right) && !not_boom.includes(right)) positionsNotBombs.right = true;
            if(!boom.includes(topRight) && !not_boom.includes(topRight)) positionsNotBombs.topRight = true;
            if(!boom.includes(bottomRight) && !not_boom.includes(bottomRight)) positionsNotBombs.bottomRight = true;
            if(!boom.includes(left) && !not_boom.includes(left)) positionsNotBombs.left = true;
            if(!boom.includes(topLeft) && !not_boom.includes(topLeft)) positionsNotBombs.topLeft = true;
            if(!boom.includes(bottomLeft) && !not_boom.includes(bottomLeft)) positionsNotBombs.bottomLeft = true;
            if(!boom.includes(top) && !not_boom.includes(top)) positionsNotBombs.top = true;
            if(!boom.includes(bottom) && !not_boom.includes(bottom)) positionsNotBombs.bottom = true;
        }
    }

    return positionsNotBombs;
}

//PROVA: STAMPA INDIZIO
function printHint(boom, n_cel, field, squareArrayNotBoom) {

    let nearNotBombSquares = getPosNotBombs(boom, n_cel, field, squareArrayNotBoom);
    console.log(nearNotBombSquares);
    let cardHint = document.getElementById('card-hint');

    if(nearNotBombSquares.top == true && nearNotBombSquares.topRight == true && nearNotBombSquares.topLeft == true) {

        cardHint.innerText = `INDIZIO: In Alto ci sono tre caselle vuote`;
    } else if((nearNotBombSquares.top == true && (nearNotBombSquares.topLeft == true || nearNotBombSquares.topRight == true)) || nearNotBombSquares.topRight == true && nearNotBombSquares.topLeft == true) {

        cardHint.innerText = `INDIZIO: In Alto ci sono due caselle vuote`;
    } else if(nearNotBombSquares.left == true && nearNotBombSquares.topLeft == true && nearNotBombSquares.bottomLeft == true) {

        cardHint.innerText = `INDIZIO: A Sinistra ci sono tre caselle vuote`;
    } else if((nearNotBombSquares.left == true && (nearNotBombSquares.topLeft == true || nearNotBombSquares.bottomLeft == true)) || nearNotBombSquares.topLeft == true && nearNotBombSquares.bottomLeft == true) {

        cardHint.innerText = `INDIZIO: A Sinistra ci sono due caselle vuote`;
    } else if(nearNotBombSquares.right == true && nearNotBombSquares.topRight == true && nearNotBombSquares.bottomRight == true) {

        cardHint.innerText = `INDIZIO: A Destra ci sono tre caselle vuote`;
    } else if((nearNotBombSquares.right == true && (nearNotBombSquares.topRight == true || nearNotBombSquares.bottomRight == true)) || nearNotBombSquares.topRight == true && nearNotBombSquares.bottomRight == true) {

        cardHint.innerText = `INDIZIO: A Destra ci sono due caselle vuote`;
    } else if(nearNotBombSquares.bottom == true && nearNotBombSquares.bottomLeft == true && nearNotBombSquares.bottomRight == true) {

        cardHint.innerText = `INDIZIO: In Basso ci sono tre caselle vuote`;
    } else if((nearNotBombSquares.bottom == true && (nearNotBombSquares.bottomLeft == true || nearNotBombSquares.bottomRight == true)) || nearNotBombSquares.bottomLeft == true && nearNotBombSquares.bottomRight == true) {

        cardHint.innerText = `INDIZIO: In Basso ci sono due caselle vuote`;
    } else if(nearNotBombSquares.top == true || nearNotBombSquares.topLeft == true || nearNotBombSquares.topRight == true) {

        cardHint.innerText = `INDIZIO: In Alto c'è una casella vuota`;
    } else if(nearNotBombSquares.left == true) {

        cardHint.innerText = `INDIZIO: A Sinistra c'è una casella vuota`;
    } else if(nearNotBombSquares.right == true) {

        cardHint.innerText = `INDIZIO: A Destra c'è una casella vuota`;
    } else if(nearNotBombSquares.bottom == true || nearNotBombSquares.bottomLeft == true || nearNotBombSquares.bottomRight == true) {

        cardHint.innerText = `INDIZIO: In Basso c'è una casella vuota`;
    } else {

        cardHint.innerText = `INDIZIO: Non ci sono caselle vuote vicine`;
    }
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
                document.getElementById('card-hint').innerText = ``;
            }

            else {
                // creo un array di non bombe
                squareArrayNotBoom.push(Number(this.innerHTML));

                //PROVA: TROVA I QUADRATI VICINI NON BOMBA
                printHint(boom, n_cel, this, squareArrayNotBoom);

                // aggiungere il background azzurro e il fiore quando clicco sul quadrato NON bomba
                this.classList.add('lightblue');
                this.innerHTML = `<i class="fa-solid fa-fan"></i>`;
                this.style.fontSize = '25px'; 

                // aggiungo la condizione di vittoria e blocco l'interazione con le celle
                if (squareArrayNotBoom.length == (n_cel - boom.length)) {
                    for (let i = 0; i < n_cel; i++) {
                        squareArray[i].classList.add('pointer-event-none');
                    }
                    document.getElementById('card-result').innerText = `Congratulazioni, hai evitato tutte le bombe!`;
                    document.getElementById('card-hint').innerText = ``;
                }              
            }
        },{once: `true`})

        // incollo il quadrato nel suo container/griglia
        containerGrid.appendChild(divSquare);
    }
    
    // creo un array con tutte le classi square
    let squareArray = document.getElementsByClassName('square');
}

// COSTRUIAMO IL NOSTRO GIOCO
// Definiamo il pulsante di play
let button_play = document.getElementById('play');
button_play.addEventListener('click', function(){
    
    // cancella l'eventuale tabella già creata
    let containerSquare = document.getElementById('container-div');
    containerSquare.innerHTML = "";
    document.getElementById('card-hint').innerText = ``;
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
