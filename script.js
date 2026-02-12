const botaoAdicionar = document.getElementById('btnAdicionar');
const campoTexto = document.getElementById('novoAprovado');
const lista = document.getElementById('listaAprovados');

botaoAdicionar.addEventListener('click', function() {
    const nomeAluno = campoTexto.value;  

    if (nomeAluno.trim() !== '') {
        const novoItem = document.createElement('li');
        novoItem.textContent = nomeAluno;
        lista.appendChild(novoItem);
        campoTexto.value = ''; 
        campoTexto.focus();
    }   else {
        alert('Por favor, digite o nome do aluno.');
    }
})