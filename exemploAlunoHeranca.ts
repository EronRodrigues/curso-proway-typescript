import { Aluno } from "./Aluno.js";

let aluno1: Aluno = new Aluno("Lourenço",30,"Blumenau",true,"typescript","front")

let alunos: Array<Aluno> = new Array()

let chaveLocalStorage:string = "listaAlunos"

if(localStorage.getItem(chaveLocalStorage)) {
    let listaRecuperada = JSON.parse(localStorage.getItem(chaveLocalStorage))
    console.log(listaRecuperada);
    console.log(alunos);
    alunos = listaRecuperada
    desenharTabela()
}

$("#add").on("click",function() {
    let nome:string = String(prompt("Informe o seu nome."))
    let idade:number = Number(prompt("Informe a sua idade."))
    let cidade:string = String(prompt("Informe a sua cidade."))
    let habilitado:boolean = prompt("Habilitado?").toLocaleLowerCase()=="sim"?true:false
    let disciplinaAtual:string = String(prompt("Informe a sua disciplina atual."))
    let camadaPreferida:string = String(prompt("Informe oa sua camada preferida."))

    let novo: Aluno = new Aluno (nome, idade, cidade, habilitado, disciplinaAtual, camadaPreferida)

    console.log("Aluno novo ok", novo);
    alunos.push(novo)
    localStorage.setItem(chaveLocalStorage,JSON.stringify(alunos))

    console.log("Lista de Alunos:", alunos);
    desenharTabela();
})

function desenharTabela() {
    $("tbody").empty()

    alunos.forEach(aluno => {
        escreverLinha(aluno)
    })
}

function escreverLinha(aluno: Aluno) {
    $("tbody").append(
        $("<tr>").append(
            $("<td>", { text: aluno.nome }),
            $("<td>", { text: aluno.idade }),
            $("<td>", { text: aluno.cidade }),
            $("<td>", { text: (aluno.habilitado?"Sim":"Não") }),
            $("<td>", { text: aluno.disciplinaAtual }),
            $("<td>", { text: aluno.camadaPreferida })
        )
    )
}

$("#limpar").on("click",function() {
    alunos = new Array()
    desenharTabela()
})

$("#apagar").on("click",function() {
    localStorage.removeItem(chaveLocalStorage)
})