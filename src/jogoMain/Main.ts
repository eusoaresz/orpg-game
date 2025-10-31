import { Personagem } from "../Personagens/Personagem";
import { Util } from "../Util";
import { Guerreiro } from "../Personagens/Guerreiro";
import { Padre } from "../Personagens/Padre";
import promptSync = require("prompt-sync");

const teclado = promptSync();

let personagens: Personagem[] = [];
personagens.push(new Guerreiro("Edécio"));
personagens.push(new Padre("Frei Gilberto"));
personagens.push(new Guerreiro("Gladimir"));
personagens.push(new Padre("Irmão Josias"));

while (true) {
    console.log(`===== Personagens vivos (${personagens.length}) =====`);
    personagens.forEach((personagem) => console.log(personagem.resumo()));
    if (personagens.length === 1) {
      break;
    }
    console.log("=============================\n");
  
    teclado("Tecle ENTER para rodar o próximo round\n");
    try {
      const atacantePosicao = Util.valorAleatorio(0, personagens.length - 1);
      const atacadoPosicao = Util.valorAleatorio(0, personagens.length - 1);
      if (atacantePosicao != atacadoPosicao) {
        const atacante = personagens[atacantePosicao];
        const atacado = personagens[atacadoPosicao];

        if(!atacante || !atacado) {
          personagens = personagens.filter((personagem) => personagem.vidaAtual > 0);
          continue;
        }
        atacante.atacar(atacado);
        console.log(atacante.resumo());
        console.log(atacado.resumo());
        console.log("\n");
        console.log(".".repeat(20));
      }
    } catch (e) {
      personagens = personagens.filter((personagem) => personagem.vidaAtual > 0);
      console.log((e as any).message);
    }
  }
  if (personagens.length > 0) {
    const vencedor = personagens[0];
    if (vencedor) {
      console.log(`\nO vencedor foi \x1b[31m ${vencedor.nome}\x1b[0m`);
    }
    else {
      console.log("Não houve vencedor.");
    }
  }
  