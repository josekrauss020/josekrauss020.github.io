// 1 accessar a janela (browser)
// 2 pegar html todo
// 3 pegar o botão
// 4 receber o input do clike

// Acessar janela
// pegar o HTML todo
// pegar o elements
// mover nosso element para direita

//                 1-------2-----------------3
const btnRight = window.document.querySelector('.button-arrow.-right');
const btnLeft = window.document.querySelector('.button-arrow.-left');
const elements = window.document.querySelector('.elements');
let multiplicador = 0;

//console.log(btnRight);
btnRight.addEventListener('click', function() {
    multiplicador = multiplicador + 80;
    elements.style = `transform: translateX(${multiplicador}px)`;
});

btnLeft.addEventListener('click', function() {
    multiplicador = multiplicador - 80;
    elements.style = `transform: translateX(${multiplicador}px)`;
});


