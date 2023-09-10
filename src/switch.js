let pedido_client = "café";

switch (pedido_client) {
  case "café":
    console.log(`Pedido: ${pedido_client}`);
    break;

  case "leite":
    console.log(`Pedido: ${pedido_client}`);
    break;

  case "chá":
    console.log(`Pedido: ${pedido_client}`);
    break;

  default:
    console.log("Não existe esse pedido no cardápio.");
    break;
}
