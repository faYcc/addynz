/*CMD
  command: bn🀄
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id = ""+request.reply_to_message.from.id+""
var user = ""+request.reply_to_message.from.username+""
Bot.sendMessage("@"+user+"* [*`"+id+"`*]\nAcción:* Agregado a admin Bienvenido Al Paraiso♥️",
  { is_reply: true }
)
