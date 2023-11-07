class Carros{
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularGastoViagem(distancia, precoCombustivel){
        return distancia * this.gastoMedio * precoCombustivel;
    }

}

const sandero = new Carros('Renault', 'vermelho', 1/15);
const uno = new Carros('Fiat', 'verde limão', 1/10);

console.log(uno.calcularGastoViagem(70, 5));