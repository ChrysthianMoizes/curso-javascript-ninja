/*
Envolva todo o código desse desafio em uma IIFE.
Crie um arquivo chamado index.html e adicione esse script ao HTML.
*/
(function(){


/*
Crie uma função construtora chamada "Person". Esse construtor deve ter
as seguintes características:
- Deve receber 3 parâmetros: `name`, `lastName` e `age`;
- Deverá ter 3 propriedades:
  - `name` - que receberá o valor do parâmetro `name`;
  - `lastName` - que receberá o valor do parâmetro `lastName`;
  - `age` - que receberá o valor do parâmetro `age`;
- Deverá ter 3 métodos:
  - `getFullName` - que deve retornar o nome completo do objeto criado,
  no formato:
    - "[NAME] [LASTNAME]"
  - `getAge` - que deverá retornar a idade (age);
  - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
  iremos passar um único argumento, que é a quantidade de anos que devem ser
  adicionados à idade original (age). Esse método deverá retornar o objeto
  que será instanciado.
*/

function Constructor(name, lastname, age){
  this.name = name;
  this.lastname = lastname;
  this.age = age;
  this.getFullName = function getFullName(){
      return this.name + ' ' + this.lastname;
  }
  this.getAge = function getAge(){
    return this.age;
  }
  this.addAge = function addAge(){
    this.age += arguments[0];
    return this;
  }
}

var obj = new Constructor('Davy','Lima',22);
console.log(new Constructor('Davy','Lima',12).addAge(1));

/*
Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
parâmetros corretamente para o construtor para criar as novas pessoas.
Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
*/
var davy = new Constructor('Davy','Lima',22);
var chrys = new Constructor('Chrysthian','Moizes',21);
var teste = new Constructor('Teste','Avlso',22);
console.log( 'Novas pessoas criadas à partir de Person:' );
console.log(davy);
console.log(chrys);
console.log(teste);

/*
Mostre no console o nome completo de cada pessoa.
*/
console.log( '\nNomes das pessoas:' );
console.log(davy.getFullName());
console.log(chrys.getFullName());
console.log(teste.getFullName());

/*
Mostre no console as idades de cada pessoa, com a frase:
- "[NOME COMPLETO] tem [IDADE] anos."
*/
console.log( '\nIdade das pessoas:' );
console.log(davy.getFullName()+' tem '+davy.getAge()+' anos.');
console.log(chrys.getFullName()+' tem '+chrys.getAge()+' anos.');
console.log(teste.getFullName()+' tem '+teste.getAge()+' anos.');

/*
Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
cada um. A frase deverá ser no formato:
- "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
*/
console.log( '\nNova idade das pessoas:' );
davy.addAge(4);
chrys.addAge(4);
teste.addAge(10);
console.log(davy.getFullName()+' agora tem '+davy.getAge()+' anos.');
console.log(chrys.getFullName()+' agora tem '+chrys.getAge()+' anos.');
console.log(teste.getFullName()+' agora tem '+teste.getAge()+' anos.');
})();