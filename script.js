const percorso = parseFloat(prompt("Benvenuto, quanti chilometri devi percorrere?"));
let costo = parseFloat(percorso * 0.21).toFixed(2);
console.log("Il prezzo del tuo biglietto è", costo, "€");
const eta = parseInt(prompt("Quanti anni hai?"));
if (eta < 18) {
    var ridotto1 = parseFloat(costo * 80 / 100).toFixed(2);
    console.log("avendo meno di 18 anni hai diritto ad uno sconto del 20/%. Il prezzo del tuo biglietto è", ridotto1,"€");
}
else if (eta > 65) {
    var ridotto2 = (costo * 60 / 100);
    console.log("avendo piu di 60 anni hai diritto ad uno sconto del 60/%. Il prezzo del biglietto è", ridotto2,"€");
}
else {
    console.log("Prezzo intero")
}