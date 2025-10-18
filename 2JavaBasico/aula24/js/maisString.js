
//strings são indexidas de 0 a *.
let umaString = 'One \'text\'';
console.log(umaString);
console.log(umaString[3]);//indice da letra da string

console.log(umaString.charAt(5));//indice da letra também
console.log(umaString.concat(` em um lugar`));//concatenação das strings
console.log(`${umaString} em um lugar`);

console.log(umaString.indexOf('text'));//para encontrar em qual indice está a letra/palavra
console.log(umaString.indexOf('x' , 3));//procura uma string a partir de um indice "x" 
console.log(umaString.lastIndexOf('n', 3));//procura uma string atrás do indice "x"
