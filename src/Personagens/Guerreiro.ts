import { Personagem } from "./Personagem";
import { Util } from "../Util";

export class Guerreiro extends Personagem {
    constructor(nome: string) {
        super(
            nome + " Warrior",
            Util.valorAleatorio(1, 1000),    // força
            0,                               // habilidade_mental
            0,                               // poder_ataque (bom poder de ataque)
            Util.valorAleatorio(0, 50),     // esquiva (esquiva média)
            Util.valorAleatorio(0, 90),     // resistencia (boa resistência)
            Util.valorAleatorio(1, 40000),  // vida_Maxima (mais vida que o normal)
            0                              // vida_Atual (começa com vida máxima)
        );
        this.vidaAtual = this._vidaMaxima;
        this._poderDeAtaque = this._forca * 10;
    }

    private atualizarPoderAtaque(): void {
        this._poderDeAtaque = this._forca * 10;
    }

    public atacar(adversario: Personagem): void {
        console.log(`${this.nome} atacou ${adversario.nome}`);
        this.atacar(adversario);
        adversario.contraAtacar(this);
    }

    public contra_atacar(adversario: Personagem): void {
        console.log(`${this.nome} contra-atacou ${adversario.nome}`);
        this.atacar(adversario);
    }

    public aprimorarHabilidade(): void {
        this._forca *= this._forca * 0.10;
        this.atualizarPoderAtaque();
    }

    public regenVida(): void {
        this.vidaAtual = Math.min(this._vidaMaxima, this.vidaAtual + this._vidaMaxima * 0.1);
    }

}