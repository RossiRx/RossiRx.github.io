//Gesamtrechnung
var europa18 = 4209.3;
var afrika18 = 1235.5;
var samerika18 = 1261.5;
var namerika18 = 6035.6;
var asien18 = 16274.1;
var australien18 = 2100.5;
var world = (europa18 + samerika18 + namerika18 + asien18 + australien18 + afrika18);
//Variablen:
//VarEuropa
var word1 = "Die weltweiten Emissionsausstoße:";
var empty = " ";
var europa1 = "Europa";
var europa2 = "Die Emission von Europa ist: ";
var europa3 = "Relativ zur Gesamtemission der Welt verursacht Europa damit ";
var europa08 = 4965.7;
var europa4 = "Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ";
var europa5 = "2018 im Vergleich zu 2008 sind das ";
//VarAfrika
var afrika1 = "Afrika";
var afrika2 = "Die Emission von Afrika ist: ";
var afrika3 = "Relativ zur Gesamtemission der Welt verursacht Afrika damit ";
var afrika4 = "Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ";
var afrika08 = 1028;
var afrika5 = "2018 im Vergleich zu 2008 sind das ";
//VarSüdamerika
var samerika1 = "Südamerika";
var samerika2 = "Die Emission von Südamerika ist: ";
var samerika3 = "Relativ zur Gesamtemission der Welt verursacht Südamerika damit ";
var samerika4 = "Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um ";
var samerika08 = 1132.6;
var samerika5 = "2018 im Vergleich zu 2008 sind das ";
//VarNordamerika
var namerika1 = "Nordamerika";
var namerika2 = "Die Emission von Nordamerika ist: ";
var namerika3 = "Relativ zur Gesamtemission der Welt verursacht Nordamerika damit ";
var namerika4 = "Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um ";
var namerika08 = 6600.4;
var namerika5 = "2018 im Vergleich zu 2008 sind das ";
//VarAsien
var asien1 = "Asien";
var asien2 = "Die Emission von Asien ist: ";
var asien3 = "Relativ zur Gesamtemission der Welt verursacht Asien damit ";
var asien4 = "Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ";
var asien08 = 12954.7;
var asien5 = "2018 im Vergleich zu 2008 sind das ";
//VarAustralien
var australien1 = "Australien";
var australien2 = "Die Emission von Australien  ist: ";
var australien3 = "Relativ zur Gesamtemission der Welt verursacht Australien damit ";
var australien4 = "Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ";
var australien08 = 1993;
var australien5 = "2018 im Vergleich zu 2008 sind das ";
//Funktionen:
//FuncEuropa
function FuncEuropa() {
    document.querySelector("#todo").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector("#Gesamt1").innerHTML = europa18 + "kg";
    document.querySelector("#Gesamt2").innerHTML = "Emission absolute of </br> Europe in 2018";
    document.querySelector("#VglWelt").innerHTML = Math.round((europa18 / world * 100)) + "%";
    document.querySelector("#Wachstumsrate").innerHTML = Math.round((100 * europa18 / europa08 - 100)) + "%";
    document.querySelector("#Wachstumswert").innerHTML = Math.round((europa18 - europa08)) + "kg";
    document.querySelector(".chart").setAttribute("style", "height:14%");
}
window.addEventListener("load", function () {
    document.querySelector(".europe").addEventListener("click", FuncEuropa);
});
//FuncAfrika
function FuncAfrika() {
    document.querySelector("#todo").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.querySelector("#Gesamt1").innerHTML = afrika18 + "kg";
    document.querySelector("#Gesamt2").innerHTML = "Emission absolute of </br> Africa in 2018";
    document.querySelector("#VglWelt").innerHTML = Math.round((afrika18 / world * 100)) + "%";
    document.querySelector("#Wachstumsrate").innerHTML = Math.round((100 * afrika18 / afrika08 - 100)) + "%";
    document.querySelector("#Wachstumswert").innerHTML = Math.round((afrika18 - afrika08)) + "kg";
    document.querySelector(".chart").setAttribute("style", "height:4%");
}
window.addEventListener("load", function () {
    document.querySelector(".africa").addEventListener("click", FuncAfrika);
});
//FuncSüdamerika
function FuncSamerika() {
    document.querySelector("#todo").innerHTML = "Carbon Dioxide Emissions in Southamerica";
    document.querySelector("#Gesamt1").innerHTML = samerika18 + "kg";
    document.querySelector("#Gesamt2").innerHTML = "Emission absolute of </br> Southamerica in 2018";
    document.querySelector("#VglWelt").innerHTML = Math.round((samerika18 / world * 100)) + "%";
    document.querySelector("#Wachstumsrate").innerHTML = Math.round((100 * samerika18 / samerika08 - 100)) + "%";
    document.querySelector("#Wachstumswert").innerHTML = Math.round((samerika18 - samerika08)) + "kg";
    document.querySelector(".chart").setAttribute("style", "height:4%");
}
window.addEventListener("load", function () {
    document.querySelector(".southamerica").addEventListener("click", FuncSamerika);
});
//FuncNordamerika
function FuncNamerika() {
    document.querySelector("#todo").innerHTML = "Carbon Dioxide Emissions in Northamerica";
    document.querySelector("#Gesamt1").innerHTML = europa18 + "kg";
    document.querySelector("#Gesamt2").innerHTML = "Emission absolute of </br> Northamerica in 2018";
    document.querySelector("#VglWelt").innerHTML = Math.round((namerika18 / world * 100)) + "%";
    document.querySelector("#Wachstumsrate").innerHTML = Math.round((100 * namerika18 / namerika08 - 100)) + "%";
    document.querySelector("#Wachstumswert").innerHTML = Math.round((namerika18 - namerika08)) + "kg";
    document.querySelector(".chart").setAttribute("style", "height:19%");
}
window.addEventListener("load", function () {
    document.querySelector(".northamerica").addEventListener("click", FuncNamerika);
});
//FuncAsien
function FuncAsien() {
    document.querySelector("#todo").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.querySelector("#Gesamt1").innerHTML = asien18 + "kg";
    document.querySelector("#Gesamt2").innerHTML = "Emission absolute of </br> Asia in 2018";
    document.querySelector("#VglWelt").innerHTML = Math.round((asien18 / world * 100)) + "%";
    document.querySelector("#Wachstumsrate").innerHTML = Math.round((100 * asien18 / asien08 - 100)) + "%";
    document.querySelector("#Wachstumswert").innerHTML = Math.round((asien18 - asien08)) + "kg";
    document.querySelector(".chart").setAttribute("style", "height:52%");
}
window.addEventListener("load", function () {
    document.querySelector(".asia").addEventListener("click", FuncAsien);
});
//FuncAustralien
function FuncAustralien() {
    document.querySelector("#todo").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.querySelector("#Gesamt1").innerHTML = australien18 + "kg";
    document.querySelector("#Gesamt2").innerHTML = "Emission absolute of </br> Australia in 2018";
    document.querySelector("#VglWelt").innerHTML = Math.round((australien18 / world * 100)) + "%";
    document.querySelector("#Wachstumsrate").innerHTML = Math.round((100 * australien18 / australien08 - 100)) + "%";
    document.querySelector("#Wachstumswert").innerHTML = Math.round((australien18 - australien08)) + "kg";
    document.querySelector(".chart").setAttribute("style", "height:7%");
}
window.addEventListener("load", function () {
    document.querySelector(".australia").addEventListener("click", FuncAustralien);
});
//ConsoleAusgaben
console.log(word1); //Europa
console.log(empty);
console.log(europa1);
console.log(europa2 + europa18 + " kg CO2 (Stand 2018)");
console.log(europa3 + (europa18 / world * 100) + "%");
console.log(europa4 + (100 * europa18 / europa08 - 100) + "% verändert");
console.log(europa5 + (europa18 - europa08) + "kg CO2");
console.log(empty); //Afrika
console.log(afrika1);
console.log(afrika2 + afrika18 + " kg CO2 (Stand 2018)");
console.log(afrika3 + (afrika18 / world * 100) + "%");
console.log(afrika4 + (100 * afrika18 / afrika08 - 100) + "% verändert");
console.log(afrika5 + (afrika18 - afrika08) + "kg CO2");
console.log(empty); //Südamerika
console.log(samerika1);
console.log(samerika2 + samerika18 + " kg CO2 (Stand 2018)");
console.log(samerika3 + (samerika18 / world * 100) + "%");
console.log(samerika4 + (100 * samerika18 / samerika08 - 100) + "% verändert");
console.log(samerika5 + (samerika18 - samerika08) + "kg CO2");
console.log(empty);
console.log(namerika1); //Nordamerika
console.log(namerika2 + namerika18 + " kg CO2 (Stand 2018)");
console.log(namerika3 + (namerika18 / world * 100) + "%");
console.log(namerika4 + (100 * namerika18 / namerika08 - 100) + "% verändert");
console.log(namerika5 + (namerika18 - namerika08) + "kg CO2");
console.log(empty); //Asien
console.log(asien1);
console.log(asien2 + asien18 + " kg CO2 (Stand 2018)");
console.log(asien3 + (asien18 / world * 100) + "%");
console.log(asien4 + (100 * asien18 / asien08 - 100) + "% verändert");
console.log(asien5 + (asien18 - asien08) + "kg CO2");
console.log(empty); //Australien
console.log(australien1);
console.log(australien2 + australien18 + " kg CO2 (Stand 2018)");
console.log(australien3 + (australien18 / world * 100) + "%");
console.log(australien4 + (100 * australien18 / australien08 - 100) + "% verändert");
console.log(australien5 + (australien18 - australien08) + "kg CO2");
//# sourceMappingURL=datei.js.map