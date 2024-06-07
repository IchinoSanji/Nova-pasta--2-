"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Televisao_1 = __importDefault(require("./Televisao"));
const prompt = require('prompt-sync')();
class SmartTelevisao extends Televisao_1.default {
    constructor() {
        super();
        this.aplicativos = ["Netflix", "Amazon Prime", "HBO Max", "YouTube"];
        this.aplicativoAtual = null;
    }
    acessarAplicativo(numero) {
        if (this.ligada) {
            if (numero > 0 && numero <= this.aplicativos.length) {
                const aplicativoSelecionado = this.aplicativos[numero - 1];
                if (aplicativoSelecionado === 'Netflix') {
                    this.exibirSeriesNetflix();
                }
                else if (aplicativoSelecionado === 'Amazon Prime') {
                    this.exibirSeriesAmazonPrime();
                }
                else if (aplicativoSelecionado === 'HBO Max') {
                    this.exibirSeriesHBOMax();
                }
                else if (aplicativoSelecionado === 'YouTube') {
                    this.acessarYouTube();
                }
                else {
                    this.aplicativoAtual = aplicativoSelecionado;
                    this.exibirStatus();
                }
            }
            else {
                console.log("Número de aplicativo inválido.");
            }
        }
        else {
            console.log("A TV está desligada.");
        }
    }
    exibirStatus() {
        super.exibirStatus();
        if (this.ligada && this.aplicativoAtual) {
            console.log(`Aplicativo Atual: ${this.aplicativoAtual}`);
        }
    }
    exibirSeriesNetflix() {
        console.log("Séries disponíveis na Netflix:");
        console.log("1. Wandinha - 1 temporada de 8 episódios");
        console.log("2. You - 4 temporadas de 8 episódios cada");
        console.log("3. Sex Education - 4 temporadas de 8 episódios cada");
        console.log("4. Dark - 3 temporadas de 8 episódios cada");
        const serieSelecionada = parseInt(prompt('Escolha o número da série que deseja assistir: '), 10);
        switch (serieSelecionada) {
            case 1:
                console.log("Você selecionou a série Wandinha.");
                this.selecionarTemporada(1);
                break;
            case 2:
                console.log("Você selecionou a série You.");
                this.selecionarTemporada(4);
                break;
            case 3:
                console.log("Você selecionou a série Sex Education.");
                this.selecionarTemporada(4);
                break;
            case 4:
                console.log("Você selecionou a série Dark.");
                this.selecionarTemporada(3);
                break;
            default:
                console.log("Número de série inválido.");
        }
    }
    exibirSeriesAmazonPrime() {
        console.log("Séries disponíveis no Amazon Prime:");
        console.log("1. Gen Z - 1 temporada de 10 episódios");
        console.log("2. The Boys - 2 temporadas de 10 episódios cada");
        console.log("3. The Office - 5 temporadas de 20 episódios cada");
        const serieSelecionada = parseInt(prompt('Escolha o número da série que deseja assistir: '), 10);
        switch (serieSelecionada) {
            case 1:
                console.log("Você selecionou a série Gen Z.");
                this.selecionarTemporada(1);
                break;
            case 2:
                console.log("Você selecionou a série The Boys.");
                this.selecionarTemporada(2);
                break;
            case 3:
                console.log("Você selecionou a série The Office.");
                this.selecionarTemporada(5);
                break;
            default:
                console.log("Número de série inválido.");
        }
    }
    exibirSeriesHBOMax() {
        console.log("Séries disponíveis na HBO Max:");
        console.log("1. House of the Dragon - 2 temporadas de 10 episódios cada");
        console.log("2. Game of Thrones - 8 temporadas de 8 episódios cada");
        console.log("3. The Last of Us - 1 temporada de 8 episódios");
        const serieSelecionada = parseInt(prompt('Escolha o número da série que deseja assistir: '), 10);
        switch (serieSelecionada) {
            case 1:
                console.log("Você selecionou a série House of the Dragon.");
                this.selecionarTemporada(2);
                break;
            case 2:
                console.log("Você selecionou a série Game of Thrones.");
                this.selecionarTemporada(8);
                break;
            case 3:
                console.log("Você selecionou a série The Last of Us.");
                this.selecionarTemporada(1);
                break;
            default:
                console.log("Número de série inválido.");
        }
    }
    selecionarTemporada(totalTemporadas) {
        const temporada = parseInt(prompt(`Digite o número da temporada (1-${totalTemporadas}) que deseja assistir: `), 10);
        console.log(`Você selecionou a temporada ${temporada}.`);
        this.selecionarEpisodio();
    }
    selecionarEpisodio() {
        const episodio = parseInt(prompt('Digite o número do episódio que deseja assistir: '), 10);
        console.log(`Você selecionou o episódio ${episodio}.`);
        console.log("Aproveite a sua série!");
    }
    listarAplicativos() {
        console.log("Aplicativos disponíveis:");
        this.aplicativos.forEach((app, index) => {
            console.log(`${index + 1} - ${app}`);
        });
    }
    acessarYouTube() {
        const termoPesquisa = prompt('Digite o nome do vídeo ou canal que deseja acessar: ');
        console.log(`Você escolheu acessar o YouTube. Pesquisando por: "${termoPesquisa}"`);
    }
}
exports.default = SmartTelevisao;
