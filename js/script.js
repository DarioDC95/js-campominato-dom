function createSquare(ind) {
    const squareDiv = document.createElement('div');
    squareDiv.className = 'square';
    squareDiv.innerText = ind;
    return squareDiv;
}

// Definiamo il pulsante di play
let button_play = document.getElementById('play');
button_play.addEventListener('click', function(){
    
    // cancella l'eventuale tabella già creata
    let containerSquare = document.getElementById('container-div');
    containerSquare.innerHTML = "";

    // dichiaro alcune variabili fuori dal for
    let divSquare;
    let n_celle;
    let difficultySelected = document.getElementById('difficulty').value;

    // decido quanti quadrati fare in base alla difficoltà
    if (difficultySelected === 'easy') {
        n_celle = 100;
    }
    else if (difficultySelected === 'normal') {
        n_celle = 81;
    }
    else {
        n_celle = 49;
    }

    // richiamo la funzione e incollo i div nel contenitore
    for (let i = 1; i <= n_celle; i++) {
        divSquare = createSquare(i);

        // aggiungere il background azzurro quando clicco sul quadrato
        divSquare.addEventListener('click', function(){
            this.classList.toggle('lightblue');
            console.log(this.innerText);
        })

        // incollo il quadrato nel suo container
        containerSquare.append(divSquare);

        // aggiungere la classe con la dimensione giusta in base alla dificoltà
        if (difficultySelected === 'easy') {
            divSquare.classList.add('hard-size');
        }
        else if (difficultySelected === 'normal') {
            divSquare.classList.add('normal-size');
        }
        else {
            divSquare.classList.add('easy-size');
        }
    }

})
