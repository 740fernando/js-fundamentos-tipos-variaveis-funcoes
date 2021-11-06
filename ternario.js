/*
 O operador ternário é, basicamente, um if. Ele faz uma comparação, só que 
 ele tem uma maneira especial de ser feita, de ser escrita. Então, ele faz a 
 comparação em uma única linha, temos a comparação e as duas respostas do 
 verdadeiro e do falso, deixando bem mais curto o nosso código. Mas, tem que
  tomar um pouco de cuidado, porque, às vezes, ele pode pregar um kit peça em 
  nós, por ter a escrita reduzida.
*/

const idadeMinima= 18;
const idadeCliente= 19;

validaCliente=idadeCliente >= idadeMinima;
if(idadeCliente >= idadeMinima){
    console.log("cerveja");
}else{
    console.log("suco");
}
console.log(validaCliente);
           //condicao                      //true     //false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco"); // ternario
console.log(validaCliente ? "cerveja" : "suco");// ternario

/*

Boa pratica -> Se for muitas condicoes usar if, se for apenas uma usar ternario

 Como é escrito um operador ternário, com o qual fazemos uma comparação entre
  valores digitando um ?, seguido da possibilidade true, um : e a possibilidade
   false, ou seja, comparação ? true : false
*/
