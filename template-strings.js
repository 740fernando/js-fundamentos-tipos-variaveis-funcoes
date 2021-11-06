/*
O uso da template literal, que facilita a construção de strings que demandam 
concatenação (a operação em que se junta 2 strings), e foi introduzido no ES6.
*/

const nome = "Fernando";
const idade = 2021-1992;
const cidadeDeNascimento = "São Paulo";

// const apresentacao = "meu nome é "+nome+ ", minha idade é "+ idade + ", minha idade é"+
// cidadeDeNascimento; // complexo

// console.log(apresentacao);

// temaple strings--> string modelo
const apresentacao =`Meu nome é ${nome} minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`; // atencao deve usar acento grave

console.log("Template String ");
console.log(apresentacao);