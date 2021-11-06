// boolean
const usuarioLogado = true;
const contaPaga = false;

// truthy ou falsy - nao são booleanos, mas podem se comporta como se fossem.

//0 => false e 1 => true

console.log(0 == false );
console.log("" == false );
console.log(1 == true);

//null
//undefined

let minhaVar;
let varNull= null;

console.log("minhaVar "+minhaVar);
console.log("varNull "+varNull);

let numero = 3 ;
let texto = "Alura";

console.log(typeof minhaVar);
console.log(typeof varNull);

// Null é um objeto 