/*CMD
  command: /donate0
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🗣️ Menu
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [[{text: "🔙 Volver", callback_data: "/Help_&_Commands"}]]
var text = "*¿Así que quieres donar?*\n_Mi creador tardó mucho trabajo en llevarme a donde estoy ahora, así que si tienes algo de dinero de sobra y quieres mostrar tu apoyo, puedes donar la cantidad que quieras.\n\nAquí te dejó una lista de billeteras, puedes elegir la que más te guste y hacer tu donación._\n\n*▫️TRX WALLET:* `TDyWrWwuhLwNHo6sdynwgReLDeSvUNmFgj`\n\n*▫️DOGE WALLET:* `DCk73V8ew9bZcGYytndzBgaxMJ8RfyXs7V`\n\n*▫️BTC WALLET:* `39AAii1XgK2FLBdpQXpA6G8RcWFxowqgT7`\n\n*▫️BCH WALLET:* `qp87zlhmdnjnsf37ep0jryv684ml2fz05gjjwhr97n`\n\n*▫️ETH WALLET:* `0xC5a75cCc35c42c46F41340375E73751aE583126A`\n\n*▫️LTC WALLET:* `MB9ZNDUpr9etwAi7Edmgp6qkahwAqsat5y`\n\n*❤️ Gracias por la generosidad!*"

Api.sendMessage({
  text: text,
  parse_mode: "Markdown", disable_web_page_preview: true,
  reply_markup: {inline_keyboard: button}
})



