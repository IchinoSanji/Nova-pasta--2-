import SmartTelevisao from './smartTelevisao';
const prompt = require('prompt-sync')();

const tv = new SmartTelevisao();
let opcao = '';

while (opcao !== '0') {
  console.log("\nControle Remoto:");
  if (!tv.isLigada()) {
    console.log("1 - Ligar a TV");
  } else {
    console.log("2 - Desligar a TV");
    console.log("3 - Mudar de Canal");
    console.log("4 - Aumentar Volume");
    console.log("5 - Diminuir Volume");
    console.log("6 - Acessar Aplicativo");
    console.log("7 - Listar Aplicativos");
  }
  console.log("0 - Sair");
  opcao = prompt('Escolha uma opção: ');

  switch (opcao) {
    case '1':
      if (!tv.isLigada()) {
        tv.ligar();
      } else {
        console.log("A TV já está ligada.");
      }
      break;
    case '2':
      if (tv.isLigada()) {
        tv.desligar();
      } else {
        console.log("A TV já está desligada.");
      }
      break;
    case '3':
      if (tv.isLigada()) {
        const canal = parseInt(prompt('Digite o número do canal: '), 10);
        tv.mudarCanal(canal);
      } else {
        console.log("A TV está desligada.");
      }
      break;
    case '4':
      if (tv.isLigada()) {
        tv.aumentarVolume();
      } else {
        console.log("A TV está desligada.");
      }
      break;
    case '5':
      if (tv.isLigada()) {
        tv.diminuirVolume();
      } else {
        console.log("A TV está desligada.");
      }
      break;
    case '6':
      if (tv.isLigada()) {
        const numeroAplicativo = parseInt(prompt('Digite o número do aplicativo: '), 10);
        tv.acessarAplicativo(numeroAplicativo);
      } else {
        console.log("A TV está desligada.");
      }
      break;
    case '7':
      if (tv.isLigada()) {
        tv.listarAplicativos();
      } else {
        console.log("A TV está desligada.");
      }
      break;
    case '0':
      console.log("Saindo...");
      break;
    default:
      console.log("Opção inválida!");
  }
}
