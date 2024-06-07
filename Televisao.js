"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Televisao {
    constructor() {
        this.canal = 1;
        this.volume = 10;
        this.ligada = false;
    }
    ligar() {
        this.ligada = true;
        this.exibirStatus();
    }
    desligar() {
        this.ligada = false;
        this.exibirStatus();
    }
    mudarCanal(novoCanal) {
        if (this.ligada) {
            if (novoCanal > 0 && novoCanal <= 999) {
                this.canal = novoCanal;
            }
            else {
                console.log("Canal inválido. Escolha um canal entre 1 e 999.");
            }
            this.exibirStatus();
        }
        else {
            console.log("A TV está desligada.");
        }
    }
    aumentarVolume() {
        if (this.ligada) {
            if (this.volume < 100) {
                this.volume++;
            }
            else {
                console.log("Volume máximo atingido.");
            }
            this.exibirStatus();
        }
        else {
            console.log("A TV está desligada.");
        }
    }
    diminuirVolume() {
        if (this.ligada) {
            if (this.volume > 0) {
                this.volume--;
            }
            else {
                console.log("Volume mínimo atingido.");
            }
            this.exibirStatus();
        }
        else {
            console.log("A TV está desligada.");
        }
    }
    exibirStatus() {
        if (this.ligada) {
            console.log(`TV Ligada | Canal: ${this.canal} | Volume: ${this.volume}`);
        }
        else {
            console.log("TV Desligada");
        }
    }
    isLigada() {
        return this.ligada;
    }
}
exports.default = Televisao;
