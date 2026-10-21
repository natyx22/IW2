const informacoesUsuario = '{"nome": "nataly", "idade": "16", "situacao": true}';
 
const usuario = JSON.parse(informacoesUsuario);

const elementoNome = document.getElementById('nome-usuario');
const elementoIdade = document.getElementById('idade-usuario');
const elementoSitucao= document.getElementById('situacao-usuario');

const botaoCarregar = document.getElementById('btnCarregar');

botaoCarregar.addEventListener('click', () => {
    elementoNome.textContent  = usuario.nome;
    elementoIdade.textContent  = usuario.idade + 'anos';
    elementoSitucao.textContent  = usuario.situacao ?'online' : 'offline' ;
});

