import prompt from "prompt-sync";

class Personagem {
    constructor(
        protected nome: string,
        protected forca: number,
        protected habilidade_mental: number,
        protected poder_ataque: number,
        protected esquiva: number,
        protected resistencia: number,
        protected vida_Maxima: number,
        protected vida_Atual: number
    ) {}
}
console.log(Personagem)