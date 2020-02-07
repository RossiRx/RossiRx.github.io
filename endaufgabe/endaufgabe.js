//Interfaces ... (Zur Typisierung der Objekte)  
//Karten-Arrays (für Aufnahme- und Ablagestapel)
var cards = [];
var openCards = [];
//Spieler mit Handkarten-Arrays
var player = {
    onTurn: false,
    handCards: []
};
var enemy = {
    onTurn: false,
    handCards: []
};
//Array zur Übermittlung der Farbwerte (Hilfs-Array)
var colors = [
    "blue", "red", "yellow", "green"
];
//HTML-Elemente (Vier Kartenfelder)
var playerDOMElement;
var enemyDOMElement;
var cardsDOMElement;
var openCardsDOMElement;
//Funktionen zur Spielausführung
//Funktionen des Players
function playerTakesCard() {
    var card;
    card = cards.pop(); //Karte wird aus Aufnahmestapel (Cards-Array) über Zwischenvariable (card) 
    player.handCards.unshift(card); //zu Spieler-Handkarten (player.handCards-Array) hinzugefügt
    if (cards.length == 0) {
        mixCards(); //Wenn Aufnahmestapel leer, dann wird neu gemischt
    }
    drawDOM();
    if (checkGameOver() == true) { //Nach jedem Zug wir die Prüffunktion checkGameOver ausgeführt, um zu 
        return; //das Spielende festzustellen (return beendet das Ausführen der Funktion an dieser Stelle)
    }
    player.onTurn = false; //Nachdem der Spieler seinen Zug gemacht hat werden die Status von Gegner 
    enemy.onTurn = true; //und Spieler gewechselt
    setTimeout(function () { enemyPutCard(); }, 1500); //Gegner ist am Zug ... Funktion wird mit Verzögerung aufgerufen
}
function playerPutCard(i) {
    if (validCard(player.handCards[i]) == true) { //Wenn Karte passend, wird diese von handCards-Array in 
        openCards.unshift(player.handCards[i]); //Ablagestapel-Array verschoben
        player.handCards.splice(i, 1); //splice nimmt Elemente (in diesem Fall eins) ab index (i) aus dem Array
        player.onTurn = false;
        enemy.onTurn = true;
        drawDOM();
        if (checkGameOver() == true) {
            return;
        }
        setTimeout(function () { enemyPutCard(); }, 1500);
    }
    else {
        console.log("Geht nicht"); //Hilfslog für Anklicken unpassender Karte
    }
}
//Funktionen des Gegners
function enemyPutCard() {
    var worked = false;
    for (var index = 0; index <= enemy.handCards.length - 1; index++) { //Schleife geht Handkarten des Gegners durch
        if (validCard(enemy.handCards[index]) == true) { //Bei passender Karte, wird diese auf Ablage-Array verschoben
            worked = true; //Wenn worked den Status true bekommt, muss der Gegner nicht aufnehmen
            openCards.unshift(enemy.handCards[index]);
            enemy.handCards.splice(index, 1);
            break; //break lässt die schleife abbrechen
        }
    }
    if (worked == false) { //Wenn Status worked = false, wird Funktion zum Aufnehmen
        enemyTakesCard(); //aufgerufen
    }
    drawDOM();
    if (checkGameOver() == true) {
        return;
    }
    enemy.onTurn = false;
    player.onTurn = true;
}
;
function enemyTakesCard() {
    var card;
    card = cards.pop();
    enemy.handCards.unshift(card); //Karte wird vom Aufnahmestapel-Array in Handkarten-Array verschoben
    if (cards.length == 0) {
        mixCards();
    }
}
;
//Funktion zum Mischen der Karten
function mixCards() {
    console.log("stapel neu mischen");
    for (var index = 0; index < openCards.length; index++) { //Karten werden von Ablagestapel in Aufnahmestapel verschoben
        cards[index] = openCards[index];
    }
    while (openCards.length > 0) { //Ablagestapel wird geleert
        openCards.pop();
    }
    var tmp, current, top = cards.length; //Hier werden die Karten durcheinaner gemischt
    if (top)
        while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = cards[current];
            cards[current] = cards[top];
            cards[top] = tmp;
        }
    var card;
    card = cards.pop();
    openCards.unshift(card);
}
;
//Funktion zum Spielstart
function startGame() {
    console.log("started...");
    fillArray(); //Funktion zu Kartengenerierung wird ausgeführt        
    var card;
    var htmlPlayer = "";
    var htmlEnemy = "";
    for (var index = 0; index <= 3; index++) { //Anzahl der Startkarten wird auf 4 festgelegt
        card = cards.pop(); //Karten werden an Spieler vertreilt
        player.handCards.unshift(card);
        card = cards.pop(); //Karten werden an Gegner verteilt
        enemy.handCards.unshift(card);
    }
    card = cards.pop(); //Startkarte wird aufgedeckt
    openCards.unshift(card);
    player.onTurn = true; //Spieler beginnt mit dem ersten Zug
    drawDOM();
}
;
function fillArray() {
    for (var index = 0; index <= colors.length - 1; index++) { //Äußerere Schleife für Zuteilung der Farbwerte
        for (var index2 = 1; index2 <= 8; index2++) { //Innere Schleife für Zuteilung der Zahlenwert
            cards.unshift({ color: colors[index], number: index2 });
        }
    }
    var tmp, current, top = cards.length; //Hier werden die Karten durcheinaner gemischt
    if (top)
        while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = cards[current];
            cards[current] = cards[top];
            cards[top] = tmp;
        }
}
//überprüfungsfunktionen
function validCard(card) {
    var topCard;
    topCard = openCards[0];
    if (topCard.color == card.color) { //Farbe beider Karten wird verglichen
        return true;
    }
    else if (topCard.number == card.number) { //Nummer beider Karten wird verglichen
        return true;
    }
    else {
        return false; //Ist keine der beiden Eigenschaften valide,
    } //wird false zurückgegeben
}
function checkGameOver() {
    var message = "";
    if (player.handCards.length == 0) { //Kriterium1: Spieler hat keine Karten mehr
        toggleDialog("Herzlichen Glückwunsch, Sie haben gewonnen!"); //Ausgabe im Pop-Up-Fenster wird jeweils verändert
        return true;
    }
    else if (enemy.handCards.length == 0) { //Kriterium2: Gegner hat keine Karten mehr
        toggleDialog("Sie haben verloren!");
        return true;
    }
    else if (player.handCards.length >= 10) { //Kriterium3: Spieler hat 10 Karten (maximale Anzahl)
        toggleDialog("Sie haben verloren, maxilmale Kartenzahl überschritten!");
        return true;
    }
    else if (enemy.handCards.length >= 10) { //Kriterium4: Gegner hat 10 Karten
        toggleDialog("Herzlichen Glückwunsch, Sie haben gewonnen ... Gegner hat zu viele Karten!");
    }
    return false; //Ist keines der Kriterien erfüllt wird false zurückgegeben
}
//HTML Funktionen
function drawPlayerCards() {
    playerDOMElement.innerHTML = ""; //Alle Karten werden zunächst aus DOM gelöscht
    var _loop_1 = function (index) {
        card = player.handCards[index];
        var playerCard = document.createElement("div"); //Neues div-Element wird erstellt
        playerCard.classList.add("card4");
        playerCard.innerHTML = " <main class=\"card4 " + card.color + "\"><p class=\"top\">" + //HTML Zeichenkette wird erstellt
            card.number + "</p><p class=\"bottom\">" +
            card.number + "</p></main>";
        playerCard.querySelector(".card4").addEventListener("click", function () {
            console.log("karte geklickt");
            if (player.onTurn == true) {
                playerPutCard(index);
            }
        });
        playerDOMElement.appendChild(playerCard); //Oben "zusammengebaute" Karte wird in den Dom gerendert
    };
    var card;
    //Karten-Array wird durchlaufen in den DOM geschrieben
    for (var index = 0; index < player.handCards.length; index++) {
        _loop_1(index);
    }
}
function drawEnemyCards() {
    enemyDOMElement.innerHTML = "";
    for (var index = 0; index < enemy.handCards.length; index++) {
        var card = enemy.handCards[index];
        var enemyCard = document.createElement("div");
        enemyCard.classList.add("card1");
        enemyCard.innerHTML = " <main class=\"card1 hidden\"><i class=\"far fa-hand-peace\" id=\"cardback\"></i></main>";
        enemyDOMElement.appendChild(enemyCard);
    }
}
function drawOpenCards() {
    openCardsDOMElement.innerHTML = "";
    var card = openCards[0];
    var openCard = document.createElement("div");
    openCard.classList.add("card2");
    openCard.innerHTML = " <main class=\"card2 " + card.color + "\"><p class=\"top\">" +
        card.number + "</p><p class=\"bottom\">" +
        card.number + "</p></main>";
    openCardsDOMElement.appendChild(openCard);
}
function drawCards() {
    cardsDOMElement.innerHTML = "";
    var card = cards[0];
    var cardElement = document.createElement("div");
    cardElement.classList.add("card3");
    cardElement.innerHTML = " <main class=\"card3 hidden\"><i class=\"far fa-hand-peace\" id=\"cardback\"></main>";
    cardElement.querySelector(".card3").addEventListener("click", function () {
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
window.addEventListener("load", function () {
    enemyDOMElement = document.querySelector("#field1"); //Erstellte Karten werden per id den jeweiligen
    openCardsDOMElement = document.querySelector("#field2"); //Spielbereichen zugewiesen
    cardsDOMElement = document.querySelector("#field3");
    playerDOMElement = document.querySelector("#field4");
    startGame();
});
//Funktion zum Neustarten des Spiels
function renewGame() {
    while (player.handCards.length > 0) { //Nach beendetem Spiel werden hier durch jeweils eine 
        player.handCards.pop(); //While-Schleife die vier Kartenstapel Arrays geleert
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
    startGame(); //Sind alle Kartenstapel geleert wird die Startfunktion wieder aufgerufen
}
//Funktion für Pop-Up-Meldung
function toggleDialog(html) {
    console.log("in toggle");
    var dialog = document.querySelector('dialog'), closebutton = document.getElementById('close-dialog'), pagebackground = document.querySelector('body');
    if (!dialog.hasAttribute('open')) {
        dialog.setAttribute('open', 'open');
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
//# sourceMappingURL=endaufgabe.js.map