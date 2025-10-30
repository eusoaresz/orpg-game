import { Personagem } from "./Personagem";
import { Util } from "../Util";

export class Guerreiro extends Personagem {
    constructor(nome: string) {
        super(
            nome + " Warrior",
            Util.valorAleatorio(1, 1000),    // força
            0,     // habilidade_mental
            this.poder_ataque,     // poder_ataque (bom poder de ataque)
            Util.valorAleatorio(40, 60),     // esquiva (esquiva média)
            Util.valorAleatorio(70, 90),     // resistencia (boa resistência)
            150,                             // vida_Maxima (mais vida que o normal)
            150                              // vida_Atual (começa com vida máxima)
        );
    }

    // Métodos para acessar os atributos
    getForca(): number {
        return this.forca;
    }

    getHabilidadeMental(): number {
        return this.habilidade_mental;
    }

    getPoderAtaque(): number {
        return this.poder_ataque;
    }

    getEsquiva(): number {
        return this.esquiva;
    }

    getResistencia(): number {
        return this.resistencia;
    }

    getVidaMaxima(): number {
        return this.vida_Maxima;
    }

    getVidaAtual(): number {
        return this.vida_Atual;
    }

    // Método para ataque especial do Guerreiro
    ataquePoderoso(): number {
        const danoBase = this.poder_ataque + (this.forca * 0.5);
        return Math.floor(danoBase * 1.5); // 50% de dano adicional
    }

    // Método para defesa especial do Guerreiro
    defesaFerrea(): void {
        this.resistencia += 20; // Aumenta temporariamente a resistência
        setTimeout(() => {
            this.resistencia -= 20; // Remove o bônus após 3 segundos
        }, 3000);
    }
}