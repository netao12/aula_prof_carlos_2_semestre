import { useState } from 'react';
import './App.css'; // Vamos usar o arquivo CSS que já vem no projeto!

const jogadores = [
  { id: 1, nome: "Lionel Messi", idade: 36, posicao: "Atacante", estilo: "Driblador e Criador" },
  { id: 2, nome: "Cristiano Ronaldo", idade: 39, posicao: "Atacante", estilo: "Finalizador Letal" },
  { id: 3, nome: "Kevin De Bruyne", idade: 32, posicao: "Meio-campista", estilo: "Visão de jogo e Passe" },
  { id: 4, nome: "Virgil van Dijk", idade: 32, posicao: "Zagueiro", estilo: "Forte e Seguro no jogo aéreo" },
  { id: 5, nome: "Kylian Mbappé", idade: 25, posicao: "Atacante", estilo: "Velocidade e Explosão" },
  { id: 6, nome: "Neymar Jr", idade: 32, posicao: "Atacante", estilo: "Drible e Improviso" },
  { id: 7, nome: "Casemiro", idade: 32, posicao: "Volante", estilo: "Marcação e Desarme" },
  { id: 8, nome: "Alisson Becker", idade: 31, posicao: "Goleiro", estilo: "Posicionamento e Reflexo" },
  { id: 9, nome: "Vinícius Júnior", idade: 23, posicao: "Ponta Esquerda", estilo: "Drible em velocidade" },
  { id: 10, nome: "Luka Modric", idade: 38, posicao: "Meio-campista", estilo: "Controle de ritmo e Classe" },
  { id: 11, nome: "Erling Haaland", idade: 23, posicao: "Atacante", estilo: "Força física e Finalização" }
];

function App() {
  const [busca, setBusca] = useState("");

  const jogadorEncontrado = jogadores.find((jogador) =>
    busca.trim() !== "" && jogador.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="titulo">Busca de Jogadores</h2>
      
      <p className="texto-ajuda">
        <strong>Jogadores disponíveis:</strong> Messi, Cristiano Ronaldo, De Bruyne, Van Dijk, Mbappé, Neymar Jr, Casemiro, Alisson, Vinícius Júnior, Modric, Haaland.
      </p>

      <input
        type="text"
        className="input-busca"
        placeholder="Digite o nome do jogador..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      <div className="resultado-container">
        {jogadorEncontrado ? (
          <div className="card-jogador">
            <h3>{jogadorEncontrado.nome}</h3>
            <p><strong>Idade:</strong> {jogadorEncontrado.idade} anos</p>
            <p><strong>Posição:</strong> {jogadorEncontrado.posicao}</p>
            <p><strong>Estilo de jogo:</strong> {jogadorEncontrado.estilo}</p>
          </div>
        ) : busca.trim() !== "" ? (
          <p className="erro-texto">Nenhum jogador encontrado com esse nome.</p>
        ) : (
          <p className="vazio-texto">Digite um nome para ver os detalhes.</p>
        )}
      </div>
    </div>
  );
}

export default App;