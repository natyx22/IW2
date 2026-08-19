const texto = document.getElementById('spanTexto');
const botaoAlterarTexto = document.getElementById('btAlterarTexto');

botaoAlterarTexto.addEventListener('click', () => {
    texto.textContent = 'Novo texto!';
});