    /* Implemente a função ao lado que recebe uma string como parâmetro e retorna um array contendo as letras repetidas na string passada

Obs:

Se não tiver repetição, retorne o array “[]”

Caso mais de uma letra esteja repetida na string, ordene o array de retorno na ordem que as letras aparecem na string originial

Serão passadas strings com no máximo 2 repetições de cada letra, ou seja, não se preocupe com palavras como “carreira”, onde o “r” aparece 3 vezes

Exemplo: se for passado “ovo”, a função deve retornar “[o]”

Exemplo: se for passado “passagem”, a função deve retornar “[s,a]”

Exemplo: se for passado “uva”, a função deve retornar “[]” */
function letrasRepetidas(string) {
	let letras = [];
	let acumuladoQuantidade = [];
	
	for (let i = 0; i < string.length; i++) {
		let letra = string[i];
		let limite = i;
		let quantidade = 0;

		for (let j = 0; j < limite; j++) {
			if (string[j] === letra) quantidade++;
		}
		acumuladoQuantidade.push(quantidade);
	}

	for (let i = 0; i < acumuladoQuantidade.length; i++) {
		if (acumuladoQuantidade[i] === 1) letras.push(string[i]);
	}

	return letras;
}