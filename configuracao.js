import { Config } from "./Config.js";
let nome = "Rubem Oliota";
console.log("typescript está funcionando");
let configuracaoErrada = new Config();
console.group("Configuração Errada");
console.log("Verificando a configuração errada", configuracaoErrada);
configuracaoErrada.verificarNodeInstalado();
configuracaoErrada.verificarVsCodeInstalado();
configuracaoErrada.verificarConfiguracaoInicial();
console.groupEnd;
console.group("Configuração Metade");
let configuracaoMetade = new Config();
configuracaoMetade.temNodejs = true;
configuracaoMetade.temVsCode = false;
console.log("Verificando a configuração metade", configuracaoMetade);
configuracaoMetade.verificarNodeInstalado();
configuracaoMetade.verificarVsCodeInstalado();
configuracaoMetade.verificarConfiguracaoInicial();
console.groupEnd;
console.group("Configuração Completa");
let configuracaoCompleta = new Config();
configuracaoCompleta.temNodejs = true;
configuracaoCompleta.temVsCode = true;
configuracaoCompleta.comandoTypeScript = "npm i -g typescript";
configuracaoCompleta.comandoInitTypescript = "tsc --init";
configuracaoCompleta.tsConfig = {
    "compilerOptions": {
        "target": "es2015",
        "module": "es2015",
        "moduleResolution": "node",
    }
};
configuracaoCompleta.comandoMonitoramentoTs = "tsc -w";
console.log("Verificando a configuração completa", configuracaoCompleta);
configuracaoCompleta.verificarConfiguracaoInicial();
console.groupEnd;
$("body").append($("<p>", { text: "Criando esse parágrafo com Jquery." }));
