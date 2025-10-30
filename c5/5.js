export function converterTemperatura() {
  let escolha = prompt("Digite 'C' para converter de Celsius para Fahrenheit ou 'F' para o contrário:").toUpperCase();

  if (escolha === "C") {
    let celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));
    let fahrenheit = (celsius * 9) / 5 + 32;
    alert(`${celsius}°C equivalem a ${fahrenheit.toFixed(2)}°F`);
  } else if (escolha === "F") {
    let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));
    let celsius = ((fahrenheit - 32) * 5) / 9;
    alert(`${fahrenheit}°F equivalem a ${celsius.toFixed(2)}°C`);
  } else {
    alert("Opção inválida! Digite apenas 'C' ou 'F'.");
  }
}