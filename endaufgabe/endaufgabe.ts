//Interfaces ... (Zur Typisierung der Objekte)  

interface IntCard {
    color: string;
    number: number;
}

interface IntPlayer {
    onTurn: boolean;
    handCards: IntCard[];
}


//Karten-Arrays (für Aufnahme- und Ablagestapel)

var cards: IntCard[] = [];

var openCards: IntCard[] = [
];

//Spieler mit Handkarten-Arrays

var player: IntPlayer = {
    onTurn: false,
    handCards: []

};

var enemy: IntPlayer = {
    onTurn: false,
    handCards: []
};

//Array zur Übermittlung der Farbwerte (Hilfs-Array)
var colors: string[] = [
    "blue", "red", "yellow", "green"
]

//HTML-Elemente (Vier Kartenfelder)
var playerDOMElement: HTMLElement;
var enemyDOMElement: HTMLElement;
var cardsDOMElement: HTMLElement;
var openCardsDOMElement: HTMLElement;


//Funktionen zur Spielausführung

//Funktionen des Players

function playerTakesCard(): void {  //Funktion wird ausgeführt wenn Anwender auf Aufnahmstapel klickt
    var card: IntCard;
    card = cards.pop();             //Karte wird aus Aufnahmestapel (Cards-Array) über Zwischenvariable (card) 
    player.handCards.unshift(card); //zu Spieler-Handkarten (player.handCards-Array) hinzugefügt
    if (cards.length == 0) {
        mixCards();                 //Wenn Aufnahmestapel leer, dann wird neu gemischt
    }
    drawDOM();
    if (checkGameOver() == true) {  //Nach jedem Zug wir die Prüffunktion checkGameOver ausgeführt, um zu 
        return;                     //das Spielende festzustellen (return beendet das Ausführen der Funktion an dieser Stelle)
    }
    player.onTurn = false;          //Nachdem der Spieler seinen Zug gemacht hat werden die Status von Gegner 
    enemy.onTurn = true;            //und Spieler gewechselt
    setTimeout(function () {enemyPutCard(); }, 1500);   //Gegner ist am Zug ... Funktion wird mit Verzögerung aufgerufen
} 

function playerPutCard(i: number): void {   //Funktion wird ausgeführt wenn Player auf eine seiner Handcards klickt
    if (validCard(player.handCards[i]) == true) { //Wenn Karte passend, wird diese von handCards-Array in 
        openCards.unshift(player.handCards[i]);   //Ablagestapel-Array verschoben
        player.handCards.splice(i, 1);      //splice nimmt Elemente (in diesem Fall eins) ab index (i) aus dem Array
        player.onTurn = false;
        enemy.onTurn = true;
        drawDOM();
        if (checkGameOver() == true) {
            return; 
        }
        setTimeout(function () {enemyPutCard(); }, 1500); 
    }
    else {
        console.log("Geht nicht");          //Hilfslog für Anklicken unpassender Karte
    }
}

//Funktionen des Gegners

function enemyPutCard(): void {             //Funktion wird aufgerufen wenn Gegner an der Reihe
    var worked: boolean = false;
    for (var index = 0; index <= enemy.handCards.length - 1; index++) { //Schleife geht Handkarten des Gegners durch
        if (validCard(enemy.handCards[index]) == true) {                //Bei passender Karte, wird diese auf Ablage-Array verschoben
            worked = true;                                              //Wenn worked den Status true bekommt, muss der Gegner nicht aufnehmen
            openCards.unshift(enemy.handCards[index]);
            enemy.handCards.splice(index, 1);
            break;                                                       //break lässt die schleife abbrechen
        }
    }
    if (worked == false) {                                               //Wenn Status worked = false, wird Funktion zum Aufnehmen
        enemyTakesCard();                                                //aufgerufen
    }

    drawDOM();

    if (checkGameOver() == true) {
        return;
    }

    enemy.onTurn = false;       
    player.onTurn = true;
    
};

function enemyTakesCard(): void {    //Funktion wird ausgeführt wenn Gegner keine passende Karte hat
    var card: IntCard;                 
    card = cards.pop();              
    enemy.handCards.unshift(card);   //Karte wird vom Aufnahmestapel-Array in Handkarten-Array verschoben
    if (cards.length == 0) {

        mixCards();
    }
};

