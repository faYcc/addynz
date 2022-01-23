/*CMD
  command: /titlez
  help: 
  need_reply: 
  auto_retry_time: 
  folder: título de admin
  answer: 
  keyboard: 
  aliases: 
CMD*/


var user = options.result.status
if ((user == "creator")) {
if(params){
if (!request.reply_to_message) { 
Bot.sendMessage("Responde el mensaje de un admin para cambiar su título")
return
}
var id = ""+request.reply_to_message.from.id+""
var idd = ""+request.reply_to_message.from.username+""
Api.setChatAdministratorCustomTitle({
  chat_id: request.chatid,
  user_id: id,
  custom_title: params
})
Api.sendMessage({text: "@"+idd+" [<code>"+id+"</code>]\nTítulo de admin:<i> "+params+" </i>", parse_mode : "HTML"}) 
}else{
Bot.sendMessage("`you don't have permission to do this`🥺", { is_reply: true })
}
}
