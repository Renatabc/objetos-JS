class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    dizerIMC(){
        return this.peso / (this.altura * this.altura);
    }

    classificarIMC(){
        const imc = this.dizerIMC();

        if(imc < 18.5){
            console.log('Abaixo do peso');
        } else if(imc >= 18.5 && imc < 25){
            console.log('Peso normal');
        } else if(imc >= 25 && imc < 30){
            console.log('Acima do peso');
        } else if(imc >= 30 && imc < 40){
            console.log('Obeso');
        } else {
            console.log('Obesidade grave');
        }
    }
}

const jose = new Pessoa('Jose', 70, 1.75);

jose.classificarIMC();