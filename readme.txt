PROBLEMA:

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

1- Creare una funzione che compna un array di 16 numeri casuali tra 1 e il n_celle del caso.
2- Usare quell'array per definire le caselle "bombe".
    2.1- La casella "bomba" deve colorarsi di rosso se premuta (possibilmente tutte le caselle bombe devono farlo).
    2.2- La partita termina se si prende la bomba o si finiscono tutte le caselle azzurre.
3- Stampare in HTML il punteggio raggiunto di caselle azzurre clickate.


