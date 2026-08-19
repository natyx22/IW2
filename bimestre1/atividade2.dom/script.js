const textoVermelho = document.getElementById('spanTextoVermelho');
const textoVerde = document.getElementById('spanTextoVerde');
const textoAzul = document.getElementById('spanTextoAzul');

const botaoAlterarVermelho = document.getElementById('btAlterarVermelho');
const btAlterarVerde = document.getElementById('btAlterarVerde');
const btAlterarAzul = document.getElementById('btAlterarAzul');

botaoAlterarVermelho.addEventListener('click', () => {
    textoVermelho.style.color = 'red';
});

btAlterarVerde.addEventListener('click', () => {
    textoVerde.style.color = 'green';
});

btAlterarAzul.addEventListener('click', () => {
    textoAzul.style.color = 'blue';
});

const botaoModo = document.getElementById('btnModo');

botaoModo.addEventListener('click', () => {
    if (document.body.style.background === 'black'){
        document.body.style.background='';
        document.body.style.color = '';
    }else{
        document.body.style.background = 'black';
        document.body.style.color = 'white';
    }


})