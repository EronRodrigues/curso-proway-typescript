import { Pessoa } from "./Pessoa.js";
export class Aluno extends Pessoa {
    constructor(nome, idade, cidade, habilitado, disciplinaAtual, camadaPreferida) {
        super(nome, idade, cidade, habilitado);
        this.disciplinaAtual = disciplinaAtual;
        this.camadaPreferida = camadaPreferida;
    }
}
