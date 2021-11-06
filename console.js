//log é um registro

const minhaVar = true ; 

console.log(245);
console.log("eu sou um texto");
console.log(minhaVar);

//TRATAMENTO DE ERROS

console.error("deu erro ");

const code = 5;
console.error('error #%d', code);

//boa prática utilizar o console.error para ter um feedback da aplicação para saber o que está acontecendo


//time - Para temporizar período que uma operação de código leva para ser iniciada e concluída;
console.time()
console.timeEnd()