import { Pessoa } from "./Pessoa.js";

export class Aluno extends Pessoa {

    disciplinaAtual:string
    camadaPreferida:string

    constructor(nome:string,
        idade:number,
        cidade:string,
        habilitado:boolean,
        disciplinaAtual:string,
        camadaPreferida:string) {
        super(nome, idade, cidade, habilitado)
        this.disciplinaAtual = disciplinaAtual
        this.camadaPreferida = camadaPreferida
    }
}