let title: string = 'Tabata Timer';
const appDiv: HTMLElement = document.getElementById('app.title');

let counter = 0;
let rodada = 0;
let estado = 'Relaxado';

let intervalId = setInterval(() => {
  counter = counter + 1; //counter++
  let counterDiv = document.getElementById('app.counter');
  let rodadaDiv = document.getElementById('app.rodada');
  let estadoDiv = document.getElementById('app.estado');
  if (rodada < 8) {
    if (counter < 10) {
      estado = 'Relaxe';
    } else {
      estado = 'Treine!';
    }
    if (counter == 30) {
      counter = 0;
      rodada++;
    }
  } else {
    estado = 'Finalizado!';
    counter = 0;
  }
  estadoDiv.innerHTML = estado;
  counterDiv.innerHTML = counter.toString();
  rodadaDiv.innerHTML = rodada.toString();
}, 10);

//appDiv.innerHTML = `<h1>${title}</h1>
//<hr/>
//<p>Parágrafo qualquer...</p>
//`;

//console.log('Olá, mundo!');

//for (let i = 1; i <= 10; i++) {
//  if (i % 2 == 0) {
//    console.log(i);
//  }
//}
