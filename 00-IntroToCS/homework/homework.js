'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  // convertir
 let suma = 0;
 
 let array= num.split("").reverse();
 for(let i=0; i<array.length; i++){
   suma += array[i] * Math.pow(2,i);
 }
 return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
  let bin = [];
  do{
     bin.unshift(num%2);
     num = Math.floor(num/2)
  }while(num>0)
return bin.join("")

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}