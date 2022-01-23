/*CMD
  command: /unpinz
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💁🏻‍♂ Basic Commands
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = options.result.status
if ((user == "administrator") | (user == "creator")) {

if (!request.reply_to_message) { 
return
}
Api.unpinChatMessage({
chat_id: request.chatid,
message_id: request.reply_to_message.message_id
})
Bot.sendMessage("Desfijado")
}else{
Bot.sendMessage("`you don't have permission to do this`🥺", { is_reply: true })
}
