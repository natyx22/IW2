const texto = document.getElementById('spanTexto');
const botaoAlterarTexto = document.getElementById('btAlterarTexto');
const numero1= document.getElementById('inputNumero1');
const botaoCalcular= document.getElementById('btnCalculos');
const texto1 = document.getElementById('resultado');

document.addEventListener('DOMContentLoaded', () => {
    texto.style.color = 'blue';
});
botaoAlterarTexto.addEventListener('click', () => {
    texto.textContent = 'Avaliação';
});

numero1.addEventListener('input', () => {
    if (Number(numero1.value)> 0){
        let resp = "O número é maior que 0";
        texto1.textContent = resp;
    }else if (Number(numero1.value)< 0){
        let resp = "O número é menor que 0";
        texto1.textContent = resp;
    }else{
        let resp = "O número é igual a 0";
        texto1.textContent = resp;
    }
       
});
