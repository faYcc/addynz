/*CMD
  command: /start@SophieHelpBot0
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🗣️ Menu
  answer: 
  keyboard: 
  aliases: /start@sophiehelpbot start
CMD*/

var button = [[{text: "📢 Canal del Owner", url: "https://t.me/ancientb"}]]
var text = "*Gracias* para agregarme a su grupo!\nNo olvide *hacerme Administrador del Grupo* ([así es como puede hacerlo](http://telegram.me/SophieHelpBot?start=)), o no podré responder a los comandos.\n*Inícieme en el chat privado*, para que pueda enviarle los mensajes de error allí, sin obstruir este chat!"

Api.sendMessage({
  text: text,
  parse_mode: "Markdown", disable_web_page_preview: true,
  reply_markup: {inline_keyboard: button}
})
