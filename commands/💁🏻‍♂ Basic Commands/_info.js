/*CMD
  command: /info
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 💁🏻‍♂ Basic Commands
  answer: 
  keyboard: 
  aliases: 
CMD*/

var name = ""+request.reply_to_message.from.first_name+""
var user = ""+request.reply_to_message.from.username+""
var id = ""+request.reply_to_message.from.id+""

Bot.sendMessage("*👤 Nombre:* `"+name+"`\n*🗣️ Alias:* `@"+user+"`\n*🆔  ID:* `"+id+"`",
  { is_reply: true }
)
