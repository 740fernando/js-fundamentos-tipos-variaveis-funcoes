//tipo de dado
// booleanos

// conversão implícita
const numero = 456;
const numeroString= "456";

console.log(numero == numeroString);

console.log(numero+numeroString);

//conversão explícita

//Number() - transforma string em um numero
//String() - transforma numero em uma string

console.log(numero+Number(numeroString));
console.log(String(numero)+numeroString);

//toString()
let telefone = 12341234;
console.log( "O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings
let telefone = 12341234;
console.log("O telefone é " + telefone.toString()); // O .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

//Number()

// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log( Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da da multiplicação


// Podemos usar o operador de soma + para fazer a conversão de textos para números,
// colocando-os antes das variáveis:

let largura = "10";
let altura = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis


let meuNome = "Fernando";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN

let usuarioConectado= false;
console.log (Number( usuarioConectado ) ); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado= true;
console.log (Number( usuarioConectado ) ); // agora teremos a conversão de true (verdadeiro) para o número 1.

/*
Dica de boas práticas: Apesar do JavaScript fazer a maioria das conversões de forma correta,
 problemas podem aparecer, então é sempre bom fazer as conversões de forma explícita. Não é 
 comum usar o operador de soma para fazer a conversão para números, mas este uso é possível. 
 Conversões de booleanos não costumam ser muito usados, mas são possíveis.
*/