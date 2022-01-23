/*CMD
  command: 💵CheckBal
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Sección Balance
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(request.data){
const z = request.message.message_id
User.setProperty("id", z,"string") 
Bot.editMessage("Envía el ID del usuario",z)
Bot.runCommand("💵CheckBal2") 
} 
