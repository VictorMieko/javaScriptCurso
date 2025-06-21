/**
 * Operadores Lógicos
 * && -> AND -> E //para retornar verdadeiros, todos as expressões tem que ser verdadeiro
 * || -> OR => OU //retorna verdadeiro se um for true
 * ! -> NOT -> NÃO// inverte os operadores
 */
const expressaoAndPosit = true && true && true && true;
const expressaoAndNegat = true && false && true && true;
console.log(`AND todos positivos: ${expressaoAndPosit}`);
console.log(`AND um negativo: ${expressaoAndNegat}`);//pra retornar verdadeiros, todos tem que ser verdadeiro

const expressaoOrPosit = true || true || true || true;
const expressaoOrNegat = false || false || true || false;
console.log(`OR todos positivos: ${expressaoOrPosit}`);
console.log(`OR um positivo: ${expressaoOrNegat}`);

const usuario = 'Luiz';
const senha = '123456';

const vailogar = usuario === 'Luiz' && senha === '123456';
console.log(`vai logar? ${vailogar}`);

console.log(!true);//nega o true e "transforma" em negativo
console.log(!false);//nega o false e "transforma" em positivo