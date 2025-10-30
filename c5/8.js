export function restaurante() {
  let prato = prompt(
    "Escolha um prato: pizza, hamburguer, salada ou macarrao"
  ).toLowerCase();

  switch (prato) {
    case "pizza":
      alert("🍕 Pizza - R$ 35,00\nMassa crocante com queijo e molho de tomate.");
      break;
    case "hamburguer":
      alert("🍔 Hambúrguer - R$ 25,00\nPão artesanal com carne e queijo cheddar.");
      break;
    case "salada":
      alert("🥗 Salada - R$ 20,00\nMix de folhas, frango e molho especial.");
      break;
    case "macarrao":
      alert("🍝 Macarrão - R$ 30,00\nMassa ao molho bolonhesa.");
      break;
    default:
      alert("Opção inválida! Escolha pizza, hamburguer, salada ou macarrao.");
  }
}