/*CMD
  command: /onchat
  help: 
  need_reply: 
  auto_retry_time: 
  folder: agregar permisos
  answer: 
  keyboard: 
  aliases: 
CMD*/


var admin = Bot.getProperty("admin1"+user.telegramid)
if(user.telegramid == admin){

Api.setChatPermissions({
chat_id: request.chatid,
can_send_messages: true
})
Bot.sendMessage("ty")
}else{
Bot.sendMessage("`you don't have permission to do this`🥺", { is_reply: true })
} 
