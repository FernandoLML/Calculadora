const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Formata números com separadores de milhar
function formatarNumero(numero) {
    if (typeof numero === "number") {
        return numero.toLocaleString("pt-BR");
    }
    return numero; // Retorna o valor original se não for um número
}

// Classe principal da calculadora
class Calculadora {
    constructor(interfaceUsuario) {
        this.historico = [];
        this.interfaceUsuario = interfaceUsuario; // Guarda referência à interface do usuário
    }

    adicionarAoHistorico(operacao, resultado) {
        const resultadoFormatado = formatarNumero(resultado);
        this.historico.push({ operacao, resultado: resultadoFormatado });
    }

    exibirHistorico() {
        console.log("\n--- Histórico de operações ---");
        if (this.historico.length === 0) {
            console.log("Nenhuma operação realizada.");
        } else {
            this.historico.forEach((item, index) => {
                console.log(`${index + 1}: ${item.operacao} = ${item.resultado}`);
            });
        }
        this.interfaceUsuario.exibirMenu(); // Volta ao menu sem repetir o título
    }
}

// Funções matemáticas
function Soma(a, b) { return a + b; }
function Subtracao(a, b) { return a - b; }
function Multiplica(a, b) { return a * b; }
function Divide(a, b) { return b === 0 ? "Divisão inválida" : a / b; }
function Fatorial(n) {
    if (n < 0) return "Fatorial não definido para números negativos.";
    let resultado = 1;
    for (let i = 1; i <= n; i++) resultado *= i;
    return resultado;
}
function Potencia(base, expoente) { return Math.pow(base, expoente); }

// Classe para interagir com o usuário
class InterfaceUsuario {
    constructor() {
        this.calculadora = new Calculadora(this); // Passa referência da InterfaceUsuario
        this.exibirMenu();
    }

    exibirMenu() {
        console.log("\n--- Calculadora ---");
        console.log("1. Soma | 2. Subtração | 3. Multiplicação | 4. Divisão | 5. Fatorial | 6. Potência | 7. Exibir histórico | 0. Sair");
        rl.question("Escolha uma opção: ", (opcao) => {
            opcao = parseInt(opcao);
            switch (opcao) {
                case 1: case 2: case 3: case 4:
                    this.executarOperacao(["Soma", "Subtração", "Multiplicação", "Divisão"][opcao - 1], [Soma, Subtracao, Multiplica, Divide][opcao - 1]);
                    break;
                case 5: this.executarFatorial(); break;
                case 6: this.executarPotencia(); break;
                case 7: this.calculadora.exibirHistorico(); break;
                case 0: console.log("Saindo..."); rl.close(); return;
                default: console.log("Opção inválida.");
                    this.exibirMenu();
            }
        });
    }

    executarOperacao(nome, operacao) {
        rl.question(`\nDigite o primeiro número para ${nome}: `, (a) => {
            rl.question(`Digite o segundo número para ${nome}: `, (b) => {
                const resultado = operacao(parseFloat(a), parseFloat(b));
                console.log(`\nResultado de ${nome}: ${formatarNumero(resultado)}`);
                this.calculadora.adicionarAoHistorico(`${nome}(${a}, ${b})`, resultado);
                this.exibirMenu();
            });
        });
    }

    executarFatorial() {
        rl.question("\nDigite um número para calcular o fatorial: ", (n) => {
            const resultado = Fatorial(parseInt(n));
            console.log(`\nFatorial de ${n}: ${formatarNumero(resultado)}`);
            this.calculadora.adicionarAoHistorico(`Fatorial(${n})`, resultado);
            this.exibirMenu();
        });
    }

    executarPotencia() {
        rl.question("\nDigite a base: ", (base) => {
            rl.question("Digite o expoente: ", (expoente) => {
                const resultado = Potencia(parseFloat(base), parseFloat(expoente));
                console.log(`\nResultado de ${base}^${expoente}: ${formatarNumero(resultado)}`);
                this.calculadora.adicionarAoHistorico(`Potência(${base}, ${expoente})`, resultado);
                this.exibirMenu();
            });
        });
    }
}

new InterfaceUsuario();
