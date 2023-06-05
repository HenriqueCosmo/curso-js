let num = [5,2,1,6]
num[4] = 8 //atribui valores ao array na posição desejada
num.push(7) //atribui mais valores ao array no final da "lista"
console.log(num)
console.log(`o primeiro valor é ${num[0]}`)
num.sort() //Função usada para organizar os valores da variavel 
console.log(num)
console.log(`O primeiro valor é ${num[0]}`)
console.log(`O vetor tem ${num.length} posições`) //O LENGTH verifica o tamanho/comprimento do array e imprime a quantidade 
let pos = num.indexOf(2)
if (pos == -1){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`o valor está na posição ${pos}`)
}