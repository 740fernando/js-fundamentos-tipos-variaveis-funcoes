function soma(numero1, numero2 ){
    return numero1 + numero2;
}
function multiplica(numero1=1, numero2=1){
    return numero1 * numero2;
}

console.log(multiplica(soma(4,5), soma(3,3)))