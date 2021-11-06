// comparacao implicita 

const numero = 5;
const texto = "5";

//== compara apenas o valor
console.log(numero==texto);//exibira verdadeiro

//=== compara valor e tipo
console.log(numero===texto);// exibirá falso


//typeof - mostra o tipo de dado na variavel

console.log(typeof numero);
console.log(typeof texto);

//  (comparacao explicita)
Number();
String();