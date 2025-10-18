// import + o nome + o caminho dele
// as variaveis de mesmo nome vão conflitar
// é possivel mudar o nome da variável na importação para corrigir esse erro
// import { nome as nome2, sobrenome, soma, idade, Pessoa } from './modulo1'; // Aparentemente não precisa estar na mesma ordem
// import * as MeuModulo from './modulo1'; // importa tudo como MeuModulo
// import qualquerNome from './modulo1'; // importa o default
import nomeQueEuQuiser, { nome as nome2, sobrenome, idade, Pessoa } from './modulo1'; // importa o default e o resto
const nome = 'jorge';

console.log(nome2, sobrenome, idade, nome);
console.log(nomeQueEuQuiser(2, 2));

const p1 = new Pessoa('helena', 'masafera');
console.log(p1);
