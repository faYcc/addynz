/*CMD
  command: /pinz
  help: 
  need_reply: 
  auto_retry_time: 
  folder: pin
  answer: 
  keyboard: 
  aliases: 
CMD*/


var user = options.result.status
if ((user == "administrator") | (user == "creator")) {
if (!request.reply_to_message) { 
Bot.sendMessage("Para fijar un mensaje tienes que responderlo")
return
}
Api.pinChatMessage({
chat_id: request.chatid,
message_id: request.reply_to_message.message_id
})

Bot.sendMessage("Mensaje Fijado")
} else {
return}
