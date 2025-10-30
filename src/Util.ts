export class Util {
  public static valorAleatorio(minNumber: number, maxNumber: number) {
    const valorSorteado = minNumber + Math.random() * (maxNumber - minNumber);
    const valorInteiro = Math.round(valorSorteado);
    return valorInteiro;
  }
}