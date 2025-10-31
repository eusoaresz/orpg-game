import { Personagem } from "./Personagem";
import { Util } from "../Util";

export class Padre extends Personagem {
    constructor(nome: string) {
        super(
            nome + " Priest",
            0,
            0,
            0,
            0,
            0,
            Util.valorAleatorio(1, 8000),
            0
        );
        this.vidaAtual = this._vidaMaxima;
    }

    public atacar(adversario: Personagem): void {
        console.log(`${this.nome} não pode converter ${adversario.nome}.`);
        this.atacar(adversario);
        adversario.contraAtacar(this);
    }

    public contraAtacar(adversario: Personagem): void {
        console.log(`${this.nome} tentou converter ${adversario.nome}.`);
    }

    public aprimorarHabilidadePrincipal(): void {
        throw new Error("O Padre não pode usar essa habilidade");
    }
    

    public regenerarVida(): void {
        this.vidaAtual = Math.min(this._vidaMaxima, this.vidaAtual + this._vidaMaxima * 0.1);
    }

    public _ataque(adversario: Personagem): void {
        const acertou = Util.valorAleatorio(0, 100) < 40;
        if (acertou) {
            adversario.vidaAtual = 0;
            throw new Error(`${adversario.nome} foi convertido.`);
        }
    }
}