function parimp(n){
    if(n % 2 == 0){
        return 'Par'
    }else {
        return 'Impar'
    }
}
let res = parimp(51)
console.log(`O Valor é ${res}`)