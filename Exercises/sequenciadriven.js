function sequenciaDriven(number){
    let sequencia = [0,1,2];
    let soma = 3;
    let i = 3;
  while(soma < number){
    sequencia.push(soma);
    soma = sequencia[i] + sequencia[i-1] + sequencia[i-2];
    i++;
  };
  return sequencia;
  };
/*Sequência Driven
Implemente a função ao lado que recebe um valor inteiro number como parâmetro e retorna uma array que contém 
todos os termos da Sequência Driven que são menores ou iguais ao valor passado em number.A sequência Driven, 
é uma lista de números que sempre começa com 0, 1 e 2 e vai sendo construída através da regra: o próximo número
 da sequência é a soma dos três últimos números da sequência. Então depois do 0, 1 e 2 o próximo número é a 
 soma desses valores, no caso, 3 , pois 0+1+2=3. Com essa lógica os 8 primeiros números da Sequência da Driven 
 são:
E o próximo número, seria o resultado da soma entre 11, 20 e 37, ou seja, 68.
Exemplo:
Se number = 18 a função deve retornar a lista [0, 1, 2, 3, 6, 11]
Se number = 3 a função deve retornar a lista [0, 1, 2, 3]
Se number = 45 a função deve retornar a lista [0, 1, 2, 3, 6, 11, 20, 37]
Se number = 37 a função deve retornar a lista [0, 1, 2, 3, 6, 11, 20, 37]
Se number = 70 a função deve retornar a lista [0, 1, 2, 3, 6, 11, 20, 37, 68]
Observação:
number sempre é maior que 2. */