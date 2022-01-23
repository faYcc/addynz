/*CMD
  command: mute2🀄
  help: 
  need_reply: 
  auto_retry_time: 
  folder: mute
  answer: 
  keyboard: 
  aliases: 
CMD*/

var raz = Bot.getProperty("mute")
var id = ""+request.reply_to_message.from.id+""
var user = ""+request.reply_to_message.from.username+""
Api.sendMessage({text: "@"+user+" [<code>"+id+"</code>]\nAcción:<i> Muteado\nRazón: "+raz+"</i>", parse_mode : "HTML"})
