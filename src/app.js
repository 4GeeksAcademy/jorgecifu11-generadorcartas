let numeros = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let pintas = ['♥', '♦', '♣', '♠'];

let generarCarta = () => {
  let rdmNumber = numeros[Math.floor(Math.random() * numeros.length)];
  let rdmPintas = pintas[Math.floor(Math.random() * pintas.length)]

  let numeroElem = document.getElementById('numero');
  let izqElem = document.getElementById('izq');
  let derElem = document.getElementById('der');
  let carta = document.getElementById('carta');


  numeroElem.textContent = rdmNumber;
  izqElem.textContent = rdmPintas;
  derElem.textContent = rdmPintas;

  if (rdmPintas === '♥' || rdmPintas === '♦') {
    izqElem.classList.remove('negro');
    izqElem.classList.add('rojo');
    derElem.classList.remove('negro');
    derElem.classList.add('rojo');

  } 
}

window.onload = generarCarta;