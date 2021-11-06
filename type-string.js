const texto1 = "Olá mundo";
const texto2 = 'Olá mundo';

const citacao = "O Leo disse:'oi'";

console.log(texto1.length);

console.log(texto2);

console.log(citacao);

//concatenacao (+)

console.log(texto1+ " "+texto2)

//template string ou 
//template literal

const qtd = 12;
const texto = "Carrinho (" + qtd + ")";
console.log(texto);

const produto = { id : 1, nome : 'Grampo', preco : 34.6 }

const descricao = `${produto.nome} por apenas R$ ${produto.preco}`

console.log(descricao) // Grampo por apenas R$ 34.6

//Transformação/conversão do código Unicode em caractere utilizando o console.log()
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

/*
 OBS => Os caracteres \u no início do código são caracteres de escape que usamos para sinalizar 
ao JavaScript de que estamos falando de códigos Unicode, e não de strings de texto usuais.


O JavaScript usa, por padrão, o UTF-16. O número 16 está relacionado aos espaços em bits ocupados por cada caractere, 
16 neste caso. Não vamos nos aprofundar na relação entre tipos de dados e espaço de memória ocupado por cada tipo - você 
pode pesquisar mais sobre o assunto, assim como sobre o que são caracteres de escape! - mas por enquanto é bacana vermos na
 prática como o Unicode funciona.

 Bancos de dados podem aceitar outros tipos de codificação de caracteres, o que faz sentido se pensarmos que o UTF-16 utiliza 
 uma quantidade relativamente grande de espaço em memória para salvar cada caractere. 16 bits parece pouco, mas algumas vezes 
 os bancos precisam salvar quantidades enormes de dados! Porém, com as tecnologias de armazenamento e tráfego de dados que temos
  hoje, esta já não é uma preocupação tão grande, a não ser em casos muito específicos. Já não é muito comum utilizar uma codificação
   diferente da UTF em bancos mesmo em caso de grandes volumes de dados, mas sempre vai depender muito do caso.
*/