//Funktion zum Mischen der Karten

function mixCards(): void {                     //Funktion wird Ausgeführt, wenn Aufnahmestapel-Array leer ist

    console.log("stapel neu mischen");

    for (var index = 0; index < openCards.length; index++) {  //Karten werden von Ablagestapel in Aufnahmestapel verschoben
        cards[index] = openCards[index];
    }
    
    while (openCards.length > 0) {                          //Ablagestapel wird geleert
        openCards.pop();
    }

    var tmp, current, top = cards.length;                   //Hier werden die Karten durcheinaner gemischt
    if (top) while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = cards[current];
        cards[current] = cards[top];
        cards[top] = tmp;
    }

    var card: IntCard;
    card = cards.pop();
    openCards.unshift(card);
};

//Funktion zum Spielstart

function startGame(): void {        
    console.log("started..."); 
    fillArray();                                  //Funktion zu Kartengenerierung wird ausgeführt        
    var card: IntCard;
    var htmlPlayer: string = "";
    var htmlEnemy: string = "";
    for (var index = 0; index <= 3; index++) {    //Anzahl der Startkarten wird auf 4 festgelegt

        card = cards.pop();                       //Karten werden an Spieler vertreilt
        player.handCards.unshift(card);

        card = cards.pop();                       //Karten werden an Gegner verteilt
        enemy.handCards.unshift(card);
    }

    card = cards.pop();                           //Startkarte wird aufgedeckt
    openCards.unshift(card);

    player.onTurn = true;                         //Spieler beginnt mit dem ersten Zug
    drawDOM();
};


function fillArray(): void {           //Funktion zur Befüllung des Aufnahmestapel-Arrays mit generierten Karten

    for (var index = 0; index <= colors.length - 1; index++) {   //Äußerere Schleife für Zuteilung der Farbwerte
        for (var index2 = 1; index2 <= 8; index2++) {            //Innere Schleife für Zuteilung der Zahlenwert
            cards.unshift({ color: colors[index], number: index2 });
        }
    }

    var tmp, current, top = cards.length;   //Hier werden die Karten durcheinaner gemischt
    if (top) while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = cards[current];
        cards[current] = cards[top];
        cards[top] = tmp;

    }
}

//überprüfungsfunktionen

function validCard(card: IntCard): boolean {  //Funktion überprüft ob Karten zueinander passen
    var topCard: IntCard;
    topCard = openCards[0];

    if (topCard.color == card.color) {              //Farbe beider Karten wird verglichen
        return true;
    } else if (topCard.number == card.number) {     //Nummer beider Karten wird verglichen
        return true;
    } else {
        return false;                               //Ist keine der beiden Eigenschaften valide,
    }                                               //wird false zurückgegeben
}

function checkGameOver(): Boolean {         //Funktion überprüft ob Spiel beendet eines der 4 Kriterien beendet ist
                                            
    var message: string = "";
    if (player.handCards.length == 0) {             //Kriterium1: Spieler hat keine Karten mehr
       toggleDialog("Herzlichen Glückwunsch, Sie haben gewonnen!"); //Ausgabe im Pop-Up-Fenster wird jeweils verändert
        return true;    
    } else if (enemy.handCards.length == 0) {       //Kriterium2: Gegner hat keine Karten mehr
        toggleDialog("Sie haben verloren!"); 
        return true;
    } else if (player.handCards.length >= 10) {     //Kriterium3: Spieler hat 10 Karten (maximale Anzahl)
        toggleDialog("Sie haben verloren, maxilmale Kartenzahl überschritten!");
        return true;
    } else if (enemy.handCards.length >= 10) {      //Kriterium4: Gegner hat 10 Karten
        toggleDialog("Herzlichen Glückwunsch, Sie haben gewonnen ... Gegner hat zu viele Karten!"); 
    }
    return false;       //Ist keines der Kriterien erfüllt wird false zurückgegeben
}

//HTML Funktionen

