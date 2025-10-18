const nome = 'pickpocketi';//string indexiçado por indice

//arrays indexiçados por elementos
const alunos = ['Tarcio', ' Mario', ' Micaguei', ' Kaio'];//array de string
console.log(`Super Gays: ${alunos}`);
console.log(`Super Gay: ${alunos[3]}`);

alunos[0] = 'Isaque';//altera
console.log(alunos);

alunos.push('Pedro');//adiciona elementos ao final sozinho
console.log(alunos);

 alunos.unshift('Gabi');//adiciona elementos ao inicio sozinho
 console.log(alunos);

const Cachaceira = alunos.shift();//remove o elemento da frente
 console.log(alunos);
 console.log(`Cachaceira: ${Cachaceira}`);

 const removido = alunos.pop();//remove o elemento final
 console.log(alunos);
 console.log(`Rei dos Gays: ${removido}`);

 delete alunos[2];//remove somente o elemento, deixando o indice vazio
 console.log(alunos);
 console.log(alunos[2]);//undifined

 alunos.push('micaguei');
 console.log(alunos.slice(0, 3));
 console.log(alunos.slice(0, -1));

 console.log(typeof alunos);//retorna como objeto
 console.log(alunos instanceof Array);//retorna se é array ou não