/*
const pswnumber = 21;

let nome = prompt('inserisci il tuo nome');
let cognome = prompt ('inserisci il tuo cognome');
let colore = prompt ('inserisci il tuo colore preferito');

console.log(nome, cognome, colore);

let pswwannabe = `
  ${nome+cognome+colore+pswnumber}
`
let pswresult = `
  <h2>
    Congratulazioni! la tua password è ${pswwannabe}!
  </h2>
`
console.log (pswresult);
document.getElementById('psw').innerHTML = pswresult;

console.log (document.getElementById('psw'));
*/

/*
es:if ed else

let piove = false

if (piove) {
  console.log ("prendo l'ombrello");
} else {
  console.log ('esco')
}

console.log ('telefono a gigi');
*/


/*
if con operatori di confronto

let colore = 'giallo';

if (colore === 'rosso') {
  console.log ('passione');
} else if (colore === 'verde') {
  console.log ('speranza');
} else if (colore === 'giallo') {
  console.log ('odio');
} else {
  console.log ('colore non previsto');
}

console.log ('color test');
*/

/*
non è vera, sto usando due operaotri differenti!!!

let a = 7;
let b = '7';

if (a === b) {
  console.log ('sono uguali');
} else {
  console.log ('non sono uguali');
}

è vera in quanto tutte le condizioni di && (and) sono soddisfatte!!!

let c = 7;
let d = 7;
let e = 45;

if ((c === d) && (e > 40)) {
  console.log ('vera');
} else {
  console.log ('falsa');
}

è vera in quanto almeno una delle condizioni di || (or) sono soddisfatte !!!

let f = 7;
let g = 7;
let h = 25;

if ((f === g) || (h > 40)) {
  console.log ('vera');
} else {
  console.log ('falsa');
}

è vera in quanto entrambe le condizioni di && sono soddisfatte !!!

let g = 'pippo';

if (((f === g) && (h < 40) && g === 'pippo')) {
  console.log ('vera');
} else {
  console.log ('falsa');
}
*/


//in un locale le donne hanno lo sconto 30%
//dopo mezzanotte tutti hanno lo sconto 20%

//le donne dopo mezzanotte entrano gratis

/*
si traduce in: 
se il cliente è donna e sono le ore maggiori o uguali alle 24 il biglietto ha costo 0
se il cliente è donna il biglietto ha costo 20-30% quindi 14
se l'ora è maggiore o uguale di 24 ( ed il cliente non è donna in quanto non dichiarato nella condizione)
il costo del biglietto è 20-20% quindi 16 
in ogni caso io alla fine stampo il valore del biglietto

let ora = 22;
let cliente = 'donna';
let biglietto = 20;

if (cliente === 'donna' && ora >= 24) {
  console.log ('biglietto costo', 0);
} else if (cliente === 'donna') {
  biglietto = biglietto - (biglietto * 30/100);
  console.log ('biglietto costo', biglietto);
} else if (ora >= 24) {
  biglietto = biglietto - (biglietto * 20/100);
  console.log ('biglietto costo', biglietto);
} 

console.log ('biglietto costo', biglietto);


*/