function drawPlayerCards() {                        //Funktion um Karten des Spielers in DOM zu erstellen
    playerDOMElement.innerHTML = "";                //Alle Karten werden zunächst aus DOM gelöscht

    //Karten-Array wird durchlaufen in den DOM geschrieben
    for (let index: number = 0; index < player.handCards.length; index++) {

        var card: IntCard = player.handCards[index];
        
        let playerCard: HTMLElement = document.createElement("div"); //Neues div-Element wird erstellt
        playerCard.classList.add("card4");

        playerCard.innerHTML = " <main class=\"card4 " + card.color + "\"><p class=\"top\">" +   //HTML Zeichenkette wird erstellt
            card.number + "</p><p class=\"bottom\">" +
            card.number + "</p></main>";

        playerCard.querySelector(".card4").addEventListener("click", function (): void { //EventListener für Klick auf die Karten der Spielerhand
            console.log("karte geklickt");
            if (player.onTurn == true) {
                playerPutCard(index);
            }
        });

        playerDOMElement.appendChild(playerCard); //Oben "zusammengebaute" Karte wird in den Dom gerendert
    }
}

function drawEnemyCards() {                     //Funktion um Karten des Gegners in DOM zu erstellen

    enemyDOMElement.innerHTML = "";

    for (let index: number = 0; index < enemy.handCards.length; index++) {

        var card: IntCard = enemy.handCards[index];

        let enemyCard: HTMLElement = document.createElement("div");
        enemyCard.classList.add("card1");
        enemyCard.innerHTML = " <main class=\"card1 hidden\"><i class=\"far fa-hand-peace\" id=\"cardback\"></i></main>";
        enemyDOMElement.appendChild(enemyCard);
    } 
}

function drawOpenCards() {                              //Funktion um Ablagestapel in DOM zu erstellen
    openCardsDOMElement.innerHTML = "";
    var card: IntCard = openCards[0];

    let openCard: HTMLElement = document.createElement("div");
    openCard.classList.add("card2");
    openCard.innerHTML = " <main class=\"card2 " + card.color + "\"><p class=\"top\">" +
        card.number + "</p><p class=\"bottom\">" +
        card.number + "</p></main>";
    openCardsDOMElement.appendChild(openCard);
}

function drawCards() {                                  //Funktion um Aufnahmestapel in DOM zu erstellen
    cardsDOMElement.innerHTML = "";
    var card: IntCard = cards[0];

    let cardElement: HTMLElement = document.createElement("div");
    cardElement.classList.add("card3");
    cardElement.innerHTML = " <main class=\"card3 hidden\"><i class=\"far fa-hand-peace\" id=\"cardback\"></main>";
    cardElement.querySelector(".card3").addEventListener("click", function (): void {

        console.log("aufnahmekarte geklickt");
        if (player.onTurn == true) {
            playerTakesCard();
        }
    });
    cardsDOMElement.appendChild(cardElement);
}

function drawDOM() {
    drawPlayerCards();
    drawEnemyCards();
    drawOpenCards();
    drawCards();

}

window.addEventListener("load", function (): void {

    enemyDOMElement = document.querySelector("#field1");        //Erstellte Karten werden per id den jeweiligen
    openCardsDOMElement = document.querySelector("#field2");    //Spielbereichen zugewiesen
    cardsDOMElement = document.querySelector("#field3");
    playerDOMElement = document.querySelector("#field4");

    startGame();
});

//Funktion zum Neustarten des Spiels

function renewGame() {       
   
    while (player.handCards.length > 0) {
        player.handCards.pop();
    }
    while (enemy.handCards.length > 0) {
        enemy.handCards.pop();
    }
    while (cards.length > 0) {
        cards.pop();
    }
    while (openCards.length > 0) {
        openCards.pop();
    }
    startGame();
}

//Funktion für Pop-Up-Meldung

function toggleDialog(html: String) {
    console.log("in toggle");
    var dialog = document.querySelector('dialog'),
        closebutton = document.getElementById('close-dialog'),
        pagebackground = document.querySelector('body');

    if (!dialog.hasAttribute('open')) {
        // show the dialog 
        dialog.setAttribute('open', 'open');
        // after displaying the dialog, focus the closebutton inside it
        closebutton.focus();
        closebutton.addEventListener('click', toggleDialog);
        document.querySelector("#gameOverText").innerHTML = "" + html;
        var div = document.createElement('div');
        div.id = 'backdrop';
        document.body.appendChild(div);
    }
    else {
        dialog.removeAttribute('open');
        var div = document.querySelector('#backdrop');
        div.parentNode.removeChild(div);
        renewGame();
    }
}
