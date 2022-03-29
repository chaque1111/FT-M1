'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  // convertir
  let suma = 0;
  let mult;
  let invert = num.split("").reverse();
  for(let i=0; i<invert.length; i++){
   mult = invert[i] * Math.pow(2,i);
   suma += mult;
  }
 return suma; 
}

function DecimalABinario(num) {
  // tu codigo aca
  
let binario = [];
do{
  binario.unshift(num%2); // para ahorrarse el invertit el arreglo agrego los numeros siguientes al principio del array con unshift
  num=Math.floor(num/2)
}while(num!==0)
return binario.join(""); //se convierte el array en string 
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}