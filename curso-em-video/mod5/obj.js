let amigo = {nome:'josé', 
sexo: 'M', 
peso: 84.2, 
engordar(p = 0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log( `${amigo.nome} pesa ${amigo.peso} kg`)