/*

 Desenvolva um sistema de compra onde o usuario digitará:
    - nome do produto 
    - Quantidade de produto que comprou
    - valor de uma unidade
    - nome do cliente

    Seu programa deverá calcular o total da compra  e imprimir as informações da compra:

    Exemplo de saida
    ###############################

    Nome do cliente: xxxxxx
    Produto: xxxxx
    Valor Unitario: xxxx
    Total da compra: xxxxx
    Imposto cobrado: 20%

    -------------------------------------
    Obrigado e volte sempre.

    var nomeCliente = prompt('digite seu nome');

    Imposto sobre total da compra
    Caucule um imposta de 20% sobre o total da compra

    Formuala = totalCompra + totalCompra * 0.2
*/

const imposto = 0.2;

const campos = [
    'Nome do cliente: ',
    'Produto: ',
    'Valor Unitario: ',
    'Total da compra: ',
]

const mensagens = [
    'digite seu nome',
    'digite o nome do produto', 
    'digite a quantidade',
    'Valor do Produto',
];

for(let i = 0; i < mensagens.length; i++) {

    let dados = prompt(mensagens[i]) 

    // if (i == 3) {
    //     dados = 
    // }

    console.log(`${campos[i]} ${dados}`)


}


var volteSempre = prompt ('Obrigado e volte sempre!')
console.log('Obrigado e volte sempre!')