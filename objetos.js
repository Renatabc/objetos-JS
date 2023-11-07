/*exemplo de objeto*/
/*const renata = {
    nome: 'Renata Brito',
    idade: 28
}

renata.altura = 172;

console.log(renata);*/



/*const renata = {
    nome: 'Renata Brito',
    idade: 28,
    descrever: function(){
        console.log('Meu nome é ' + this.nome + ' e minha altura é ' + this.altura);
    }
}

renata.altura = 172;
delete renata.idade;

renata.descrever();*/

//como fazer instâncias
/*class Pessoa{
    nome;
    idade;

    descrever(){
        console.log('Meu nome é ' + this.nome + ' e minha idade é ' + this.idade);
    }
}

const renata = new Pessoa();
renata.nome = 'Renata Brito';
renata.idade = 28;

const orlando = new Pessoa();
orlando.nome = 'Orlando Terceiro';
orlando.idade = 26;

renata.descrever();
orlando.descrever();*/

//exemplo com constructor, que vai mostrar o que acontece quando a pessoa é instanciada
class Pessoa{
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2023 -idade;
    }

    descrever(){
        console.log('Meu nome é ' + this.nome + ', minha idade é ' + this.idade + ' e nasci no ano de ' + this.anoNascimento);
    }
}

const renata = new Pessoa('Renata', 28);
const orlando = new Pessoa('Orlando', 26);


renata.descrever();
orlando.descrever();