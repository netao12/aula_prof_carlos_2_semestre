// Vetor de Nomes 
const listaDeNomes = ["Ana" ,"Maria", "Joana", "satan"]

//Exemplo com vetor de Número
const listaDeNumeros = [1, 2, 3, 4, 5] 

// Vetor de objetos com dados de nome e idade
// Um objeto carrega dados como uma classe
const listaDeUsuarios = [
    {nome: "Ana", idade: 25},
    {nome: "Maria", idade: 35},
    {nome: "Joana", idade: 45},
    {nome: "desgraça", idade: 6}
]

// Percorrendo e exibindo os elementos do vetor
// ForEach é uma função com laço de repetição
console.log("Exibindo todos os usuários do vetor.")
listaDeUsuarios.forEach( u => {
    console.log(`${u.nome} tem ${u.idade} anos.`)
}) 

// Como os antigos.
console.log("\nExibindo todos os usuários do vetor.")
for (let i = 0; i < listaDeUsuarios.length; i++) {
    console.log(`${listaDeUsuarios[i].nome} tem ${listaDeUsuarios[i].idade} anos.`)
}

console.log("\nFiltrando Maiores De 18 anos.")
const maioridade = listaDeUsuarios.filter(usuario => usuario.idade >= 18)
maioridade.forEach( usuario =>
    // use as {} caso precise de mais de uma linha.
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
)


console.log("\nFiltrando Menores de 18 anos ")
const menoridade = listaDeUsuarios.filter(usuario => usuario.idade < 18)

menoridade.forEach( usuario =>
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
)

console.log("\nNa lita de usuários, mostre apenas os nomes.")
const nomes = listaDeUsuarios.map(u => u.nome)
nomes.forEach(nome => console.log(`Nome: ${nome}`)) 

console.log("\nNa lista de usuários, encontre um usuario.") 
const usuarioEncontrado = listaDeUsuarios.find(u => u.nome === "Ana")
console.log(usuarioEncontrado) 
console.log(`Nome: ${usuarioEncontrado.nome} \nIdade: ${usuarioEncontrado.idade}`) 

console.log("\nNa lista de usuários, econtre um ususário com idade de 45 anos.")
const usuarioEncontradoIdade = listaDeUsuarios.find(u => u.idade === 45)
console.log(`Nome: ${usuarioEncontradoIdade.nome} \nIdade: ${usuarioEncontradoIdade.idade}`) 

