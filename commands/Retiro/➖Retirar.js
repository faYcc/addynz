/*CMD
  command: ➖Retirar
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Retiro
  answer: 
  keyboard: 
  aliases: 
CMD*/

var din = Libs.ResourcesLib.userRes("din")
if (din.value() < 10) {
  Bot.sendMessage("🚫Necesitas al menos 10 TRX para retirar")
  return
}
var wallet = Bot.getProperty("wallet" + user.telegramid)
if(wallet == undefined){
const pv = [{title : "🔗Colocar Dirección",command :"🔗GoSet"}] 
Bot.sendInlineKeyboard(pv,"💼No cuentas con una dirección de Trx Configurada, por favor coloca una wallet")
return 
} 

Bot.sendMessage(
  "💵¿Cuánto Desea Retirar?\n\n💶Mínimo 10 TRX\n💷Máximo " +
    din.value().toFixed(8) +
    "\n\n📌Sus retiros serán enviados a la dirección\n`" +
    wallet +
    "`"
)
Bot.runCommand("💵WD")

