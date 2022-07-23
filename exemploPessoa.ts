import { Pessoa } from "./Pessoa.js";

let crianca:Pessoa = new Pessoa("Junin",15,"Blumenau",false)

console.log(crianca);

crianca.apresentar();

console.log(crianca.apresentarCompleto());

$("body").append(
    $("<p>",{text:crianca.apresentarCompleto()})
)

let jovem:Pessoa = new Pessoa("Fulano",25,"Florianópolis",true)
jovem.idade = 22

$("body").append (
    $("<p>",{text:jovem.apresentarCompleto()})
)

let senior:Pessoa = new Pessoa("Zé",50,"Bayeux",false)

$("#pessoa").append (
    $("<button>",{text:senior.apresentarCompleto()})
)

let depois:Pessoa = new Pessoa("Depois do Zé",90,"Souza",true)
$("#pessoa").append(
    $("<span>",{text:" " + depois.nome +" - " + depois.cidade})
)

let god:Pessoa = new Pessoa("Jesus",33,"Belém",false)
$(".item").append(
    $("<h3>",{text:"Olá, meu nome é " + god.nome + ", tenho " + god.idade + " anos de idade, e nasci em " + god.cidade})
)
