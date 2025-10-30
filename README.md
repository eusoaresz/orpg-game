# POO20252N

Este projeto é um exemplo de aplicação de Programação Orientada a Objetos (POO) em TypeScript, simulando um sistema de personagens para jogos.

## Objetivo
O projeto demonstra como criar e manipular objetos de personagens, atribuindo atributos como nome, classe, raça, nível, arma, mana e vida.

## Estrutura dos Arquivos
- `Main.ts`: Arquivo principal, responsável por instanciar e configurar um personagem, exibindo seus atributos no console.
- `Personagem.ts`: Define a classe `Personagem` com os atributos e métodos necessários para o funcionamento do sistema.
- `package.json`: Gerencia as dependências do projeto.
- `tsconfig.json`: Configuração do compilador TypeScript.

## Como Executar
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Execute o arquivo principal diretamente com ts-node:
   ```bash
   npx ts-node src/RPG/Main.ts
   ```

## Exemplo de Saída
Ao executar, será exibida uma tabela com os atributos do personagem gerado:

| nome   | classe | raca       | nivel | arma   | manaMaxima | manaAtual | vidaMaxima | vidaAtual | poderAtaque |
|--------|--------|------------|-------|--------|------------|-----------|------------|-----------|-------------|
| Edécio | Monge  | Morto-vivo | 42    | Cajado | 100        | 100       | 100        | 100       | 1           |

## Autor
[<img src="https://github.com/angelogluz.png" width="80" style="border-radius: 50%;" alt="Angelo Luz"/>](https://github.com/angelogluz)
<br>
Angelo Luz

---
Projeto para disciplina de Programação Orientada a Objetos (2025/2)
