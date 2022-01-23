/*CMD
  command: 🧩P5
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Plan 5
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(request.data){
var z = request.message.message_id
} else {
var z = User.getProperty("id") 
} 
var p1 = User.getProperty("p5") 
if(p1 == undefined){
User.setProperty("id", z,"string") 
Bot.editMessage("🧩Espere estamos generando su wallet", z)
Bot.runCommand("🧩PC5")
} else {
Bot.editMessage("💵Tu dirección para depositar en el plan 5 ~500 TRX~ es `"+p1+"`\n\n📌Solo puedes comprar el plan 1 vez",z)
}

