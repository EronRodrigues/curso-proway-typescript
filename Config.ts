export class Config {

//atributos
    temNodejs:boolean
    temVsCode:boolean
    comandoTypeScript:string
    comandoInitTypescript:string
    tsConfig:any
    comandoMonitoramentoTs:string

//construtor

    constructor() {
    //vazio pois não quero aproveitar esse momento para inicializar meus atributos quando crio um objeto
    }

//metodos
    
    verificarNodeInstalado(){
        if (this.temNodejs) {
            console.log("%cNodeJs está instalado.","color:green");            
        } else {
            console.warn("É importante instalar o NodeJs.")
        }
    }

    verificarVsCodeInstalado() {
        if (this.temVsCode) {
            console.log("%cVsCode está instalado.","color:blue");
        } else {
            console.error("É importante instalar o VsCode.");
            
        }
    }

    verificarConfiguracaoInicial() {
        this.verificarNodeInstalado()
        this.verificarVsCodeInstalado()
        console.log("Execute no terminal:", this.comandoTypeScript);
        console.log("Execute no terminal:", this.comandoInitTypescript);
        console.log("Substitua o texto do arquivo tsconfig.json:", this.tsConfig);
        console.log("Ative o moniteramento executado no terminal:", this.comandoMonitoramentoTs)
    }

}