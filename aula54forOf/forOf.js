const nomes = ['luiz', 'otavio', 'henrique'];

for (let i in nomes){
    console.log(nomes[i]);//retorna o valor do indice
}

console.log('#####1');
//ele retorna o valor do indice e não o indice igual aos outros "For"
for (let valor of nomes) {
    console.log(valor);
}

console.log('#####2');
//para Arrays
nomes.forEach(element => {
    console.log(element);
});

nomes.forEach(function(valor, indice){
    console.log(valor, indice);
});
