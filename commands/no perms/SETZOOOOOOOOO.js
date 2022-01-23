/*CMD
  command: SETZOOOOOOOOO
  help: 
  need_reply: 
  auto_retry_time: 
  folder: no perms
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id = ""+request.reply_to_message.from.id+""
var user = ""+request.reply_to_message.from.username+""
Api.sendMessage({text: "@"+user+" [<code>"+id+"</code>]\nAcción:<i> Agregado a admin, bienvenido Al Paraiso♥️</i>", parse_mode : "HTML"}) 
