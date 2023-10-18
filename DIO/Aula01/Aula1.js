var vOuF = false;
console.log(typeof(vOuF));

var numero = 1;
console.log(typeof(numero));

var nome = 'jef';
console.log(typeof(nome));

/*3 modos de declarar variaveis:
    var: escopo global e local
    let: escopo local de bloco
    const: escopo local de bloco, somente leitura, valor inicial é obrigatorio e nao pode ser alterado

    escopo global declarada fora de qualquer bloco, visibilidade disponivel em todo o codigo
    escopo local declarada dentro de um bloco, sua visibilidade pode ficar disponivel ou nao
*/

var atribuicao = 0;

var comparacao = '0' == 0;

var comparacaoIdentica = '0' === 0;

/*operaçoes aritmeticas
    + ; - ; * ; % ; / ; **
*/

/*
    O array deve ser declaradao em colchetes e pode guardar qualqquer valor
    let array = ['string', 1 , true, 2, false, ['array1']]

    metodos para manipular array
    forEach() - itera um array
    push() - add item no array
    pop() - remove item no final do array
    shift() - remove item  no inicio do array
    unshift() - add item no inicio do array
    indexOf() - retorna o indice de um valor
    splice() - remove ou substitui um item pelo indice;
    slice() - retorna um parte de um array existente;

    EX: let array = [1,2,3,4,5,6];
        array.pop()
*/

/*
    Objetos:
    ex: var xicara = {cor: 'azul', tamanho: 'p', funcao: tomarCafe()}
        var cor = xicara.cor;
        var tamanho =xicara.tamanho;
        var funcao = tomarCafe();
*/

/* 
FOR:
    for(let i in array) {
        console.log(i):         vai percorrer o array e retornar string do indice
    }

    for (i in object){
        console.log(i):         pode ser feito com objeto tb e não precisa ser declarada tipo de variavel do indice
    }

    for (i of array){
        console.log(i):         vai percorrer o array e retornar o valor dentro das posicoes 
    }

    for (i of object.propriedades) {
        console.log(i)         precisa colocar o tipo de propriedade pra retornar valor, mas ira retornar cada letra em uma linha
    }
*/

/* while verificaçao antes. Do while verificação no final */