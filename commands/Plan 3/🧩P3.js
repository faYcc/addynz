/*CMD
  command: 🧩P3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Plan 3
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(request.data){
var z = request.message.message_id
} else {
var z = User.getProperty("id") 
} 
var p1 = User.getProperty("p3") 
if(p1 == undefined){
User.setProperty("id", z,"string") 
Bot.editMessage("🧩Espere estamos generando su wallet", z)
Bot.runCommand("🧩PC3")
} else {
Bot.editMessage("💵Tu dirección para depositar en el plan 3 ~150 TRX~ es `"+p1+"`\n\n📌Solo puedes comprar el plan 1 vez",z)
}

