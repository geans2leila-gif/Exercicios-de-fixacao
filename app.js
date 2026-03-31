//Variaveis constantes
const nome = "João";
var idade = 30;

//com concatenação "+"
console.log("Nome " + nome + " tem " + idade + " anos");

//interpolação de tipos 
console.log(`Nome nome é ${nome} e tenho ${idade} anos`)

//if/else

//AND OR NOT 

//SWITCH CASE

/*1- Carregar o celular 
Analogia:Você so irá carregar o celular se o cabo estiver conectado 
e se o carregador estiver na tomada.*/
// AND
let CaboConectado = true;
let CarregadorNaTomada = true;
if( CaboConectado && CarregadorNaTomada){
    console.log("Carregando o celular");
}else{
    console.log("Não é possível carregar celular");
}

// OR
let caboConectado = false;
let carregadorNaTomada = true;
if( caboConectado || carregadorNaTomada){
    console.log("Carregando o celular2");
}else{
    console.log("Não é possível carregar celular");
}

// NOT
let CaBoconectado = true;
let carregadornaTomada = true;
if( !CaBoconectado || carregadornaTomada){
    console.log("Carregando o celularrrrrrr");
}else{
    console.log("Não é possível carregar celular");
}



/*2- fazer um sanduiche 
Analogia:O sanduiche so será pronto se tiver pão e tiver recheio*/

/*3- Entrar em uma festa
Analogia: Você so poderá entra na festa se for maior de 18 anos e tiver identidade.*/

/*4- Dirigir um carro 
Analogia: Você so poderá dirigir se for habilitado e tiver com o documento em mãos*/

//Equipe 3: Rodrigo Campos, Blenda Kettlen e Gean Carlos