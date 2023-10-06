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

