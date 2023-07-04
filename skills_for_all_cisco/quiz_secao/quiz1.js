const unitRose = 8;
const unitLily = 10;
const unitTulip = 2;
let qtdRose = 20;
let qtdLily = 30;
let qtdTulip = 120;

let totalValueRose = unitRose * qtdRose;
let totalValueLily = unitLily * qtdLily;
let totalValueTulip = unitTulip * qtdTulip;

let priceTotal = totalValueLily + totalValueRose + totalValueTulip

console.log('Rose - unit price: ', unitRose, 'quantity: ', qtdRose, 'value: ', totalValueRose)
console.log('Lily - unit price: ', unitLily, 'quantity: ', qtdLily, 'value: ', totalValueLily)
console.log('Tulip - unit price: ', unitTulip, 'quantity: ', qtdTulip, 'value: ', totalValueTulip)
console.log('Total: ', priceTotal)


/*there are many possible and correct variable names 
let rosePrice = 8; 
let lilyPrice = 10; 
let tulipPrice = 2; 
let numberOfRoses = 70; 
let numberOfLilies = 50; 
let numberOfTulips = 120; 
let rosesValue = rosePrice * numberOfRoses; 
let liliesValue = lilyPrice * numberOfLilies; 
let tulipsValue = tulipPrice * numberOfTulips; 
let total = rosesValue + liliesValue + tulipsValue;

console.log("Rose – unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);

console.log("Lily – unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);

console.log("Tulip – unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);

console.log("Total: ", total);*/