/*CMD
  command: 🧩A
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Balance
  answer: 
  keyboard: 
  aliases: 
CMD*/

var message_id = options.result.message_id
Api.deleteMessage({message_id : message_id})
var din = Libs.ResourcesLib.userRes("din")
var de = Libs.ResourcesLib.userRes("de")
var wd = Libs.ResourcesLib.userRes("wt")
var rc = Libs.ResourcesLib.userRes("refcom")
Bot.sendKeyboard("🧩Inversiones, 〰️Retiros\n🔄Volver",
  "💵*Saldo Actual* :\n"+din.value().toFixed(8)+" TRX\n\n🌐*Comisiones Por Referido* :\n"+rc.value().toFixed(8)+" TRX\n\n📥*Depósitos* :\n"+de.value().toFixed(8)+" TRX\n\n📤*Retiros* :\n"+wd.value().toFixed(8)+" TRX")
