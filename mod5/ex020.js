let num = [4,8,7,5,4,1]

console.log(num)
/*
for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} recebe o valor ${num[pos]}`)
}*/

for(let pos in num){
    console.log(`A posição ${pos} recebe o valor ${num[pos]}`)
}