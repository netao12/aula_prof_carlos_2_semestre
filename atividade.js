const listadeAlunos = [
    {nome: "Patrick", nota: 5.0},
    {nome: "Maitê", nota: 10.0},
    {nome: "Neto", nota: 7.0},
    {nome: "Erica", nota: 6.0},
    {nome: "Nino", nota: 8.0}
]

console.log("Encontre a Aluna Erica e mostre o nome e a média dela.")
const usuarioEncontrado = listadeAlunos.find(u => u.nome === "Erica")
console.log(usuarioEncontrado)
console.log(`Nome: ${usuarioEncontrado.nome} \nNota: ${usuarioEncontrado.nota}`) 

console.log("\nMostre a média geral da turma.") 
listadeAlunos.forEach( u => {
    console.log(`Nome:${u.nome} \nNota: ${u.nota}\n`)
})