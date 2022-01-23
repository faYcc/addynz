/*CMD
  command: .mutez
  help: 
  need_reply: 
  auto_retry_time: 
  folder: mute
  answer: 
  keyboard: 
  aliases: 
CMD*/


var user = options.result.status
if ((user == "administrator") | (user == "creator")) {
 
if (!request.reply_to_message) { 
return
}
var id = ""+request.reply_to_message.from.id+""
Api.restrictChatMember({
  chat_id: request.chatid,
  user_id: id,
  on_result: "mute🀄"
})
}else{
Bot.sendMessage("you don't have permission to do this") 
} 

