/*CMD
  command: 💹E
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Estadísticas
  answer: 
  keyboard: 
  aliases: 
CMD*/

var message_id = options.result.message_id
var depo = Libs.ResourcesLib.anotherChatRes("depo","global")
var wd = Libs.ResourcesLib.anotherChatRes("wd","global")
var rev = Libs.ResourcesLib.anotherChatRes("rev","global")
var users = Libs.ResourcesLib.anotherChatRes("users","global")
var now = new Date()
var c = Libs.DateTimeFormat.format(now, "dddd")
if ((c == "Saturday") | (c == "Sunday")) {
var ac = "No"
} else {
var ac = "Si"
}

Bot.editMessage("💹*Hoy se acredita : "+ac+"*\n\n📥_Inversiones_ :\n"+depo.value().toFixed(8)+" TRX\n\n📤_Extracciones_ :\n"+wd.value().toFixed(8)+" TRX\n\n👤_Inversores_ : "+users.value()+"",message_id)
