// arrow function utiliza uma flecha => novidade do S6

function apresentar(nome){
    return `Meu nome é ${nome}`
}

//Arrow function
const apresentarArrow = nome =>`Meu nome é ${nome}` //arrow function classica
const soma = (num1, num2) => num1+num2;

console.log(apresentarArrow("Fernando"));
console.log(soma(2,4));

//Arrow function com + de 1 linha de instrucao

const somaNumerosPequenos = (num1, num2) =>{
    if(num1 || num2 > 10){
        return "Somente números de 1 a 9"
    }
        return num1+num2;
}
// Hoisting : arrow function se comporta como expressao

// arrow function - rapida e curta, vantagens com objetos
// declaracao de funcao - mais explicativa