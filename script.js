//O JavaScript tem uma particularidade, que são três formas de escrever variáveis: var, let e const


//VAR 

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento; // é BOA PRATICA DECLARAR O TIPO DA VARIAVEL

// console.log(area);


//  let -local -  nao existia no começo do js, surgiu a partir de 2015, para resolver os problemas ocasionados pela var

// let forma = 'triangulo';
// let altura=5;
// let comprimento=7;
// let area;

// if(forma === 'retângulo'){
//     area = altura*comprimento;
// }else{
//     area = (altura*comprimento)/2;
// }
// console.log(area);

//const - constante

const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area;

if(forma === 'quadrado'){
    area = altura *comprimento;
}else{
    area = (altura * comprimento)/2;
}
console.log(area);

/*
 E acabamos de ver como conseguimos utilizar tanto a var, que não é muito recomendada de se utilizar,
  hoje em dia, por ela ser muito solta; a let, que nos permite trocar os valores dela, porém, nós sempre
   temos que declarar ela antes de ser utilizada; e a const que é fixa, o valor dela, uma vez declarado, 
   fica preso nela e também tem que ser declarado antes.

      O var, como ele foi criado no começo do JavaScript quando não existia let e const, era a única opção e todo
    mundo só podia usar var, então, pode ser que algumas documentações mais antigas ainda utilizem essa forma.
    
        Hoje em dia, a var não é mais utilizada, justamente, porque ela é muito propensa à bugs, então, hoje em dia
    usamos o let, quando sabemos que o valor da variável vai precisar mudar, vai precisar ser reatribuído;
    para todos os outros casos, vocês podem usar const, sempre.
*/
