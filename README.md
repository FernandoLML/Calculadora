# Calculadora

**Equipe: Bruno Franzosi e Fernando Lucas Moraes da Luz.**

## Dependências 
Para rodar o arquivo é necessário ter o Node.js instalado.

Link para instalação do Node.js: https://nodejs.org/pt

Após a instalação no terminal do VsCode, dê node -v para que ele retorne a versão.

Para rodar "node nome do arquivo" Exemplo: node calculadora.js


## Requisitos

### Requisitos Funcionais

1. **RF01**: O sistema deve permitir realizar a operação de **adição** entre dois valores numéricos.
2. **RF02**: O sistema deve permitir realizar a operação de **subtração** entre dois valores numéricos.
3. **RF03**: O sistema deve permitir realizar a operação de **divisão** entre dois valores numéricos.
4. **RF04**: O sistema deve permitir realizar a operação de **multiplicação** entre dois valores numéricos.
5. **RF05**: O sistema deve permitir calcular o **fatorial** de um número inteiro positivo fornecido pelo usuário.
6. **RF06**: O sistema deve permitir realizar a operação de **potenciação**, utilizando um valor base e um expoente fornecidos pelo usuário.
7. **RF07**: O sistema deve emitir uma **mensagem de erro** clara sempre que o usuário tentar executar uma **operação inválida** (ex: divisão por zero, fatorial de número negativo, entrada não numérica etc.).
8. O sistema deve **exibir o resultado da operação** imediatamente após a execução.


### Requisitos Não Funcionais

1. **RNF01**: O sistema deve apresentar **resposta ao usuário em menos de 1 segundo** após a entrada da operação.
2. **RNF02**: O sistema deve ser **desenvolvido em JavaScript**, executado via ambiente Node.js no terminal.
3. **RNF03**: O sistema deve **formatar automaticamente os números** exibidos, utilizando **ponto como separador de milhar** (ex: `1.000.000`).
4. **RNF04**O sistema deve esperar a ação do usuário, após realizar alguma operação para mostrar o menu novamente.

---

## Plano de Testes

| Código  | Descrição                                                                 | Operação     | Resultado Esperado                          | Requisito Relacionado |
|---------|---------------------------------------------------------------------------|--------------|---------------------------------------------|------------------------|
| CT-01   | Verifica se a operação de soma está sendo realizada corretamente.         | Soma 5 + 10   | O resultado deve ser **15**.                 | RF01                  |
| CT-02   | Verifica se a operação de subtração está sendo realizada corretamente.    | Subtração 25 - 5 | O resultado deve ser **20**.             | RF02                  |
| CT-03   | Verifica se a multiplicação retorna o valor correto.                      | Multiplicação 25 × 10 | O resultado deve ser **250**.        | RF04                  |
| CT-04   | Verifica se a divisão está sendo realizada corretamente.                  | Divisão 15 ÷ 5 | O resultado deve ser **3**.              | RF03                  |
| CT-05   | Verifica se a divisão por zero retorna uma mensagem de erro.              | Divisão 15 ÷ 0 | Deve retornar mensagem de **operação inválida**. | RF07          |
| CT-06   | Verifica se o cálculo de fatorial retorna o valor correto.                | Fatorial 6!   | O resultado deve ser **720**.                | RF05                  |
| CT-07   | Verifica se o cálculo de fatorial com número negativo retorna erro.       | Fatorial -6!  | Deve retornar mensagem de **operação inválida**. | RF05          |
| CT-08   | Verifica se a potência com expoente zero retorna o valor correto.         | Potência 4^0  | O resultado deve ser **1**.                  | RF06                  |

