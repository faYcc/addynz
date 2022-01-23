/*CMD
  command: ➖CheckBal
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
Bot.editMessage("Envía el ID del usuario a remover balance ",z)
User.setProperty("i", z,"string")
Bot.runCommand("➖CheckBal2") 
}


