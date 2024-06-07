class Televisao {
    protected canal: number;
    protected volume: number;
    protected ligada: boolean;
  
    constructor() {
      this.canal = 1;
      this.volume = 10;
      this.ligada = false;
    }
  
    public ligar(): void {
      this.ligada = true;
      this.exibirStatus();
    }
  
    public desligar(): void {
      this.ligada = false;
      this.exibirStatus();
    }
  
    public mudarCanal(novoCanal: number): void {
      if (this.ligada) {
        if (novoCanal > 0 && novoCanal <= 999) {
          this.canal = novoCanal;
        } else {
          console.log("Canal inválido. Escolha um canal entre 1 e 999.");
        }
        this.exibirStatus();
      } else {
        console.log("A TV está desligada.");
      }
    }
  
    public aumentarVolume(): void {
      if (this.ligada) {
        if (this.volume < 100) {
          this.volume++;
        } else {
          console.log("Volume máximo atingido.");
        }
        this.exibirStatus();
      } else {
        console.log("A TV está desligada.");
      }
    }
  
    public diminuirVolume(): void {
      if (this.ligada) {
        if (this.volume > 0) {
          this.volume--;
        } else {
          console.log("Volume mínimo atingido.");
        }
        this.exibirStatus();
      } else {
        console.log("A TV está desligada.");
      }
    }
  
    protected exibirStatus(): void {
      if (this.ligada) {
        console.log(`TV Ligada | Canal: ${this.canal} | Volume: ${this.volume}`);
      } else {
        console.log("TV Desligada");
      }
    }
  
    public isLigada(): boolean {
      return this.ligada;
    }
  }
  
  export default Televisao;
  