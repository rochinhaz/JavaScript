class Carros {
    marca;
    cor;
    consumo

    constructor(marca,cor,consumo){
        this.marca = marca;
        this.cor = cor;
        this.consumo = consumo;
    }

    custoCombustivel(distancia,precoCombustivel){
        
        return (distancia/this.consumo)*precoCombustivel;
    }

}

const polo = new Carros('VW','preto',10);
console.log(polo)
console.log(polo.custoCombustivel(100,10));

class Pessoa {
    nome;
    peso;
    altura

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        return this.peso / (this.altura*this.altura);
    }
}

const jose = new Pessoa('Jose',70,1.75);
console.log(jose);
console.log(`Meu nome é ${jose.nome} e o meu IMC é ${jose.calcularIMC()}`)
