/* **Consegna**
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. */

var limite = 100;
var bombe_computer = 16;
var max_tentativi = limite - bombe_computer;

var bombs_reali = bombsGenerator(bombe_computer, limite);
var arr_numeri_giocati = [];

var gioco_finito = false;

console.log(bombs_reali);



//CICLO PER FAR FUNZIONARE IL GIOCO

while(gioco_finito === false){ // finchè gioco_finito rimane falso vai avanti

  var numero_utente = parseInt(prompt('Inserisci un numero'));

  if(arr_numeri_giocati.includes(numero_utente) === true){ // se il numero dell'utente è nell'elenco dell'array esce l'alert

    alert('Attenzione! Questo numero è stato già inserito. Riprova');

  }else if(bombs_reali.includes(numero_utente) === true){ // se il numero  inserito dall'utente è = a un numero della lista delle bombe...Hai perso e il gioco finisce

    alert('Peccato! Hai beccato una bomba. Hai perso..sarai più fortunato la prossima volta.');

    console.log("Hai perso");
    console.log("Hai fatto n° " + (arr_numeri_giocati.length + 1) + " tentativi.\nLa bomba colpevole è la n° " + numero_utente + ".")

    gioco_finito = true;

  }else if( isNaN(numero_utente) === true){ // se l'utente inserisce una lettera compare un alert dove gli si dice di riprovare

    alert('Attenzione! Non hai inserito correttamente un numero. Riprova');
  }else if( numero_utente > limite){ // se l'utente inserisce un numero maggiore del limite esce un messaggio per inserire un altro numero

    alert('Hai inserito un numero maggiore di 100. Riprova');

  }else if( numero_utente < 1){ // se l'utente inserisce un numero inferiore a 1 esce un messaggio per inserire di nuovo un numero

    alert('Hai inserito un numero inferiore a 1. Riprova');
  }else{

    arr_numeri_giocati.push(numero_utente);

    if(max_tentativi === arr_numeri_giocati.length){
      alert('HAI VINTO');
      console.log('Complimenti..HAI VINTO!');

      gioco_finito = true;
    }
  }

}





//FUNZIONE PER CREARE L'ARRAY CON LE BOMBE

function bombsGenerator(numeroBombs, max){

  var arrBombs = [];  // ho creato un array vuoto per contenere tutte le bombe

  //creo il ciclo per aggiunge le bombe nell'array quando trova una bomba di numeroBombs
  while(arrBombs.length < numeroBombs ){
    //estraggo una bomba
    var bomb = Math.ceil(Math.random() * max);

    if(arrBombs.includes(bomb) === false){
      // se non trovo la mia bomba nell'array di bombe allora la aggiungo
      arrBombs.push(bomb);
    }
    
  }
  return arrBombs;
}