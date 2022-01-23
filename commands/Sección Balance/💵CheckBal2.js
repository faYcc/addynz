/*CMD
  command: 💵CheckBal2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Sección Balance
  answer: 
  keyboard: 
  aliases: 
CMD*/

var din = Libs.ResourcesLib.anotherUserRes("din",message)
var de = Libs.ResourcesLib.anotherUserRes("de",message)
var wd = Libs.ResourcesLib.anotherUserRes("wt",message)
var rc = Libs.ResourcesLib.userRes("refcom",message)
const z = User.getProperty("id")
const pv = [{title : "↩️Volver", command : "/ap"}] 
Bot.editMessage(
  "💰 *Balance Retirable* `" +
    din.value().toFixed(8) +
    "` *TRX*\n\n➕*Depositos* `" +
    de.value().toFixed(8) +
    "` *TRX*\n\n➖*Retiros* `" +
    wd.value().toFixed(8) +
    "` *TRX*\n\n👤*Comisiones Por Referido* "+rc.value().toFixed(8)+" *TRX*",z) 
Bot.editInlineKeyboard(pv,z) 
Api.deleteMessage({message_id : request.message_id})


