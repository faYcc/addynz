/*CMD
  command: /0c
  help: 
  need_reply: 
  auto_retry_time: 
  folder: quitar permisos
  answer: 
  keyboard: 
  aliases: 
CMD*/


var user = options.result.status
if ((user == "administrator") | (user == "creator")) {

Api.setChatPermissions({
chat_id: request.chatid,
can_send_messages: false
})
Bot.sendMessage("He quitado todos los permisos, ahora quien no sea administrador no puede hablar")
}else{
Api.sendMessage({text : "<code>U are gay, u are member, no admin</code>", parse_mode : "HTML"})
} 
