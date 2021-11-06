// declaracao de funcao
// function minhaFuncao(param){
//     //bloco de codigo
// }
// minhaFuncao("param");

//expressao de funcao -> nao tem nome da funcao, eh importante ser const para manter o valor dentro dela

//const soma = function(num1, num2){return num1+num2};
// console.log(soma(1,1));

//diferença princiapl ???
// funcoes e var sao "listadas" no topo do arquivo.

console.log(apresentar());

function apresentar(){
    return "ola";
}
console.log(soma(1,1)) // erro,  a expressao funcao nao foi inicizalidade
const soma = function(num1, num2){return num1+num2}