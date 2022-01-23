/*CMD
  command: unmute🀄
  help: 
  need_reply: 
  auto_retry_time: 
  folder: unmute
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id = ""+request.reply_to_message.from.id+""
var user = ""+request.reply_to_message.from.username+""
Api.sendMessage({text: "@"+user+" [<code>"+id+"</code>]\nAcción:<i> Desmuteado</i>", parse_mode : "HTML"})
