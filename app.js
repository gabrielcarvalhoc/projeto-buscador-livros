const livros = require('./database')

//Pegando o Input do Usuário

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N ')

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Temos as seguintes categorias disponíveis:')
    console.log('Financas', '/ Autoajuda', '/ Esportes', '/ Historia', '/ Negocios', '/ Biografia', '/ Ficcao')

    const entradaCategoria = readline.question('Gostaria de escolher qual categoria? ')
    
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.log(`Temos os seguintes livros de ${entradaCategoria} disponíveis:`)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
    
    console.log('Temos os seguintes livros disponíveis, em ordem de tamanho:')

    console.table(livrosOrdenados)
}