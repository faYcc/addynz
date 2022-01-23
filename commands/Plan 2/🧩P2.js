/*CMD
  command: 🧩P2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Plan 2
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(request.data){
var z = request.message.message_id
} else {
var z = User.getProperty("id") 
} 
var p1 = User.getProperty("p2") 
if(p1 == undefined){
User.setProperty("id", z,"string") 
Bot.editMessage("🧩Espere estamos generando su wallet", z)
Bot.runCommand("🧩PC2")
} else {
Bot.editMessage("💵Tu dirección para depositar en el plan 2 ~100 TRX~ es `"+p1+"`\n\n📌Solo puedes comprar el plan 1 vez",z)
}

