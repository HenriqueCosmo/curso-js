/*let passagem = {pais : 'frança', cidade: 'paris', horario: '10.15'}
console.log(`passagem para: ${passagem.pais},cidade: ${passagem.cidade}, horário: ${passagem.horario}`)*/

/*let pessoa = {};
pessoa.nome = 'joca'
pessoa.sobrenome = 'santos'
console.log(`O nome dele é ${pessoa.nome}`+` ${pessoa.sobrenome} `)*/

let books = [{ tittle: 'Falando em JavaScript ', author:  'Axel Rauschmayer', pages: 460 }, {tittle: 'Programação de aplicativos JavaScript ' , author: 'Eric Elliott', pages: 254},{tittle:'Compreendendo o ECMAScript 6' ,author: 'Nicholas C. Zakas', pages: 352}]

books[3] = {
    tittle: 'Learning JavaScript Design Patterns ', author: 'Addy Osmani', pages: 254
}
console.log(books)
let selectbooks = books.slice(-2)
console.log(selectbooks)

books.shift(0)
console.log(books)

let soma = books[0].pages + books[1].pages + books[2].pages 
console.log(soma)
