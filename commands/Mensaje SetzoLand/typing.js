/*CMD
  command: typing
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Mensaje SetzoLand
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.deleteMessage({ message_id: options.result.message_id })
var message_id = options.result.message_id
var id = message_id + 1
var tt = "[Toca Aquí](t.me/ThommasConnor)"
var ttt = "[Toca Aquí](t.me/tfp0days)"
var t = "[Toca Aquí](https://t.me/joinchat/q29DIRRYM_pkNWIx)"
let api = Bot.getProperty(
  "SetzoLand",
  "🚀Puedes Comprar Kurumi Premium Para Uso Privado Por 10 Dólares Mensuales\n👮Vendedor Oficial ~Admin Oficial~ " +
    tt +
    "\n👮Propietario de Kurumi " +
    ttt +
    "\n📣Canal Oficial de Kurumi "+t+""
)
Bot.sendMessage(api, { disable_web_page_preview: true })
Api.pinChatMessage({
  message_id: id
})
Bot.run({
  command: "🧩Run_after24",
  run_after: 1 * 60 * 60 * 24
})

