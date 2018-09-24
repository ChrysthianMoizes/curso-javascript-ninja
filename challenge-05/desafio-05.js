/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var myArray = [1, 2, 3, 4 , 5];
console.log(myArray);

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function returnArray(array) {
	return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(returnArray(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function returnIndexArray(array, index) {
	return array[index];
}


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var myArray = [1, 'chrysthian', 'moizes', true, null];


/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(returnIndexArray(myArray, 0));
console.log(returnIndexArray(myArray, 1));
console.log(returnIndexArray(myArray, 2));
console.log(returnIndexArray(myArray, 3));
console.log(returnIndexArray(myArray, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book( bookName ) {
	var allBooks = {

		'A volta dos que não foram': {
			quantidadePaginas: 100,
			autor: 'Machado de Assis',
			editora: 'Vida'
		},

		'Poeira em alto mar': {
			quantidadePaginas: 150,
			autor: 'Cecília Meirelles',
			editora: 'Abril'	
		},

		'As tranças do Rei Careca': {
			quantidadePaginas: 200,
			autor: 'Carlos Drumond de Andrade',
			editora: 'Moderna'
		}
	};

	return !bookName ? allBooks : allBooks[ bookName ];

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log('O livro Poeira em alto mar tem ' + book('Poeira em alto mar').quantidadePaginas + ' páginas!');  

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log('O autor do livro As tranças do Rei Careca é ' + book('As tranças do Rei Careca').autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log('O livro A volta dos que não foram foi publicado pela editora ' + book('A volta dos que não foram').editora + '.');

