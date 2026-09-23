const numero1= document.getElementById('inputNumero1');
const numero2= document.getElementById('inputNumero2');
const botaoCalcular= document.getElementById('btnCalculos');
const textoSoma= document.getElementById('pSoma');
const textoSubtracao= document.getElementById('pSubtracao');
const textoMultiplicacao= document.getElementById('pMultiplicacao');
const textoDivisao= document.getElementById('pDivisao');
const textoResto= document.getElementById('pResto');
const textoPotencia= document.getElementById('pPotencia');

botaoCalcular.addEventListener('click', () => {
    if (numero1.value != '' && numero2.value != ''){
        const soma = Number(numero1.value) + Number(numero2.value);
        const subtracao = Number(numero1.value) - Number(numero2.value);
        const multiplicacao = Number(numero1.value) * Number(numero2.value);
        const divisao = Number(numero1.value) / Number(numero2.value);
        const resto = Number(numero1.value) % Number(numero2.value);
        const potencia = Number(numero1.value) ** Number(numero2.value);

        textoSoma.innerHTML = numero1.value + '+' + numero2.value + '=' + soma;
        textoSubtracao.innerHTML = numero1.value + '-' + numero2.value + '=' + subtracao;
        textoMultiplicacao.innerHTML = numero1.value + '*' + numero2.value + '=' + multiplicacao;
        textoDivisao.innerHTML = numero1.value + '/' + numero2.value + '=' + divisao.toFixed(2);
        textoResto.innerHTML = numero1.value + '%' + numero2.value + '=' + resto;
        textoPotencia.innerHTML = numero1.value + '<sup>' + numero2.value + '<sup>=' + potencia;
    }
});