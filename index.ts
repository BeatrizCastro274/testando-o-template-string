let title: string = 'MyApp';
const appDiv: HTMLElement = document.getElementById('app.title');

let counter = 0;

let intervalId = setInterval(() => {
  counter = counter + 1; //counter++
  let counterDiv = document.getElementById('app.counter');
  counterDiv.innerHTML = counter.toString();
}, 1000);

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
