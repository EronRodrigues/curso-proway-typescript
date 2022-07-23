export class Pessoa {
    constructor(nome, idade, cidade, habilitado) {
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.habilitado = habilitado;
    }
    apresentar() {
        console.log(`Oi, meu nome é ${this.nome}`);
    }
    apresentarCompleto() {
        return "Oi, meu nome é " + this.nome + ", tenho " + this.idade + " anos, moro em " + this.cidade + " e" + (this.habilitado ? "sou habilitado." : " não sou habilitado.");
    }
}
